import "./style.css";
import {
  CPU_EXAMPLES,
  MEMORY_EXAMPLES,
  MEMORY_UNITS,
  classifyQos,
  cpuYamlSnippets,
  decimalMemoryWarning,
  formatCpuCores,
  formatMillicores,
  formatShareCpu,
  formatShareMem,
  memoryEquivalents,
  memoryYamlSnippet,
  parseCpuNumber,
  parseCpuQuantity,
  parseMemoryQuantity,
  toBytes,
  toCores,
  type CpuUnit,
  type MemoryUnit,
  type QosClass,
} from "./convert";
import { detectLocale, t } from "./i18n";
import { registerServiceWorker } from "./register-sw";
import type { Locale } from "./site-config";

type AppState = {
  locale: Locale;
  cores: number | null;
  memBytes: number | null;
  memUnit: MemoryUnit;
};

const state: AppState = {
  locale: "ru",
  cores: null,
  memBytes: null,
  memUnit: "Mi",
};

function byId<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? ""));
}

function clearActionStatuses(): void {
  const main = byId<HTMLElement>("status");
  main.textContent = "";
  main.classList.remove("is-error");
  for (const el of document.querySelectorAll<HTMLElement>(".row-status")) {
    el.textContent = "";
    el.classList.remove("is-error");
  }
}

function setStatus(
  message: string,
  isError = false,
  target: HTMLElement = byId("status"),
): void {
  clearActionStatuses();
  target.textContent = message;
  target.classList.toggle("is-error", isError);
}

async function copyText(
  text: string,
  okKey: "copied" | "shareCopied" = "copied",
  statusEl: HTMLElement = byId("status"),
): Promise<void> {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    setStatus(t(state.locale, okKey), false, statusEl);
  } catch {
    setStatus(t(state.locale, "copyError"), true, statusEl);
  }
}

function bindLangMenu(): void {
  const langRoot = document.querySelector<HTMLDetailsElement>(".lang");
  if (!langRoot) return;
  document.addEventListener("click", (event) => {
    if (!langRoot.open) return;
    const target = event.target;
    if (target instanceof Node && !langRoot.contains(target)) {
      langRoot.open = false;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && langRoot.open) langRoot.open = false;
  });
}

function syncUrl(): void {
  const params = new URLSearchParams(window.location.search);
  if (state.cores !== null) params.set("cpu", formatShareCpu(state.cores));
  else params.delete("cpu");
  if (state.memBytes !== null) {
    params.set("mem", formatShareMem(state.memBytes, state.memUnit));
  } else params.delete("mem");
  const qs = params.toString();
  const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
  window.history.replaceState(null, "", next);
}

function applyCpuParsed(value: number, unit: CpuUnit): void {
  byId<HTMLInputElement>("cpu-input").value = String(value);
  byId<HTMLSelectElement>("cpu-unit").value = unit;
}

function applyMemParsed(value: number, unit: MemoryUnit): void {
  byId<HTMLInputElement>("mem-input").value = String(value);
  byId<HTMLSelectElement>("mem-unit").value = unit;
}

function trySmartCpuInput(): void {
  const raw = byId<HTMLInputElement>("cpu-input").value;
  const parsed = parseCpuQuantity(raw);
  if (!parsed) return;
  if (/m$/i.test(raw.trim()) || parsed.unit !== "cores") {
    applyCpuParsed(parsed.value, parsed.unit);
  }
}

function trySmartMemInput(): void {
  const raw = byId<HTMLInputElement>("mem-input").value;
  const currentUnit = byId<HTMLSelectElement>("mem-unit").value as MemoryUnit;
  const parsed = parseMemoryQuantity(raw, currentUnit);
  if (!parsed) return;
  if (/[a-zA-Z]/.test(raw.trim())) {
    applyMemParsed(parsed.value, parsed.unit);
  }
}

