/** Kubernetes resource quantity helpers (CPU millicores / memory bytes). */

export type CpuUnit = "cores" | "millicores";

export type MemoryUnit =
  | "B"
  | "Ki"
  | "Mi"
  | "Gi"
  | "Ti"
  | "K"
  | "M"
  | "G"
  | "T"
  | "KB"
  | "MB"
  | "GB"
  | "TB";

const BINARY: Record<"Ki" | "Mi" | "Gi" | "Ti", number> = {
  Ki: 1024,
  Mi: 1024 ** 2,
  Gi: 1024 ** 3,
  Ti: 1024 ** 4,
};

const DECIMAL: Record<"K" | "M" | "G" | "T" | "KB" | "MB" | "GB" | "TB", number> = {
  K: 1e3,
  M: 1e6,
  G: 1e9,
  T: 1e12,
  KB: 1e3,
  MB: 1e6,
  GB: 1e9,
  TB: 1e12,
};

export const MEMORY_UNITS: readonly MemoryUnit[] = [
  "B",
  "Ki",
  "Mi",
  "Gi",
  "Ti",
  "K",
  "M",
  "G",
  "T",
  "KB",
  "MB",
  "GB",
  "TB",
];

const DECIMAL_MEM = new Set<MemoryUnit>([
  "K",
  "M",
  "G",
  "T",
  "KB",
  "MB",
  "GB",
  "TB",
]);

const DECIMAL_TO_BINARY: Partial<Record<MemoryUnit, MemoryUnit>> = {
  K: "Ki",
  KB: "Ki",
  M: "Mi",
  MB: "Mi",
  G: "Gi",
  GB: "Gi",
  T: "Ti",
  TB: "Ti",
};

export function coresToMillicores(cores: number): number {
  return cores * 1000;
}

export function millicoresToCores(millicores: number): number {
  return millicores / 1000;
}