function renderCpuExamples(): void {
  const root = byId<HTMLDivElement>("cpu-examples");
  root.replaceChildren();
  for (const ex of CPU_EXAMPLES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-small example-btn";
    btn.textContent = ex.label;
    btn.addEventListener("click", () => {
      applyCpuParsed(Number(ex.value), ex.unit);
      updateCpu();
    });
    root.append(btn);
  }
}

function renderMemExamples(): void {
  const root = byId<HTMLDivElement>("mem-examples");
  root.replaceChildren();
  for (const ex of MEMORY_EXAMPLES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-small example-btn";
    btn.textContent = ex.label;
    btn.addEventListener("click", () => {
      applyMemParsed(Number(ex.value), ex.unit);
      updateMem();
    });
    root.append(btn);
  }
}

function updateCpu(): void {
  trySmartCpuInput();
  const raw = byId<HTMLInputElement>("cpu-input").value;
  const unit = byId<HTMLSelectElement>("cpu-unit").value as CpuUnit;
  const results = byId<HTMLElement>("cpu-results");
  const smart = parseCpuQuantity(raw);
  let n: number | null = null;
  let useUnit = unit;
  if (smart && /[a-zA-Z]/.test(raw.trim())) {
    n = smart.value;
    useUnit = smart.unit;
    applyCpuParsed(smart.value, smart.unit);
  } else {
    n = parseCpuNumber(raw);
  }
  if (n === null) {
    state.cores = null;
    results.hidden = true;
    syncUrl();
    return;
  }
  const cores = toCores(n, useUnit);
  if (cores === null) {
    state.cores = null;
    results.hidden = true;
    setStatus(t(state.locale, "cpuMillicoresInt"), true);
    syncUrl();
    return;
  }
  setStatus("");
  state.cores = cores;
  const millicores = formatMillicores(cores);
  const coresLabel = formatCpuCores(cores);
  const equiv = byId<HTMLDListElement>("cpu-equiv");
  equiv.replaceChildren();
  const rows: [string, string][] = [
    [t(state.locale, "cpuCoresLabel"), coresLabel],
    [t(state.locale, "cpuMilliLabel"), `${millicores}m`],
  ];
  for (const [dt, dd] of rows) {
    const term = document.createElement("dt");
    term.textContent = dt;
    const def = document.createElement("dd");
    def.textContent = dd;
    equiv.append(term, def);
  }
  const yaml = cpuYamlSnippets(cores);
  byId<HTMLElement>("cpu-yaml-m").textContent = yaml.millicores;
  byId<HTMLElement>("cpu-yaml-c").textContent = yaml.cores;
  results.hidden = false;
  syncUrl();
}

function updateMemWarn(value: number, unit: MemoryUnit): void {
  const warn = byId<HTMLParagraphElement>("mem-warn");
  const tip = decimalMemoryWarning(value, unit);
  if (!tip) {
    warn.hidden = true;
    warn.replaceChildren();
    return;
  }
  warn.hidden = false;
  warn.replaceChildren();
  const text = document.createElement("span");
  text.textContent = format(t(state.locale, "warnDecimalMem"), {
    entered: tip.entered,
    binary: tip.binarySuggest,
  });
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-small";
  btn.textContent = format(t(state.locale, "useBinaryInstead"), {
    binary: tip.binarySuggest,
  });
  btn.addEventListener("click", () => {
    applyMemParsed(value, tip.binaryUnit);
    updateMem();
  });
  warn.append(text, btn);
}

function updateMem(): void {
  trySmartMemInput();
  const raw = byId<HTMLInputElement>("mem-input").value;
  const unit = byId<HTMLSelectElement>("mem-unit").value as MemoryUnit;
  const results = byId<HTMLElement>("mem-results");
  const smart = parseMemoryQuantity(raw, unit);
  let n: number | null = null;
  let useUnit = unit;
  if (smart && /[a-zA-Z]/.test(raw.trim())) {
    n = smart.value;
    useUnit = smart.unit;
    applyMemParsed(smart.value, smart.unit);
  } else {
    n = parseCpuNumber(raw);
  }
  if (n === null) {
    state.memBytes = null;
    results.hidden = true;
    byId<HTMLParagraphElement>("mem-warn").hidden = true;
    syncUrl();
    return;
  }
  const bytes = toBytes(n, useUnit);
  if (bytes === null) {
    state.memBytes = null;
    results.hidden = true;
    syncUrl();
    return;
  }
  setStatus("");
  state.memBytes = bytes;
  state.memUnit = useUnit;
  updateMemWarn(n, useUnit);
  const eq = memoryEquivalents(bytes);
  const equiv = byId<HTMLDListElement>("mem-equiv");
  equiv.replaceChildren();
  for (const u of MEMORY_UNITS) {
    const term = document.createElement("dt");
    term.textContent = u;
    const def = document.createElement("dd");
    def.textContent = eq[u];
    equiv.append(term, def);
  }
  byId<HTMLElement>("mem-yaml").textContent = memoryYamlSnippet(bytes);
  results.hidden = false;
  syncUrl();
}

function coresFromField(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const parsed = parseCpuQuantity(trimmed);
  if (!parsed) return null;
  return toCores(parsed.value, parsed.unit);
}

function bytesFromField(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const parsed = parseMemoryQuantity(trimmed, "Mi");
  if (!parsed) return null;
  return toBytes(parsed.value, parsed.unit);
}

function qosExplain(cls: QosClass): string {
  if (cls === "Guaranteed") return t(state.locale, "qosExplainGuaranteed");
  if (cls === "Burstable") return t(state.locale, "qosExplainBurstable");
  return t(state.locale, "qosExplainBestEffort");
}

function qosLabel(cls: QosClass): string {
  if (cls === "Guaranteed") return t(state.locale, "qosGuaranteed");
  if (cls === "Burstable") return t(state.locale, "qosBurstable");
  return t(state.locale, "qosBestEffort");
}

function updateQos(): void {
  const reqCpuRaw = byId<HTMLInputElement>("qos-req-cpu").value;
  const limCpuRaw = byId<HTMLInputElement>("qos-lim-cpu").value;
  const reqMemRaw = byId<HTMLInputElement>("qos-req-mem").value;
  const limMemRaw = byId<HTMLInputElement>("qos-lim-mem").value;

  const reqCpu = reqCpuRaw.trim() ? coresFromField(reqCpuRaw) : null;
  const limCpu = limCpuRaw.trim() ? coresFromField(limCpuRaw) : null;
  const reqMem = reqMemRaw.trim() ? bytesFromField(reqMemRaw) : null;
  const limMem = limMemRaw.trim() ? bytesFromField(limMemRaw) : null;

  if (
    (reqCpuRaw.trim() && reqCpu === null) ||
    (limCpuRaw.trim() && limCpu === null) ||
    (reqMemRaw.trim() && reqMem === null) ||
    (limMemRaw.trim() && limMem === null)
  ) {
    setStatus(t(state.locale, "qosInvalid"), true);
    return;
  }

  const cls = classifyQos({ reqCpu, limCpu, reqMem, limMem });
  byId<HTMLElement>("qos-class-value").textContent = qosLabel(cls);
  byId<HTMLElement>("qos-explain").textContent = qosExplain(cls);
}