export function parseCpuNumber(raw: string): number | null {
  const trimmed = raw.trim().replace(",", ".");
  if (!trimmed) return null;
  if (!/^\d+(\.\d+)?([eE][+-]?\d+)?$/.test(trimmed)) return null;
  const n = Number(trimmed);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

/** Normalize input to cores. Millicores must be whole numbers in k8s practice. */
export function toCores(value: number, unit: CpuUnit): number | null {
  if (!Number.isFinite(value) || value < 0) return null;
  if (unit === "cores") return value;
  if (!Number.isInteger(value)) return null;
  return millicoresToCores(value);
}

export function formatCpuCores(cores: number): string {
  if (!Number.isFinite(cores)) return "";
  const rounded = Math.round(cores * 1e9) / 1e9;
  if (Number.isInteger(rounded)) return String(rounded);
  return String(rounded).replace(/\.?0+$/, "");
}

export function formatMillicores(cores: number): string {
  const m = Math.round(coresToMillicores(cores) * 1e6) / 1e6;
  if (Number.isInteger(m)) return String(m);
  return String(m);
}

export function cpuYamlSnippets(cores: number): { millicores: string; cores: string } {
  const m = formatMillicores(cores);
  const c = formatCpuCores(cores);
  return {
    millicores: `cpu: "${m}m"`,
    cores: `cpu: "${c}"`,
  };
}

export function memoryFactor(unit: MemoryUnit): number {
  if (unit === "B") return 1;
  if (unit in BINARY) return BINARY[unit as keyof typeof BINARY];
  return DECIMAL[unit as keyof typeof DECIMAL];
}

export function toBytes(value: number, unit: MemoryUnit): number | null {
  if (!Number.isFinite(value) || value < 0) return null;
  return value * memoryFactor(unit);
}

export function fromBytes(bytes: number, unit: MemoryUnit): number {
  return bytes / memoryFactor(unit);
}

function trimNum(n: number): string {
  if (!Number.isFinite(n)) return "";
  if (Number.isInteger(n)) return String(n);
  const s = n.toPrecision(12).replace(/\.?0+$/, "");
  const asNum = Number(s);
  if (Number.isInteger(asNum) && Math.abs(asNum - n) < 1e-9) return String(asNum);
  return String(Number(s));
}

export type MemoryEquivalents = Record<MemoryUnit, string>;

export function memoryEquivalents(bytes: number): MemoryEquivalents {
  const out = {} as MemoryEquivalents;
  for (const unit of MEMORY_UNITS) {
    out[unit] = trimNum(fromBytes(bytes, unit));
  }
  return out;
}

/** Prefer binary Mi/Gi style for YAML when exact; else decimal M/G; else bytes. */
export function memoryYamlSnippet(bytes: number): string {
  const prefer: MemoryUnit[] = ["Ti", "Gi", "Mi", "Ki", "T", "G", "M", "K"];
  for (const unit of prefer) {
    const v = fromBytes(bytes, unit);
    if (Number.isInteger(v) && v >= 1) {
      return `memory: "${v}${unit}"`;
    }
  }
  const whole = Math.round(bytes);
  return `memory: "${whole}"`;
}

export function isDecimalMemoryUnit(unit: MemoryUnit): boolean {
  return DECIMAL_MEM.has(unit);
}

export type DecimalMemWarning = {
  entered: string;
  binarySuggest: string;
  binaryUnit: MemoryUnit;
};

/** Warn when decimal units are used — common Mi/M confusion. */
export function decimalMemoryWarning(
  value: number,
  unit: MemoryUnit,
): DecimalMemWarning | null {
  if (!isDecimalMemoryUnit(unit)) return null;
  const binaryUnit = DECIMAL_TO_BINARY[unit];
  if (!binaryUnit) return null;
  const entered = `${trimNum(value)}${unit}`;
  const binarySuggest = `${trimNum(value)}${binaryUnit}`;
  return { entered, binarySuggest, binaryUnit };
}

export type ParsedCpu = { value: number; unit: CpuUnit; label: string };
export type ParsedMemory = { value: number; unit: MemoryUnit; label: string };

/** Parse k8s CPU quantity: `500m`, `0.5`, `1`, `1e3m`. */
export function parseCpuQuantity(raw: string): ParsedCpu | null {
  const s = raw.trim().replace(",", ".").replace(/\s+/g, "");
  if (!s) return null;
  const m = /^(\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(m)?$/i.exec(s);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isFinite(n) || n < 0) return null;
  if (m[2]) {
    if (!Number.isInteger(n)) return null;
    return { value: n, unit: "millicores", label: `${n}m` };
  }
  return { value: n, unit: "cores", label: formatCpuCores(n) };
}

const MEM_SUFFIX_RE =
  /^(\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(Ki|Mi|Gi|Ti|KB|MB|GB|TB|K|M|G|T|B)?$/i;

const MEM_SUFFIX_MAP: Record<string, MemoryUnit> = {
  ki: "Ki",
  mi: "Mi",
  gi: "Gi",
  ti: "Ti",
  kb: "KB",
  mb: "MB",
  gb: "GB",
  tb: "TB",
  k: "K",
  m: "M",
  g: "G",
  t: "T",
  b: "B",
};

/** Parse k8s memory quantity: `256Mi`, `1G`, `512M`, bare number → fallback unit. */
export function parseMemoryQuantity(
  raw: string,
  fallbackUnit: MemoryUnit = "Mi",
): ParsedMemory | null {
  const s = raw.trim().replace(",", ".").replace(/\s+/g, "");
  if (!s) return null;
  const m = MEM_SUFFIX_RE.exec(s);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isFinite(n) || n < 0) return null;
  let unit: MemoryUnit = fallbackUnit;
  if (m[2]) {
    const mapped = MEM_SUFFIX_MAP[m[2].toLowerCase()];
    if (!mapped) return null;
    unit = mapped;
  }
  return { value: n, unit, label: m[2] ? `${trimNum(n)}${unit}` : `${trimNum(n)}` };
}

export type QosClass = "Guaranteed" | "Burstable" | "BestEffort";

/**
 * Pod QoS from container-level request/limit pairs (simplified single-container view).
 * Empty field = unset. CPU compared in millicores; memory in bytes.
 */
export function classifyQos(input: {
  reqCpu: number | null;
  limCpu: number | null;
  reqMem: number | null;
  limMem: number | null;
}): QosClass {
  const hasReq = input.reqCpu !== null || input.reqMem !== null;
  const hasLim = input.limCpu !== null || input.limMem !== null;
  if (!hasReq && !hasLim) return "BestEffort";

  const cpuEqual =
    input.reqCpu !== null &&
    input.limCpu !== null &&
    Math.abs(input.reqCpu - input.limCpu) < 1e-9;
  const memEqual =
    input.reqMem !== null &&
    input.limMem !== null &&
    Math.abs(input.reqMem - input.limMem) < 1e-9;
  const cpuBoth = input.reqCpu !== null && input.limCpu !== null;
  const memBoth = input.reqMem !== null && input.limMem !== null;

  if (cpuBoth && memBoth && cpuEqual && memEqual) return "Guaranteed";
  if (hasReq || hasLim) return "Burstable";
  return "BestEffort";
}

export function formatShareCpu(cores: number): string {
  const m = coresToMillicores(cores);
  if (Number.isInteger(m)) return `${m}m`;
  return formatCpuCores(cores);
}

export function formatShareMem(bytes: number, preferred: MemoryUnit): string {
  const v = fromBytes(bytes, preferred);
  if (Number.isInteger(v) && v >= 1) return `${v}${preferred}`;
  return memoryYamlSnippet(bytes).replace(/^memory:\s*"([^"]+)"$/, "$1");
}

export const CPU_EXAMPLES: readonly { label: string; value: string; unit: CpuUnit }[] = [
  { label: "100m", value: "100", unit: "millicores" },
  { label: "500m", value: "500", unit: "millicores" },
  { label: "1", value: "1", unit: "cores" },
  { label: "2.5", value: "2.5", unit: "cores" },
];

export const MEMORY_EXAMPLES: readonly {
  label: string;
  value: string;
  unit: MemoryUnit;
}[] = [
  { label: "128Mi", value: "128", unit: "Mi" },
  { label: "256Mi", value: "256", unit: "Mi" },
  { label: "1Gi", value: "1", unit: "Gi" },
  { label: "512M", value: "512", unit: "M" },
];