function localizeStaticUi(): void {
  byId<HTMLElement>("cpu-title").textContent = t(state.locale, "cpuTitle");
  byId<HTMLElement>("mem-title").textContent = t(state.locale, "memTitle");
  byId<HTMLElement>("rl-tip").innerHTML = t(state.locale, "rlTipHtml");
  byId<HTMLButtonElement>("cpu-copy-m").textContent = t(state.locale, "copy");
  byId<HTMLButtonElement>("cpu-copy-c").textContent = t(state.locale, "copy");
  byId<HTMLButtonElement>("mem-copy-yaml").textContent = t(state.locale, "copy");
  byId<HTMLButtonElement>("share").textContent = t(state.locale, "share");
  byId<HTMLElement>("qos-title").textContent = t(state.locale, "qosTitle");
  byId<HTMLElement>("qos-hint").textContent = t(state.locale, "qosHint");
  byId<HTMLElement>("qos-req-cpu-label").textContent = t(state.locale, "qosReqCpu");
  byId<HTMLElement>("qos-lim-cpu-label").textContent = t(state.locale, "qosLimCpu");
  byId<HTMLElement>("qos-req-mem-label").textContent = t(state.locale, "qosReqMem");
  byId<HTMLElement>("qos-lim-mem-label").textContent = t(state.locale, "qosLimMem");
  byId<HTMLElement>("qos-class-label").textContent = t(state.locale, "qosClassLabel");
  byId<HTMLInputElement>("cpu-input").placeholder = t(state.locale, "cpuPlaceholder");
  byId<HTMLInputElement>("mem-input").placeholder = t(state.locale, "memPlaceholder");
  const cpuSelect = byId<HTMLSelectElement>("cpu-unit");
  cpuSelect.options[0].text = t(state.locale, "unitCores");
  cpuSelect.options[1].text = t(state.locale, "unitMillicores");
}

function loadFromUrl(): void {
  const params = new URLSearchParams(window.location.search);
  const cpu = params.get("cpu");
  const mem = params.get("mem");
  if (cpu) {
    const parsed = parseCpuQuantity(cpu);
    if (parsed) applyCpuParsed(parsed.value, parsed.unit);
  } else {
    applyCpuParsed(500, "millicores");
  }
  if (mem) {
    const parsed = parseMemoryQuantity(mem, "Mi");
    if (parsed) applyMemParsed(parsed.value, parsed.unit);
  } else {
    applyMemParsed(256, "Mi");
  }
}

function init(): void {
  state.locale = detectLocale();
  bindLangMenu();
  localizeStaticUi();
  renderCpuExamples();
  renderMemExamples();
  loadFromUrl();

  byId<HTMLInputElement>("cpu-input").addEventListener("input", updateCpu);
  byId<HTMLInputElement>("cpu-input").addEventListener("change", updateCpu);
  byId<HTMLSelectElement>("cpu-unit").addEventListener("change", updateCpu);
  byId<HTMLInputElement>("mem-input").addEventListener("input", updateMem);
  byId<HTMLInputElement>("mem-input").addEventListener("change", updateMem);
  byId<HTMLSelectElement>("mem-unit").addEventListener("change", updateMem);

  for (const id of ["qos-req-cpu", "qos-lim-cpu", "qos-req-mem", "qos-lim-mem"]) {
    byId<HTMLInputElement>(id).addEventListener("input", updateQos);
    byId<HTMLInputElement>(id).addEventListener("change", updateQos);
  }

  byId<HTMLButtonElement>("cpu-copy-m").addEventListener("click", () => {
    void copyText(
      byId<HTMLElement>("cpu-yaml-m").textContent ?? "",
      "copied",
      byId("cpu-copy-m-status"),
    );
  });
  byId<HTMLButtonElement>("cpu-copy-c").addEventListener("click", () => {
    void copyText(
      byId<HTMLElement>("cpu-yaml-c").textContent ?? "",
      "copied",
      byId("cpu-copy-c-status"),
    );
  });
  byId<HTMLButtonElement>("mem-copy-yaml").addEventListener("click", () => {
    void copyText(
      byId<HTMLElement>("mem-yaml").textContent ?? "",
      "copied",
      byId("mem-copy-yaml-status"),
    );
  });
  byId<HTMLButtonElement>("share").addEventListener("click", () => {
    syncUrl();
    void copyText(window.location.href, "shareCopied", byId("status"));
  });

  updateCpu();
  updateMem();
  updateQos();
  registerServiceWorker();
}

init();
