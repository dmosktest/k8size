import { localeNames, localeRecord, type Locale } from "./site-config";

export type SeoFaq = {
  q: string;
  a: string;
};

export type SeoCopy = {
  title: string;
  description: string;
  heading: string;
  leadHtml: string;
  benefitsTitle: string;
  benefits: string[];
  howTitle: string;
  howSteps: string[];
  strongTitle: string;
  strongLead: string;
  strongTips: string[];
  usesTitle: string;
  uses: string[];
  faqTitle: string;
  faq: SeoFaq[];
  appName: string;
  tipsLabel: string;
};

type SeoBody = Omit<SeoCopy, "title" | "description" | "heading" | "leadHtml">;

const titles = localeNames({
  ru: "k8size — конвертер CPU и памяти Kubernetes",
  en: "k8size — Kubernetes CPU and memory unit converter",
  zh: "k8size — Kubernetes CPU 与内存单位换算",
  es: "k8size — conversor de CPU y memoria de Kubernetes",
  hi: "k8size — Kubernetes CPU और मेमोरी इकाई कनवर्टर",
  ar: "k8size — محول وحدات CPU والذاكرة في Kubernetes",
  bn: "k8size — Kubernetes CPU ও মেমরি একক কনভার্টার",
  pt: "k8size — conversor de CPU e memória Kubernetes",
  fr: "k8size — convertisseur d’unités CPU et mémoire Kubernetes",
  de: "k8size — Kubernetes CPU- und Speichereinheiten-Umrechner",
  ja: "k8size — Kubernetes の CPU・メモリ単位コンバーター",
  id: "k8size — konverter unit CPU dan memori Kubernetes",
  pa: "k8size — Kubernetes CPU ਅਤੇ ਮੈਮੋਰੀ ਇਕਾਈ ਕਨਵਰਟਰ",
  jv: "k8size — konverter unit CPU lan memori Kubernetes",
  te: "k8size — Kubernetes CPU మరియు మెమరీ యూనిట్ కన్వర్టర్",
  tr: "k8size — Kubernetes CPU ve bellek birimi dönüştürücü",
  ko: "k8size — Kubernetes CPU·메모리 단위 변환기",
  mr: "k8size — Kubernetes CPU आणि मेमरी एकक कनव्हर्टर",
  vi: "k8size — bộ đổi đơn vị CPU và bộ nhớ Kubernetes",
  ta: "k8size — Kubernetes CPU மற்றும் நினைவக அலகு மாற்றி",
  it: "k8size — convertitore di unità CPU e memoria Kubernetes",
  fa: "k8size — مبدل واحدهای CPU و حافظه Kubernetes",
  tlh: "k8size — Kubernetes CPU qawHaq je 'ay' choHwI'"
});

const descriptions = localeNames({
  ru: "Конвертер единиц Kubernetes: cores ↔ millicores, Mi/Gi vs M/G с предупреждением, QoS одного контейнера и шаринг ?cpu=&mem=. Всё в браузере.",
  en: "Kubernetes unit converter: cores ↔ millicores, Mi/Gi vs M/G with a decimal warning, single-container QoS, and shareable ?cpu=&mem= links. Runs in the browser.",
  zh: "Kubernetes 单位换算：cores ↔ millicores、Mi/Gi 与 M/G 警告、单容器 QoS，以及可分享的 ?cpu=&mem= 链接。全部在浏览器中运行。",
  es: "Conversor de unidades Kubernetes: cores ↔ millicores, Mi/Gi vs M/G con aviso, QoS de un contenedor y enlaces ?cpu=&mem=. Todo en el navegador.",
  hi: "Kubernetes इकाई कनवर्टर: cores ↔ millicores, Mi/Gi बनाम M/G चेतावनी, एक कंटेनर QoS और साझा ?cpu=&mem= लिंक। ब्राउज़र में चलता है।",
  ar: "محول وحدات Kubernetes: cores ↔ millicores وتحذير Mi/Gi مقابل M/G وQoS لحاوية واحدة وروابط ?cpu=&mem=. يعمل في المتصفح.",
  bn: "Kubernetes একক কনভার্টার: cores ↔ millicores, Mi/Gi বনাম M/G সতর্কতা, এক কন্টেইনার QoS এবং শেয়ারযোগ্য ?cpu=&mem= লিংক। ব্রাউজারে চলে।",
  pt: "Conversor de unidades Kubernetes: cores ↔ millicores, Mi/Gi vs M/G com aviso, QoS de um contentor e links ?cpu=&mem=. Corre no navegador.",
  fr: "Convertisseur d’unités Kubernetes : cores ↔ millicores, alerte Mi/Gi vs M/G, QoS d’un conteneur et liens ?cpu=&mem=. Dans le navigateur.",
  de: "Kubernetes-Einheiten-Umrechner: Cores ↔ Millicores, Warnung Mi/Gi vs M/G, QoS für einen Container und teilbare ?cpu=&mem=-Links. Im Browser.",
  ja: "Kubernetes 単位換算：cores ↔ millicores、Mi/Gi と M/G の警告、単一コンテナ QoS、共有可能な ?cpu=&mem=。ブラウザ内で動作。",
  id: "Konverter unit Kubernetes: cores ↔ millicores, peringatan Mi/Gi vs M/G, QoS satu kontainer, dan tautan ?cpu=&mem=. Di peramban.",
  pa: "Kubernetes ਇਕਾਈ ਕਨਵਰਟਰ: cores ↔ millicores, Mi/Gi ਬਨਾਮ M/G ਚੇਤਾਵਨੀ, ਇੱਕ ਕੰਟੇਨਰ QoS ਅਤੇ ?cpu=&mem= ਲਿੰਕ। ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ।",
  jv: "Konverter unit Kubernetes: cores ↔ millicores, pepenget Mi/Gi vs M/G, QoS siji kontainer, lan pranala ?cpu=&mem=. Ing browser.",
  te: "Kubernetes యూనిట్ కన్వర్టర్: cores ↔ millicores, Mi/Gi vs M/G హెచ్చరిక, ఒక కంటైనర్ QoS, ?cpu=&mem= లింకులు. బ్రౌజర్‌లో.",
  tr: "Kubernetes birim dönüştürücü: cores ↔ millicores, Mi/Gi vs M/G uyarısı, tek konteyner QoS ve ?cpu=&mem= bağlantıları. Tarayıcıda.",
  ko: "Kubernetes 단위 변환: cores ↔ millicores, Mi/Gi vs M/G 경고, 단일 컨테이너 QoS, 공유 ?cpu=&mem= 링크. 브라우저에서 실행.",
  mr: "Kubernetes एकक कनव्हर्टर: cores ↔ millicores, Mi/Gi विरुद्ध M/G इशारा, एक कंटेनर QoS आणि ?cpu=&mem= लिंक्स. ब्राउझरमध्ये.",
  vi: "Bộ đổi đơn vị Kubernetes: cores ↔ millicores, cảnh báo Mi/Gi vs M/G, QoS một container và liên kết ?cpu=&mem=. Chạy trong trình duyệt.",
  ta: "Kubernetes அலகு மாற்றி: cores ↔ millicores, Mi/Gi vs M/G எச்சரிக்கை, ஒரு கொள்கலன் QoS, பகிரக்கூடிய ?cpu=&mem=. உலாவியில்.",
  it: "Convertitore di unità Kubernetes: cores ↔ millicores, avviso Mi/Gi vs M/G, QoS di un contenitore e link ?cpu=&mem=. Nel browser.",
  fa: "مبدل واحدهای Kubernetes: cores ↔ millicores، هشدار Mi/Gi در برابر M/G، QoS یک کانتینر و پیوندهای ?cpu=&mem=. در مرورگر.",
  tlh: "Kubernetes 'ay' choHwI': cores ↔ millicores, Mi/Gi vs M/G ghuH, wa' QoS, ?cpu=&mem=. lIjwI'Daq.",
});

const headings = localeNames({
  ru: "Конвертер единиц Kubernetes",
  en: "Kubernetes unit converter",
  zh: "Kubernetes 单位换算",
  es: "Conversor de unidades de Kubernetes",
  hi: "Kubernetes इकाई कनवर्टर",
  ar: "محول وحدات Kubernetes",
  bn: "Kubernetes একক কনভার্টার",
  pt: "Conversor de unidades Kubernetes",
  fr: "Convertisseur d’unités Kubernetes",
  de: "Kubernetes-Einheiten-Umrechner",
  ja: "Kubernetes 単位コンバーター",
  id: "Konverter unit Kubernetes",
  pa: "Kubernetes ਇਕਾਈ ਕਨਵਰਟਰ",
  jv: "Konverter unit Kubernetes",
  te: "Kubernetes యూనిట్ కన్వర్టర్",
  tr: "Kubernetes birim dönüştürücü",
  ko: "Kubernetes 단위 변환기",
  mr: "Kubernetes एकक कनव्हर्टर",
  vi: "Bộ đổi đơn vị Kubernetes",
  ta: "Kubernetes அலகு மாற்றி",
  it: "Convertitore di unità Kubernetes",
  fa: "مبدل واحدهای Kubernetes",
  tlh: "Kubernetes 'ay' choHwI'"
});

const leads = localeNames({
  ru: "Переводите CPU и память в формат манифестов, вставляйте <code>500m</code>/<code>256Mi</code>, смотрите предупреждение Mi vs M, делитесь ссылкой и проверяйте QoS. Всё в браузере — без API.",
  en: "Convert CPU and memory into manifest-ready values, paste <code>500m</code>/<code>256Mi</code>, see Mi vs M warnings, share a link, and check QoS. Everything runs in your browser — no API.",
  zh: "将 CPU 与内存换算为可写入清单的值，粘贴 <code>500m</code>/<code>256Mi</code>，查看 Mi 与 M 警告，分享链接并检查 QoS。全部在浏览器中完成——无 API。",
  es: "Convierta CPU y memoria a valores para manifiestos, pegue <code>500m</code>/<code>256Mi</code>, vea avisos Mi vs M, comparta el enlace y revise el QoS. Todo en el navegador — sin API.",
  hi: "CPU और मेमोरी को मैनिफेस्ट मानों में बदलें, <code>500m</code>/<code>256Mi</code> चिपकाएँ, Mi बनाम M चेतावनी देखें, लिंक साझा करें और QoS जाँचें। ब्राउज़र में — कोई API नहीं।",
  ar: "حوّل CPU والذاكرة لقيم المانيفست، الصق <code>500m</code>/<code>256Mi</code>، انظر تحذير Mi مقابل M، شارك الرابط وافحص QoS. في المتصفح — بلا API.",
  bn: "CPU ও মেমরি ম্যানিফেস্ট মানে রূপান্তর করুন, <code>500m</code>/<code>256Mi</code> পেস্ট করুন, Mi বনাম M সতর্কতা দেখুন, লিংক শেয়ার করুন ও QoS যাচাই করুন। ব্রাউজারে — কোনো API নেই।",
  pt: "Converta CPU e memória para manifests, cole <code>500m</code>/<code>256Mi</code>, veja o aviso Mi vs M, partilhe o link e confira o QoS. No navegador — sem API.",
  fr: "Convertissez CPU et mémoire pour les manifests, collez <code>500m</code>/<code>256Mi</code>, voyez l’alerte Mi vs M, partagez le lien et vérifiez le QoS. Dans le navigateur — pas d’API.",
  de: "Rechnen Sie CPU und Speicher in manifestereife Werte um, fügen Sie <code>500m</code>/<code>256Mi</code> ein, sehen Sie die Warnung Mi vs M, teilen Sie den Link und prüfen Sie QoS. Im Browser — ohne API.",
  ja: "CPU とメモリをマニフェスト向けに換算し、<code>500m</code>/<code>256Mi</code> を貼り付け、Mi と M の警告を確認し、リンク共有と QoS チェック。ブラウザ内 — API なし。",
  id: "Konversi CPU dan memori ke nilai manifes, tempel <code>500m</code>/<code>256Mi</code>, lihat peringatan Mi vs M, bagikan tautan, dan cek QoS. Di peramban — tanpa API.",
  pa: "CPU ਤੇ ਮੈਮੋਰੀ ਨੂੰ ਮੈਨੀਫੈਸਟ ਮੁੱਲਾਂ ਵਿੱਚ ਬਦਲੋ, <code>500m</code>/<code>256Mi</code> ਪੇਸਟ ਕਰੋ, Mi ਬਨਾਮ M ਚੇਤਾਵਨੀ ਵੇਖੋ, ਲਿੰਕ ਸਾਂਝਾ ਕਰੋ ਤੇ QoS ਜਾਂਚੋ। ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ — API ਨਹੀਂ।",
  jv: "Owahi CPU lan memori dadi nilai manifes, tempel <code>500m</code>/<code>256Mi</code>, deleng pepenget Mi vs M, enggo pranala, lan priksa QoS. Ing browser — tanpa API.",
  te: "CPU మరియు మెమరీని మానిఫెస్ట్ విలువలుగా మార్చండి, <code>500m</code>/<code>256Mi</code> పేస్ట్ చేయండి, Mi vs M హెచ్చరిక చూడండి, లింక్ షేర్ చేసి QoS తనిఖీ చేయండి. బ్రౌజర్‌లో — API లేదు.",
  tr: "CPU ve belleği manifesto değerlerine çevirin, <code>500m</code>/<code>256Mi</code> yapıştırın, Mi vs M uyarısını görün, bağlantıyı paylaşın ve QoS kontrol edin. Tarayıcıda — API yok.",
  ko: "CPU·메모리를 매니페스트 값으로 바꾸고 <code>500m</code>/<code>256Mi</code>를 붙여넣으며 Mi vs M 경고를 보고 링크를 공유하고 QoS를 확인하세요. 브라우저에서 — API 없음.",
  mr: "CPU आणि मेमरी मॅनिफेस्ट मूल्यांत बदला, <code>500m</code>/<code>256Mi</code> पेस्ट करा, Mi विरुद्ध M इशारा पहा, लिंक शेअर करा आणि QoS तपासा. ब्राउझरमध्ये — API नाही.",
  vi: "Đổi CPU và bộ nhớ thành giá trị manifest, dán <code>500m</code>/<code>256Mi</code>, xem cảnh báo Mi vs M, chia sẻ liên kết và kiểm tra QoS. Trong trình duyệt — không API.",
  ta: "CPU மற்றும் நினைவகத்தை மேனிஃபெஸ்ட் மதிப்புகளாக மாற்றி, <code>500m</code>/<code>256Mi</code> ஒட்டி, Mi vs M எச்சரிக்கையைப் பார்த்து, இணைப்பைப் பகிர்ந்து QoS சரிபாருங்கள். உலாவியில் — API இல்லை.",
  it: "Converti CPU e memoria in valori per i manifest, incolla <code>500m</code>/<code>256Mi</code>, vedi l’avviso Mi vs M, condividi il link e controlla il QoS. Nel browser — niente API.",
  fa: "CPU و حافظه را به مقادیر مانیفست تبدیل کنید، <code>500m</code>/<code>256Mi</code> بچسبانید، هشدار Mi در برابر M را ببینید، پیوند را هم‌رسانی کنید و QoS را بررسی کنید. در مرورگر — بدون API.",
  tlh: "CPU qawHaq je manifest mI'meyDaq yIchoH, <code>500m</code>/<code>256Mi</code> yIlan, Mi vs M yIlegh, 'ej yo' 'ej QoS yIDoy'. lIjwI'Daq — API pagh.",
});

const bodies: Record<Locale, SeoBody> = {
  ru: {
    appName: "k8size",
    tipsLabel: "Рекомендации:",
    benefitsTitle: "Зачем нужен k8size",
    benefits: [
      "<strong>Cores ↔ millicores.</strong> Введите дробные ядра, целые милликоры или вставьте <code>500m</code> / <code>0.5</code> — увидите обе формы и YAML.",
      "<strong>Mi vs M с предупреждением.</strong> При десятичных суффиксах сервис предупреждает и предлагает двоичный вариант (256M → 256Mi).",
      "<strong>Шаринг расчёта.</strong> Кнопка «Ссылка» копирует URL с <code>?cpu=</code> и <code>?mem=</code> для чатов и тикетов.",
      "<strong>QoS одного контейнера.</strong> Guaranteed / Burstable / BestEffort по request/limit — без sizing-advisor.",
      "<strong>Готовые YAML-фрагменты.</strong> Копируйте строки <code>cpu</code> и <code>memory</code> для requests и limits.",
      "<strong>Только в браузере.</strong> Без API; значения не уходят с устройства.",
      "<strong>Бесплатно и на многих языках.</strong> Без аккаунта; UI и SEO на каждую локаль набора."
    ],
    howTitle: "Как конвертировать единицы Kubernetes",
    howSteps: [
      "Введите число или вставьте величину целиком (<code>500m</code>, <code>256Mi</code>).",
      "При десятичной памяти прочитайте предупреждение и при необходимости подставьте Mi/Gi.",
      "Скопируйте YAML или нажмите «Ссылка», чтобы поделиться <code>?cpu=&mem=</code>.",
      "При желании заполните request/limit в блоке QoS и посмотрите класс."
    ],
    strongTitle: "Единицы, requests и limits",
    strongLead: "Kubernetes принимает CPU как cores или millicores (<code>m</code>), а память — с двоичными (Ki/Mi/Gi/Ti) или десятичными (k/M/G/T) суффиксами. Сервис только переводит величины и не подсказывает «правильный» размер requests.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> равно <code>0.5</code>.",
      "Mi/Gi — степени 1024; M/G/MB/GB — степени 1000.",
      "requests влияют на планирование, limits ограничивают потребление — обычно requests ≤ limits.",
      "Одинаковые requests и limits по CPU и памяти дают Guaranteed QoS.",
      "Договаривайтесь в команде об одном стиле единиц, чтобы не путать Mi и M.",
      "Это не sizing-advisor — реальную нагрузку измеряйте отдельно.",
      "При M/G/MB сервис предупреждает: часто нужен Mi/Gi.",
      "Ссылка с ?cpu=&mem= удобна для тикетов и ревью.",
    ],
    usesTitle: "Для чего нужен сервис",
    uses: [
      "проверить millicores и cores перед правкой Deployment;",
      "сравнить Mi и M при чтении чартов и манифестов;",
      "подготовить YAML-фрагменты для requests и limits;",
      "показать разницу двоичных и десятичных суффиксов;",
      "быстро свериться на ревью или во время инцидента."
    ],
    faqTitle: "Частые вопросы",
    faq: [
      { q: "Что означает суффикс m у CPU?", a: "Милликоры: 1000m — одно полное ядро. Дробное 0.5 равно 500m." },
      { q: "Mi — это то же, что M или MB?", a: "Нет. Mi = 1024² байт; M и MB = 1000² байт. Путаница меняет реальный размер." },
      { q: "Сервис загружает мои значения на сервер?", a: "Нет. Конвертация идёт только в браузере." },
      { q: "Подскажет ли он правильные requests для приложения?", a: "Нет. Только перевод единиц и краткая подсказка — не sizing-advisor." },
      { q: "Какой YAML для CPU лучше?", a: "И <code>500m</code>, и <code>0.5</code> валидны; выберите один стиль и придерживайтесь его." },
      { q: "Поддерживаются ли KB/MB/GB?", a: "Да, как 1000-базовые алиасы рядом с K/M/G/T." },
      { q: "А Ti и T?", a: "Ti — 1024⁴ байт; T/TB — 1000⁴. Обе строки есть в таблице памяти." },
      { q: "Обязателен ли Guaranteed QoS?", a: "Нет. Это один из классов QoS, когда requests равны limits по CPU и памяти." },
      { q: "Это редактор манифестов?", a: "Нет. Только конвертация единиц и короткие YAML-фрагменты." },
      { q: "Сервис платный?", a: "Нет — бесплатно, без регистрации и лимитов на конвертации." },
      { q: "Что делает предупреждение про M и Mi?", a: "Если выбрана десятичная единица (M/G/MB…), сервис напоминает, что в манифестах чаще имеют в виду двоичные Mi/Gi, и предлагает подставить их." },
      { q: "Как поделиться расчётом?", a: "Нажмите «Ссылка» — в буфер попадёт URL с параметрами ?cpu= и ?mem=. Можно открыть ссылку и получить те же значения." },
      { q: "Что показывает блок QoS?", a: "Упрощённый класс Guaranteed, Burstable или BestEffort для одного контейнера по полям request/limit. Это не рекомендация размера нагрузки." },
    ],
  },
  en: {
    appName: "k8size",
    tipsLabel: "Tips:",
    benefitsTitle: "Why use k8size",
    benefits: [
      "<strong>Cores ↔ millicores.</strong> Enter decimal cores, integer millicores, or paste <code>500m</code> / <code>0.5</code> — see both forms plus YAML.",
      "<strong>Mi vs M warning.</strong> Decimal suffixes trigger a warning and a one-click switch to the binary unit (256M → 256Mi).",
      "<strong>Shareable calculations.</strong> Copy a link with <code>?cpu=</code> and <code>?mem=</code> for chats and tickets.",
      "<strong>Single-container QoS.</strong> Guaranteed / Burstable / BestEffort from request/limit fields — not a sizing advisor.",
      "<strong>YAML snippets ready to paste.</strong> Copy <code>cpu</code> and <code>memory</code> lines for requests and limits.",
      "<strong>Runs in the browser.</strong> No API; values never leave your device.",
      "<strong>Free and multilingual.</strong> No account; UI and SEO in every supported locale."
    ],
    howTitle: "How to convert Kubernetes units",
    howSteps: [
      "Type a number or paste a full quantity (<code>500m</code>, <code>256Mi</code>).",
      "If you used a decimal memory unit, read the warning and switch to Mi/Gi when needed.",
      "Copy YAML or use Share to send a <code>?cpu=&mem=</code> link.",
      "Optionally fill request/limit fields in the QoS panel and check the class."
    ],
    strongTitle: "Units, requests and limits",
    strongLead: "Kubernetes accepts CPU as cores or millicores (<code>m</code>) and memory as binary (Ki/Mi/Gi/Ti) or decimal (k/M/G/T) suffixes. This tool only converts quantities — it does not recommend how large requests should be.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> equals <code>0.5</code>.",
      "Mi/Gi use powers of 1024; M/G/MB/GB use powers of 1000.",
      "requests guide scheduling; limits cap usage — usually requests ≤ limits.",
      "Equal CPU and memory requests and limits yield Guaranteed QoS.",
      "Prefer the same unit style across a team to avoid Mi vs M mistakes.",
      "This is not a workload sizing advisor — measure real usage separately.",
      "Decimal M/G/MB trigger a warning — you often want Mi/Gi.",
      "A ?cpu=&mem= link is handy for tickets and reviews.",
    ],
    usesTitle: "What it is for",
    uses: [
      "checking millicores vs cores before editing a Deployment;",
      "comparing Mi and M when reading charts or manifests;",
      "preparing YAML fragments for requests and limits;",
      "teaching the difference between binary and decimal suffixes;",
      "quick sanity checks during reviews or incidents."
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "What does the m suffix mean for CPU?", a: "Millicores: 1000m equals one full core. Fractional cores like 0.5 equal 500m." },
      { q: "Is Mi the same as M or MB?", a: "No. Mi is 1024² bytes; M and MB are 1000² bytes. Mixing them changes the real size." },
      { q: "Does the tool upload my values?", a: "No. Conversion runs only in your browser." },
      { q: "Can it suggest the right requests for my app?", a: "No. It converts units and shows a short tip — not a sizing advisor." },
      { q: "Which YAML form should I use for CPU?", a: "Both <code>500m</code> and <code>0.5</code> are valid; pick one style and stay consistent." },
      { q: "Are KB/MB/GB supported?", a: "Yes, as 1000-based aliases alongside K/M/G/T." },
      { q: "What about Ti and T?", a: "Ti is 1024⁴ bytes; T/TB are 1000⁴. Both appear in the memory table." },
      { q: "Is Guaranteed QoS required?", a: "No. It is one QoS class when requests equal limits for CPU and memory." },
      { q: "Does it edit full manifests?", a: "No. It only converts units and offers short YAML snippets." },
      { q: "Is the service free?", a: "Yes — free, no registration, no conversion limits." },
      { q: "What does the M vs Mi warning do?", a: "If you pick a decimal unit (M/G/MB…), the tool reminds you that manifests often mean binary Mi/Gi and offers to switch." },
      { q: "How do I share a calculation?", a: "Click Share to copy a URL with ?cpu= and ?mem=. Opening the link restores the same values." },
      { q: "What does the QoS panel show?", a: "A simplified Guaranteed / Burstable / BestEffort class for one container from request/limit fields — not a workload sizing recommendation." },
    ],
  },
  zh: {
    appName: "k8size",
    tipsLabel: "建议：",
    benefitsTitle: "为什么使用 k8size",
    benefits: [
      "<strong>警告、分享与 QoS。</strong>十进制单位会提示改为 Mi/Gi；可复制 ?cpu=&mem= 链接；并查看单容器 QoS。",
      "<strong>核 ↔ 毫核。</strong>输入小数核或整数毫核，立即看到两种写法及 <code>cpu: \"500m\"</code> 一类 YAML。",
      "<strong>二进制与十进制内存。</strong>分清 Mi/Gi（1024）与 M/G/MB/GB（1000），避免把 256Mi 当成 256M。",
      "<strong>可复制的 YAML。</strong>复制 <code>cpu</code> 与 <code>memory</code> 行用于 requests 和 limits。",
      "<strong>简短的 requests / limits 说明。</strong>提醒 Guaranteed QoS，不是容量规划工具。",
      "<strong>示例按钮。</strong>填入常见清单值，如 <code>100m</code>、<code>500m</code>、<code>256Mi</code>、<code>1Gi</code>。",
      "<strong>仅在浏览器运行。</strong>无 API；数值不离开设备。",
      "<strong>免费且多语言。</strong>无需账号；每种支持的语言都有完整文案。"
    ],
    howTitle: "如何换算 Kubernetes 单位",
    howSteps: [
      "打开 CPU 或内存区块。",
      "输入数字并选择单位（cores、millicores、Mi、Gi、M、G 等）。",
      "输入时查看等价结果和 YAML。",
      "点示例填入样例值，再复制需要的片段。"
    ],
    strongTitle: "单位、requests 与 limits",
    strongLead: "Kubernetes 接受 cores 或 millicores（<code>m</code>）表示 CPU，内存可用二进制（Ki/Mi/Gi/Ti）或十进制（k/M/G/T）后缀。本工具只换算数量，不建议请求该设多大。",
    strongTips: [
      "1 core = 1000 millicores；<code>500m</code> 等于 <code>0.5</code>。",
      "Mi/Gi 为 1024 的幂；M/G/MB/GB 为 1000 的幂。",
      "requests 影响调度，limits 限制用量——通常 requests ≤ limits。",
      "CPU 与内存的 requests 等于 limits 时为 Guaranteed QoS。",
      "团队统一后缀风格，避免 Mi 与 M 混用。",
      "这不是容量顾问——真实用量需另行测量。"
    ],
    usesTitle: "适用场景",
    uses: [
      "修改 Deployment 前核对 millicores 与 cores；",
      "阅读 chart 或清单时比较 Mi 与 M；",
      "准备 requests / limits 的 YAML 片段；",
      "讲解二进制与十进制后缀差异；",
      "评审或故障时快速核对。"
    ],
    faqTitle: "常见问题",
    faq: [
      { q: "CPU 的 m 后缀是什么？", a: "毫核：1000m 等于 1 个完整核。0.5 核等于 500m。" },
      { q: "Mi 等于 M 或 MB 吗？", a: "不等。Mi 是 1024² 字节；M/MB 是 1000² 字节。" },
      { q: "会上传我的数值吗？", a: "不会。换算只在浏览器中进行。" },
      { q: "能推荐合适的 requests 吗？", a: "不能。只做单位换算和简短说明，不是容量顾问。" },
      { q: "CPU YAML 用哪种写法？", a: "<code>500m</code> 与 <code>0.5</code> 都合法；选一种并保持一致。" },
      { q: "支持 KB/MB/GB 吗？", a: "支持，作为基于 1000 的别名，与 K/M/G/T 并列。" },
      { q: "Ti 和 T 呢？", a: "Ti 为 1024⁴；T/TB 为 1000⁴。内存表中都有。" },
      { q: "必须使用 Guaranteed QoS 吗？", a: "不必。当 CPU 与内存的 requests 等于 limits 时才是该类。" },
      { q: "这是完整清单编辑器吗？", a: "不是。只换算单位并提供短 YAML。" },
      { q: "收费吗？", a: "不收费，无需注册，无换算次数限制。" }
    ],
  },
  es: {
    appName: "k8size",
    tipsLabel: "Consejos:",
    benefitsTitle: "Por qué usar k8size",
    benefits: [
      "<strong>Avisos, compartir y QoS.</strong> Unidades decimales avisan hacia Mi/Gi; copie ?cpu=&mem=; revise QoS de un contenedor.",
      "<strong>Cores ↔ millicores.</strong> Introduzca cores decimales o millicores enteros y vea ambas formas y YAML como <code>cpu: \"500m\"</code>.",
      "<strong>Memoria binaria vs decimal.</strong> Distinga Mi/Gi (1024) de M/G/MB/GB (1000) para no confundir 256Mi con 256M.",
      "<strong>Fragmentos YAML listos.</strong> Copie líneas <code>cpu</code> y <code>memory</code> para requests y limits.",
      "<strong>Nota breve requests vs limits.</strong> Recuerda Guaranteed QoS — no es un asesor de dimensionamiento.",
      "<strong>Botones de ejemplo.</strong> Cargan valores habituales: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Solo en el navegador.</strong> Sin API; los valores no salen del dispositivo.",
      "<strong>Gratis y multilingüe.</strong> Sin cuenta; UI y SEO en cada idioma admitido."
    ],
    howTitle: "Cómo convertir unidades de Kubernetes",
    howSteps: [
      "Abra la sección CPU o Memoria.",
      "Escriba un número y elija la unidad.",
      "Lea equivalentes y YAML mientras escribe.",
      "Use un ejemplo y copie el fragmento necesario."
    ],
    strongTitle: "Unidades, requests y limits",
    strongLead: "Kubernetes acepta CPU como cores o millicores (<code>m</code>) y memoria con sufijos binarios (Ki/Mi/Gi/Ti) o decimales (k/M/G/T). Esta herramienta solo convierte cantidades.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> equivale a <code>0.5</code>.",
      "Mi/Gi usan potencias de 1024; M/G/MB/GB, de 1000.",
      "requests guían la planificación; limits limitan el uso — suele ser requests ≤ limits.",
      "Requests y limits iguales en CPU y memoria dan Guaranteed QoS.",
      "Acuerde un estilo de unidades en el equipo para evitar Mi vs M.",
      "No es un asesor de tamaño de carga — mida el uso real aparte."
    ],
    usesTitle: "Para qué sirve",
    uses: [
      "comprobar millicores y cores antes de editar un Deployment;",
      "comparar Mi y M al leer charts o manifiestos;",
      "preparar fragmentos YAML de requests y limits;",
      "enseñar la diferencia entre sufijos binarios y decimales;",
      "revisiones rápidas en code review o incidentes."
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Qué significa el sufijo m en CPU?", a: "Millicores: 1000m es un core completo. 0.5 equivale a 500m." },
      { q: "¿Mi es lo mismo que M o MB?", a: "No. Mi es 1024² bytes; M y MB son 1000² bytes." },
      { q: "¿Se suben mis valores?", a: "No. La conversión es solo en el navegador." },
      { q: "¿Sugiere requests correctos?", a: "No. Solo convierte unidades y da una nota breve." },
      { q: "¿Qué forma YAML usar para CPU?", a: "Tanto <code>500m</code> como <code>0.5</code> son válidos; sea coherente." },
      { q: "¿Hay KB/MB/GB?", a: "Sí, como alias de base 1000 junto a K/M/G/T." },
      { q: "¿Y Ti y T?", a: "Ti es 1024⁴; T/TB son 1000⁴. Ambos están en la tabla." },
      { q: "¿Es obligatorio Guaranteed QoS?", a: "No. Es una clase cuando requests = limits en CPU y memoria." },
      { q: "¿Edita manifiestos completos?", a: "No. Solo convierte unidades y ofrece snippets cortos." },
      { q: "¿Es de pago?", a: "No: gratis, sin registro ni límites de conversión." }
    ],
  },
  hi: {
    appName: "k8size",
    tipsLabel: "सुझाव:",
    benefitsTitle: "k8size क्यों उपयोग करें",
    benefits: [
      "<strong>चेतावनी, शेयर और QoS.</strong> दशमलव इकाइयों पर Mi/Gi सुझाव; ?cpu=&mem= लिंक; एक कंटेनर QoS।",
      "<strong>Cores ↔ millicores.</strong> दशमलव cores या पूर्णांक millicores दर्ज करें और दोनों रूप तथा <code>cpu: \"500m\"</code> जैसा YAML देखें।",
      "<strong>बाइनरी बनाम दशमलव मेमोरी.</strong> Mi/Gi (1024) को M/G/MB/GB (1000) से अलग रखें ताकि 256Mi को 256M न समझें।",
      "<strong>पेस्ट करने योग्य YAML.</strong> requests और limits के लिए <code>cpu</code> तथा <code>memory</code> पंक्तियाँ कॉपी करें।",
      "<strong>संक्षिप्त requests vs limits टिप.</strong> Guaranteed QoS की याद — साइज़िंग सलाहकार नहीं।",
      "<strong>उदाहरण बटन.</strong> आम मान भरें: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>।",
      "<strong>ब्राउज़र में चलता है.</strong> कोई API नहीं; मान डिवाइस नहीं छोड़ते।",
      "<strong>मुफ़्त और बहुभाषी.</strong> खाता नहीं; हर समर्थित भाषा में UI और SEO।"
    ],
    howTitle: "Kubernetes इकाइयाँ कैसे बदलें",
    howSteps: [
      "CPU या मेमोरी अनुभाग खोलें।",
      "संख्या लिखें और इकाई चुनें।",
      "टाइप करते हुए समकक्ष और YAML देखें।",
      "उदाहरण दबाएँ, फिर आवश्यक स्निपेट कॉपी करें।"
    ],
    strongTitle: "इकाइयाँ, requests और limits",
    strongLead: "Kubernetes CPU को cores या millicores (<code>m</code>) में और मेमोरी को बाइनरी (Ki/Mi/Gi/Ti) या दशमलव (k/M/G/T) प्रत्ययों में स्वीकार करता है। यह उपकरण केवल मात्राएँ बदलता है।",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>।",
      "Mi/Gi 1024 की घात हैं; M/G/MB/GB 1000 की।",
      "requests शेड्यूलिंग तय करते हैं; limits उपयोग सीमित करते हैं — अक्सर requests ≤ limits।",
      "CPU और मेमोरी पर समान requests और limits = Guaranteed QoS।",
      "टीम में एक इकाई शैली रखें ताकि Mi और M न मिलें।",
      "यह वर्कलोड साइज़िंग सलाहकार नहीं है।"
    ],
    usesTitle: "किसके लिए",
    uses: [
      "Deployment संपादित करने से पहले millicores बनाम cores जाँचना;",
      "चार्ट या मैनिफेस्ट पढ़ते समय Mi और M की तुलना;",
      "requests/limits के YAML टुकड़े तैयार करना;",
      "बाइनरी और दशमलव प्रत्ययों का अंतर सिखाना;",
      "समीक्षा या घटना के दौरान त्वरित जाँच।"
    ],
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faq: [
      { q: "CPU पर m का अर्थ?", a: "मिलीकोर: 1000m = एक पूरा core। 0.5 = 500m।" },
      { q: "क्या Mi = M या MB?", a: "नहीं। Mi = 1024² बाइट; M/MB = 1000²।" },
      { q: "क्या मान अपलोड होते हैं?", a: "नहीं। रूपांतरण केवल ब्राउज़र में।" },
      { q: "सही requests सुझाएगा?", a: "नहीं। केवल इकाई रूपांतरण और छोटी टिप।" },
      { q: "CPU YAML कौन सा?", a: "<code>500m</code> और <code>0.5</code> दोनों मान्य; एक शैली रखें।" },
      { q: "KB/MB/GB?", a: "हाँ, 1000-आधारित उपनाम K/M/G/T के साथ।" },
      { q: "Ti और T?", a: "Ti = 1024⁴; T/TB = 1000⁴। दोनों तालिका में।" },
      { q: "Guaranteed QoS ज़रूरी?", a: "नहीं। जब requests = limits हो तब एक QoS वर्ग।" },
      { q: "पूरा मैनिफेस्ट संपादक?", a: "नहीं। केवल इकाइयाँ और छोटे YAML।" },
      { q: "शुल्क?", a: "नहीं — मुफ़्त, बिना पंजीकरण।" }
    ],
  },
  ar: {
    appName: "k8size",
    tipsLabel: "نصائح:",
    benefitsTitle: "لماذا تستخدم k8size",
    benefits: [
      "<strong>تحذير ومشاركة وQoS.</strong> الوحدات العشرية تقترح Mi/Gi؛ انسخ ?cpu=&mem=؛ راجع QoS لحاوية واحدة.",
      "<strong>الأنوية ↔ الميلي كور.</strong> أدخل أنوية عشرية أو ميلي كور صحيحة وشاهد الشكلين وYAML مثل <code>cpu: \"500m\"</code>.",
      "<strong>ذاكرة ثنائية مقابل عشرية.</strong> ميّز Mi/Gi (1024) عن M/G/MB/GB (1000) حتى لا تخلط 256Mi مع 256M.",
      "<strong>مقتطفات YAML جاهزة.</strong> انسخ سطور <code>cpu</code> و<code>memory</code> لـ requests وlimits.",
      "<strong>تلميح قصير عن requests وlimits.</strong> تذكير بـ Guaranteed QoS — وليس مستشار تحجيم.",
      "<strong>أزرار أمثلة.</strong> تملأ قيمًا شائعة مثل <code>100m</code> و<code>500m</code> و<code>256Mi</code> و<code>1Gi</code>.",
      "<strong>يعمل في المتصفح.</strong> بلا واجهة؛ القيم لا تغادر جهازك.",
      "<strong>مجاني ومتعدد اللغات.</strong> بلا حساب؛ الواجهة وSEO لكل لغة مدعومة."
    ],
    howTitle: "كيف تحوّل وحدات Kubernetes",
    howSteps: [
      "افتح قسم CPU أو الذاكرة.",
      "اكتب رقمًا واختر الوحدة.",
      "اطلع على المكافئات وYAML أثناء الكتابة.",
      "استخدم مثالًا ثم انسخ المقتطف المطلوب."
    ],
    strongTitle: "الوحدات وrequests وlimits",
    strongLead: "يقبل Kubernetes الـ CPU كأنوية أو ميلي كور (<code>m</code>) والذاكرة بلاحقات ثنائية (Ki/Mi/Gi/Ti) أو عشرية (k/M/G/T). الأداة تحوّل الكميات فقط.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi قوى 1024؛ M/G/MB/GB قوى 1000.",
      "requests توجّه الجدولة؛ limits تحدّ الاستهلاك — غالبًا requests ≤ limits.",
      "تساوي requests وlimits لـ CPU والذاكرة يعطي Guaranteed QoS.",
      "وحّدوا أسلوب الوحدات في الفريق لتجنب خلط Mi وM.",
      "ليست مستشار تحجيم أحمال — قِس الاستخدام الفعلي منفصلاً."
    ],
    usesTitle: "لأي غرض",
    uses: [
      "التحقق من الميلي كور والأنوية قبل تعديل Deployment؛",
      "مقارنة Mi وM عند قراءة المخططات أو المانيفست؛",
      "تجهيز مقاطع YAML لـ requests وlimits؛",
      "شرح الفرق بين اللواحق الثنائية والعشرية؛",
      "مراجعة سريعة أثناء المراجعة أو الحوادث."
    ],
    faqTitle: "الأسئلة الشائعة",
    faq: [
      { q: "ماذا يعني المقطع m لوحدة المعالجة؟", a: "ميلي كور: 1000m يساوي نواة كاملة. 0.5 يساوي 500m." },
      { q: "هل Mi مثل M أو MB؟", a: "لا. Mi = 1024² بايت؛ M وMB = 1000² بايت." },
      { q: "هل تُرفع قيمي؟", a: "لا. التحويل في المتصفح فقط." },
      { q: "هل يقترح requests مناسبة؟", a: "لا. يحول الوحدات ويعطي تلميحًا قصيرًا فقط." },
      { q: "أي شكل YAML لوحدة المعالجة؟", a: "كلا <code>500m</code> و<code>0.5</code> صالحان؛ اختر أسلوبًا ثابتًا." },
      { q: "هل تُدعم KB/MB/GB؟", a: "نعم كأسماء بديلة أساسها 1000 مع K/M/G/T." },
      { q: "وماذا عن Ti وT؟", a: "Ti = 1024⁴؛ T/TB = 1000⁴. كلاهما في الجدول." },
      { q: "هل Guaranteed QoS إلزامي؟", a: "لا. فئة عندما تتساوى requests وlimits لـ CPU والذاكرة." },
      { q: "هل يحرر مانيفست كامل؟", a: "لا. يحول الوحدات ويقدّم مقتطفات قصيرة." },
      { q: "هل الخدمة مدفوعة؟", a: "لا — مجانية بلا تسجيل ولا حدود تحويل." }
    ],
  },
  bn: {
    appName: "k8size",
    tipsLabel: "টিপস:",
    benefitsTitle: "কেন k8size ব্যবহার করবেন",
    benefits: [
      "<strong>সতর্কতা, শেয়ার ও QoS.</strong> দশমিক এককে Mi/Gi পরামর্শ; ?cpu=&mem= লিংক; এক কন্টেইনার QoS।",
      "<strong>Cores ↔ millicores.</strong> দশমিক cores বা পূর্ণসংখ্যা millicores লিখে উভয় রূপ ও <code>cpu: \"500m\"</code> দেখুন।",
      "<strong>বাইনারি বনাম দশমিক মেমরি.</strong> Mi/Gi (1024) ও M/G/MB/GB (1000) আলাদা রাখুন যাতে 256Mi কে 256M না বোঝেন।",
      "<strong>প্রস্তুত YAML.</strong> requests ও limits-এর জন্য <code>cpu</code> ও <code>memory</code> কপি করুন।",
      "<strong>সংক্ষিপ্ত requests vs limits টিপ.</strong> Guaranteed QoS মনে করিয়ে দেয় — সাইজিং উপদেষ্টা নয়।",
      "<strong>উদাহরণ বোতাম.</strong> সাধারণ মান ভরে: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>।",
      "<strong>ব্রাউজারে চলে.</strong> কোনো API নেই; মান ডিভাইস ছাড়ে না।",
      "<strong>বিনামূল্যে ও বহুভাষিক.</strong> অ্যাকাউন্ট লাগে না; প্রতিটি ভাষায় UI ও SEO।"
    ],
    howTitle: "Kubernetes একক কীভাবে রূপান্তর করবেন",
    howSteps: [
      "CPU বা মেমরি অংশ খুলুন।",
      "সংখ্যা লিখে একক বেছে নিন।",
      "টাইপ করার সময় সমতুল্য ও YAML দেখুন।",
      "উদাহরণ চাপুন, তারপর প্রয়োজনীয় স্নিপেট কপি করুন।"
    ],
    strongTitle: "একক, requests ও limits",
    strongLead: "Kubernetes CPU কে cores বা millicores (<code>m</code>) এবং মেমরিকে বাইনারি (Ki/Mi/Gi/Ti) বা দশমিক (k/M/G/T) সাফিক্সে নেয়। টুল শুধু পরিমাণ রূপান্তর করে।",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi হল 1024-এর ঘাত; M/G/MB/GB হল 1000-এর।",
      "requests শিডিউলিং নির্দেশ করে; limits ব্যবহার সীমায় রাখে — সাধারণত requests ≤ limits।",
      "CPU ও মেমরিতে সমান requests ও limits = Guaranteed QoS।",
      "দলে একই একক শৈলী রাখুন যাতে Mi ও M না মিশে।",
      "এটি ওয়ার্কলোড সাইজিং উপদেষ্টা নয়।"
    ],
    usesTitle: "কী কাজে লাগে",
    uses: [
      "Deployment সম্পাদনার আগে millicores ও cores যাচাই;",
      "চার্ট বা ম্যানিফেস্ট পড়তে Mi ও M তুলনা;",
      "requests/limits-এর YAML টুকরো তৈরি;",
      "বাইনারি ও দশমিক সাফিক্সের পার্থক্য শেখানো;",
      "রিভিউ বা ঘটনায় দ্রুত পরীক্ষা।"
    ],
    faqTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    faq: [
      { q: "CPU-তে m কী?", a: "মিলিকোর: 1000m = এক পূর্ণ কোর। 0.5 = 500m।" },
      { q: "Mi কি M বা MB?", a: "না। Mi = 1024² বাইট; M/MB = 1000²।" },
      { q: "মান আপলোড হয়?", a: "না। রূপান্তর শুধু ব্রাউজারে।" },
      { q: "সঠিক requests সাজাবে?", a: "না। শুধু একক রূপান্তর ও ছোট টিপ।" },
      { q: "CPU YAML কোনটি?", a: "<code>500m</code> ও <code>0.5</code> উভয়ই বৈধ; এক শৈলী রাখুন।" },
      { q: "KB/MB/GB?", a: "হ্যাঁ, 1000-ভিত্তিক উপনাম K/M/G/T-এর পাশে।" },
      { q: "Ti ও T?", a: "Ti = 1024⁴; T/TB = 1000⁴। উভয়ই টেবিলে।" },
      { q: "Guaranteed QoS বাধ্যতামূলক?", a: "না। requests = limits হলে একটি QoS শ্রেণি।" },
      { q: "পূর্ণ ম্যানিফেস্ট সম্পাদক?", a: "না। শুধু একক ও ছোট YAML।" },
      { q: "ফি আছে?", a: "না — বিনামূল্যে, নিবন্ধন ছাড়া।" }
    ],
  },
  pt: {
    appName: "k8size",
    tipsLabel: "Dicas:",
    benefitsTitle: "Por que usar o k8size",
    benefits: [
      "<strong>Avisos, partilha e QoS.</strong> Unidades decimais sugerem Mi/Gi; copie ?cpu=&mem=; veja QoS de um contentor.",
      "<strong>Cores ↔ millicores.</strong> Introduza cores decimais ou millicores inteiros e veja ambas as formas e YAML como <code>cpu: \"500m\"</code>.",
      "<strong>Memória binária vs decimal.</strong> Distinga Mi/Gi (1024) de M/G/MB/GB (1000) para não confundir 256Mi com 256M.",
      "<strong>Trechos YAML prontos.</strong> Copie linhas <code>cpu</code> e <code>memory</code> para requests e limits.",
      "<strong>Dica curta requests vs limits.</strong> Lembra Guaranteed QoS — não é um conselheiro de dimensionamento.",
      "<strong>Botões de exemplo.</strong> Preenchem valores comuns: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Corre no navegador.</strong> Sem API; os valores não saem do dispositivo.",
      "<strong>Grátis e multilingue.</strong> Sem conta; UI e SEO em cada idioma suportado."
    ],
    howTitle: "Como converter unidades Kubernetes",
    howSteps: [
      "Abra a secção CPU ou Memória.",
      "Escreva um número e escolha a unidade.",
      "Veja equivalentes e YAML enquanto escreve.",
      "Use um exemplo e copie o fragmento necessário."
    ],
    strongTitle: "Unidades, requests e limits",
    strongLead: "O Kubernetes aceita CPU como cores ou millicores (<code>m</code>) e memória com sufixos binários (Ki/Mi/Gi/Ti) ou decimais (k/M/G/T). Esta ferramenta só converte quantidades.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi usam potências de 1024; M/G/MB/GB, de 1000.",
      "requests guiam o agendamento; limits limitam o uso — em geral requests ≤ limits.",
      "Requests e limits iguais em CPU e memória dão Guaranteed QoS.",
      "Alinhe o estilo de unidades na equipa para evitar Mi vs M.",
      "Não é um consultor de dimensionamento de carga."
    ],
    usesTitle: "Para que serve",
    uses: [
      "verificar millicores e cores antes de editar um Deployment;",
      "comparar Mi e M ao ler charts ou manifests;",
      "preparar fragmentos YAML de requests e limits;",
      "ensinar a diferença entre sufixos binários e decimais;",
      "verificações rápidas em reviews ou incidentes."
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      { q: "O que significa o sufixo m na CPU?", a: "Millicores: 1000m é um core completo. 0.5 equivale a 500m." },
      { q: "Mi é igual a M ou MB?", a: "Não. Mi = 1024² bytes; M e MB = 1000² bytes." },
      { q: "Os valores são enviados?", a: "Não. A conversão é só no navegador." },
      { q: "Sugere requests corretos?", a: "Não. Só converte unidades e dá uma dica curta." },
      { q: "Que forma YAML usar para CPU?", a: "Tanto <code>500m</code> como <code>0.5</code> são válidos; seja consistente." },
      { q: "Há KB/MB/GB?", a: "Sim, como aliases de base 1000 junto de K/M/G/T." },
      { q: "E Ti e T?", a: "Ti = 1024⁴; T/TB = 1000⁴. Ambos na tabela." },
      { q: "Guaranteed QoS é obrigatório?", a: "Não. É uma classe quando requests = limits em CPU e memória." },
      { q: "Edita manifests completos?", a: "Não. Só converte unidades e oferece snippets curtos." },
      { q: "É pago?", a: "Não — grátis, sem registo nem limites de conversão." }
    ],
  },
  fr: {
    appName: "k8size",
    tipsLabel: "Conseils :",
    benefitsTitle: "Pourquoi utiliser k8size",
    benefits: [
      "<strong>Alertes, partage et QoS.</strong> Les unités décimales suggèrent Mi/Gi ; copiez ?cpu=&mem= ; vérifiez le QoS d’un conteneur.",
      "<strong>Cores ↔ millicores.</strong> Saisissez des cores décimaux ou des millicores entiers et voyez les deux formes plus un YAML comme <code>cpu: \"500m\"</code>.",
      "<strong>Mémoire binaire vs décimale.</strong> Distinguez Mi/Gi (1024) de M/G/MB/GB (1000) pour ne pas confondre 256Mi et 256M.",
      "<strong>Extraits YAML prêts.</strong> Copiez les lignes <code>cpu</code> et <code>memory</code> pour requests et limits.",
      "<strong>Rappel requests vs limits.</strong> Souvient de Guaranteed QoS — pas un conseiller de dimensionnement.",
      "<strong>Boutons d’exemples.</strong> Remplissent des valeurs courantes : <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Dans le navigateur.</strong> Pas d’API ; les valeurs ne quittent pas l’appareil.",
      "<strong>Gratuit et multilingue.</strong> Sans compte ; UI et SEO pour chaque locale."
    ],
    howTitle: "Comment convertir les unités Kubernetes",
    howSteps: [
      "Ouvrez la section CPU ou Mémoire.",
      "Saisissez un nombre et choisissez l’unité.",
      "Lisez les équivalents et le YAML en tapant.",
      "Utilisez un exemple puis copiez le fragment voulu."
    ],
    strongTitle: "Unités, requests et limits",
    strongLead: "Kubernetes accepte le CPU en cores ou millicores (<code>m</code>) et la mémoire avec des suffixes binaires (Ki/Mi/Gi/Ti) ou décimaux (k/M/G/T). L’outil ne convertit que des quantités.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi sont des puissances de 1024 ; M/G/MB/GB de 1000.",
      "requests guident l’ordonnancement ; limits plafonnent l’usage — en général requests ≤ limits.",
      "Requests et limits égaux pour CPU et mémoire donnent Guaranteed QoS.",
      "Harmonisez le style d’unités dans l’équipe pour éviter Mi vs M.",
      "Ce n’est pas un conseiller de sizing de charge."
    ],
    usesTitle: "À quoi ça sert",
    uses: [
      "vérifier millicores et cores avant d’éditer un Deployment ;",
      "comparer Mi et M en lisant charts ou manifests ;",
      "préparer des fragments YAML de requests et limits ;",
      "expliquer la différence des suffixes binaires et décimaux ;",
      "contrôles rapides en revue ou incident."
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Que signifie le suffixe m pour le CPU ?", a: "Millicores : 1000m = un cœur complet. 0.5 = 500m." },
      { q: "Mi vaut-il M ou MB ?", a: "Non. Mi = 1024² octets ; M/MB = 1000²." },
      { q: "Mes valeurs sont-elles envoyées ?", a: "Non. Conversion uniquement dans le navigateur." },
      { q: "Suggère-t-il les bons requests ?", a: "Non. Conversion d’unités et tip court seulement." },
      { q: "Quelle forme YAML pour le CPU ?", a: "<code>500m</code> et <code>0.5</code> sont valides ; restez cohérent." },
      { q: "KB/MB/GB ?", a: "Oui, alias base 1000 avec K/M/G/T." },
      { q: "Ti et T ?", a: "Ti = 1024⁴ ; T/TB = 1000⁴. Les deux dans le tableau." },
      { q: "Guaranteed QoS obligatoire ?", a: "Non. Classe quand requests = limits pour CPU et mémoire." },
      { q: "Éditeur de manifests complets ?", a: "Non. Unités et courts snippets YAML seulement." },
      { q: "Payant ?", a: "Non — gratuit, sans inscription." }
    ],
  },
  de: {
    appName: "k8size",
    tipsLabel: "Tipps:",
    benefitsTitle: "Warum k8size",
    benefits: [
      "<strong>Warnung, Teilen und QoS.</strong> Dezimal-Einheiten schlagen Mi/Gi vor; ?cpu=&mem= kopieren; QoS eines Containers prüfen.",
      "<strong>Cores ↔ Millicores.</strong> Geben Sie Dezimal-Cores oder ganze Millicores ein und sehen Sie beide Formen plus YAML wie <code>cpu: \"500m\"</code>.",
      "<strong>Binärer vs. dezimaler Speicher.</strong> Trennen Sie Mi/Gi (1024) von M/G/MB/GB (1000), damit 256Mi nicht mit 256M verwechselt wird.",
      "<strong>Fertige YAML-Schnipsel.</strong> Kopieren Sie <code>cpu</code>- und <code>memory</code>-Zeilen für requests und limits.",
      "<strong>Kurzer Hinweis requests vs limits.</strong> Erinnert an Guaranteed QoS — kein Sizing-Berater.",
      "<strong>Beispiel-Buttons.</strong> Füllen gängige Werte: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Im Browser.</strong> Keine API; Werte verlassen das Gerät nicht.",
      "<strong>Kostenlos und mehrsprachig.</strong> Ohne Konto; UI und SEO für jede Locale."
    ],
    howTitle: "Kubernetes-Einheiten umrechnen",
    howSteps: [
      "Öffnen Sie den CPU- oder Speicherblock.",
      "Zahl eingeben und Einheit wählen.",
      "Äquivalente und YAML beim Tippen lesen.",
      "Beispiel laden und benötigten Schnipsel kopieren."
    ],
    strongTitle: "Einheiten, requests und limits",
    strongLead: "Kubernetes akzeptiert CPU als Cores oder Millicores (<code>m</code>) und Speicher mit binären (Ki/Mi/Gi/Ti) oder dezimalen (k/M/G/T) Suffixen. Das Tool rechnet nur Mengen um.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi sind Potenzen von 1024; M/G/MB/GB von 1000.",
      "requests steuern Scheduling; limits deckeln Nutzung — meist requests ≤ limits.",
      "Gleiche requests und limits für CPU und Speicher ergeben Guaranteed QoS.",
      "Einheitsstil im Team abstimmen, um Mi und M nicht zu mischen.",
      "Kein Workload-Sizing-Berater — Nutzung separat messen."
    ],
    usesTitle: "Wofür",
    uses: [
      "Millicores und Cores vor Deployment-Änderungen prüfen;",
      "Mi und M beim Lesen von Charts oder Manifesten vergleichen;",
      "YAML-Fragmente für requests und limits vorbereiten;",
      "Unterschied binärer und dezimaler Suffixe erklären;",
      "schnelle Checks in Reviews oder Incidents."
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      { q: "Was bedeutet das Suffix m bei CPU?", a: "Millicores: 1000m = ein voller Core. 0.5 = 500m." },
      { q: "Ist Mi dasselbe wie M oder MB?", a: "Nein. Mi = 1024² Byte; M/MB = 1000²." },
      { q: "Werden Werte hochgeladen?", a: "Nein. Umrechnung nur im Browser." },
      { q: "Schlägt richtige requests vor?", a: "Nein. Nur Umrechnung und kurzer Tipp." },
      { q: "Welche YAML-Form für CPU?", a: "<code>500m</code> und <code>0.5</code> sind gültig; konsistent bleiben." },
      { q: "KB/MB/GB?", a: "Ja, 1000-basierte Aliase neben K/M/G/T." },
      { q: "Ti und T?", a: "Ti = 1024⁴; T/TB = 1000⁴. Beide in der Tabelle." },
      { q: "Guaranteed QoS Pflicht?", a: "Nein. Klasse, wenn requests = limits für CPU und Speicher." },
      { q: "Vollständiger Manifest-Editor?", a: "Nein. Nur Einheiten und kurze YAML-Schnipsel." },
      { q: "Kostenpflichtig?", a: "Nein — kostenlos, ohne Registrierung." }
    ],
  },
  ja: {
    appName: "k8size",
    tipsLabel: "ヒント:",
    benefitsTitle: "k8size を使う理由",
    benefits: [
      "<strong>警告・共有・QoS。</strong>十進単位では Mi/Gi を提案。?cpu=&mem= をコピーし、単一コンテナ QoS を確認。",
      "<strong>コア ↔ ミリコア。</strong>小数コアまたは整数ミリコアを入力すると両方の形と <code>cpu: \"500m\"</code> のような YAML が表示されます。",
      "<strong>二進と十進のメモリ。</strong>Mi/Gi（1024）と M/G/MB/GB（1000）を区別し、256Mi を 256M と混同しません。",
      "<strong>貼り付け可能な YAML。</strong>requests / limits 用に <code>cpu</code> と <code>memory</code> 行をコピーできます。",
      "<strong>短い requests vs limits の説明。</strong>Guaranteed QoS の再確認であり、サイジング助言ではありません。",
      "<strong>例ボタン。</strong><code>100m</code>、<code>500m</code>、<code>256Mi</code>、<code>1Gi</code> などの典型値を入れます。",
      "<strong>ブラウザ内のみ。</strong>API なし。値は端末から出ません。",
      "<strong>無料・多言語。</strong>アカウント不要。対応ロケールごとに UI と SEO があります。"
    ],
    howTitle: "Kubernetes 単位の換算方法",
    howSteps: [
      "CPU またはメモリの欄を開きます。",
      "数値を入力し単位を選びます。",
      "入力しながら等価値と YAML を確認します。",
      "例を押してから必要なスニペットをコピーします。"
    ],
    strongTitle: "単位、requests、limits",
    strongLead: "Kubernetes は CPU を cores または millicores（<code>m</code>）、メモリを二進（Ki/Mi/Gi/Ti）または十進（k/M/G/T）接尾辞で受け付けます。本ツールは量の換算のみです。",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi は 1024 の累乗、M/G/MB/GB は 1000 の累乗です。",
      "requests は配置の目安、limits は上限 — 通常 requests ≤ limits。",
      "CPU とメモリで requests = limits なら Guaranteed QoS。",
      "チームで単位表記を揃え、Mi と M の混同を避けます。",
      "ワークロード・サイジング助言ではありません。"
    ],
    usesTitle: "用途",
    uses: [
      "Deployment 編集前に millicores と cores を確認する;",
      "チャートやマニフェストで Mi と M を比較する;",
      "requests / limits の YAML 断片を用意する;",
      "二進・十進接尾辞の違いを説明する;",
      "レビューやインシデント時の素早い確認。"
    ],
    faqTitle: "よくある質問",
    faq: [
      { q: "CPU の m とは？", a: "ミリコア。1000m = 1 コア。0.5 = 500m。" },
      { q: "Mi は M/MB と同じ？", a: "いいえ。Mi = 1024² バイト、M/MB = 1000²。" },
      { q: "値はアップロードされる？", a: "いいえ。換算はブラウザ内のみ。" },
      { q: "適切な requests を提案する？", a: "しません。単位換算と短い説明のみ。" },
      { q: "CPU の YAML はどれ？", a: "<code>500m</code> も <code>0.5</code> も有効。一貫させます。" },
      { q: "KB/MB/GB は？", a: "はい。1000 系の別名として K/M/G/T と並びます。" },
      { q: "Ti と T は？", a: "Ti = 1024⁴、T/TB = 1000⁴。表に両方あります。" },
      { q: "Guaranteed QoS は必須？", a: "いいえ。CPU・メモリで requests = limits のときのクラスです。" },
      { q: "フルマニフェスト編集？", a: "いいえ。単位換算と短い YAML のみ。" },
      { q: "有料？", a: "いいえ。無料・登録不要。" }
    ],
  },
  id: {
    appName: "k8size",
    tipsLabel: "Tips:",
    benefitsTitle: "Mengapa memakai k8size",
    benefits: [
      "<strong>Peringatan, bagikan, QoS.</strong> Unit desimal menyarankan Mi/Gi; salin ?cpu=&mem=; cek QoS satu kontainer.",
      "<strong>Cores ↔ millicores.</strong> Masukkan cores desimal atau millicores bulat dan lihat kedua bentuk plus YAML seperti <code>cpu: \"500m\"</code>.",
      "<strong>Memori biner vs desimal.</strong> Bedakan Mi/Gi (1024) dari M/G/MB/GB (1000) agar 256Mi tidak dikira 256M.",
      "<strong>Cuplikan YAML siap tempel.</strong> Salin baris <code>cpu</code> dan <code>memory</code> untuk requests dan limits.",
      "<strong>Tip singkat requests vs limits.</strong> Mengingatkan Guaranteed QoS — bukan penasihat sizing.",
      "<strong>Tombol contoh.</strong> Mengisi nilai umum: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Berjalan di peramban.</strong> Tanpa API; nilai tidak meninggalkan perangkat.",
      "<strong>Gratis dan multibahasa.</strong> Tanpa akun; UI dan SEO untuk setiap locale."
    ],
    howTitle: "Cara mengonversi unit Kubernetes",
    howSteps: [
      "Buka bagian CPU atau Memori.",
      "Ketik angka dan pilih unit.",
      "Lihat ekuivalen dan YAML saat mengetik.",
      "Pakai contoh lalu salin cuplikan yang dibutuhkan."
    ],
    strongTitle: "Unit, requests, dan limits",
    strongLead: "Kubernetes menerima CPU sebagai cores atau millicores (<code>m</code>) dan memori dengan sufiks biner (Ki/Mi/Gi/Ti) atau desimal (k/M/G/T). Alat ini hanya mengonversi kuantitas.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi adalah pangkat 1024; M/G/MB/GB pangkat 1000.",
      "requests memandu penjadwalan; limits membatasi pemakaian — biasanya requests ≤ limits.",
      "Requests dan limits sama untuk CPU dan memori = Guaranteed QoS.",
      "Samakan gaya unit di tim agar Mi dan M tidak tercampur.",
      "Bukan penasihat sizing beban kerja."
    ],
    usesTitle: "Untuk apa",
    uses: [
      "memeriksa millicores vs cores sebelum mengedit Deployment;",
      "membandingkan Mi dan M saat membaca chart atau manifes;",
      "menyiapkan fragmen YAML requests/limits;",
      "mengajar perbedaan sufiks biner dan desimal;",
      "cek cepat saat review atau insiden."
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "Arti sufiks m pada CPU?", a: "Milicore: 1000m = satu core penuh. 0.5 = 500m." },
      { q: "Mi sama dengan M atau MB?", a: "Tidak. Mi = 1024² byte; M/MB = 1000²." },
      { q: "Nilai diunggah?", a: "Tidak. Konversi hanya di peramban." },
      { q: "Menyarankan requests yang tepat?", a: "Tidak. Hanya konversi unit dan tip singkat." },
      { q: "Bentuk YAML CPU mana?", a: "<code>500m</code> dan <code>0.5</code> valid; tetap konsisten." },
      { q: "KB/MB/GB?", a: "Ya, alias berbasis 1000 bersama K/M/G/T." },
      { q: "Ti dan T?", a: "Ti = 1024⁴; T/TB = 1000⁴. Keduanya di tabel." },
      { q: "Guaranteed QoS wajib?", a: "Tidak. Kelas saat requests = limits untuk CPU dan memori." },
      { q: "Editor manifes penuh?", a: "Tidak. Hanya unit dan cuplikan YAML pendek." },
      { q: "Berbayar?", a: "Tidak — gratis, tanpa registrasi." }
    ],
  },
  pa: {
    appName: "k8size",
    tipsLabel: "ਸੁਝਾਅ:",
    benefitsTitle: "k8size ਕਿਉਂ ਵਰਤੋ",
    benefits: [
      "<strong>ਚੇਤਾਵਨੀ, ਸਾਂਝਾ ਅਤੇ QoS.</strong> ਦਸ਼ਮਲਵ ਇਕਾਈਆਂ ਤੇ Mi/Gi; ?cpu=&mem= ਕਾਪੀ; ਇੱਕ ਕੰਟੇਨਰ QoS।",
      "<strong>Cores ↔ millicores.</strong> ਦਸ਼ਮਲਵ cores ਜਾਂ ਪੂਰਨ millicores ਭਰੋ ਅਤੇ ਦੋਵੇਂ ਰੂਪ ਤੇ <code>cpu: \"500m\"</code> ਵਰਗਾ YAML ਵੇਖੋ।",
      "<strong>ਬਾਈਨਰੀ ਬਨਾਮ ਦਸ਼ਮਲਵ ਮੈਮੋਰੀ.</strong> Mi/Gi (1024) ਨੂੰ M/G/MB/GB (1000) ਤੋਂ ਵੱਖ ਰੱਖੋ ਤਾਂ ਜੋ 256Mi ਨੂੰ 256M ਨਾ ਸਮਝੋ।",
      "<strong>ਤਿਆਰ YAML.</strong> requests ਤੇ limits ਲਈ <code>cpu</code> ਤੇ <code>memory</code> ਕਾਪੀ ਕਰੋ।",
      "<strong>ਛੋਟੀ requests vs limits ਟਿਪ.</strong> Guaranteed QoS ਦੀ ਯਾਦ — ਸਾਈਜ਼ਿੰਗ ਸਲਾਹਕਾਰ ਨਹੀਂ।",
      "<strong>ਉਦਾਹਰਨ ਬਟਨ.</strong> ਆਮ ਮੁੱਲ ਭਰਦੇ ਹਨ: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>।",
      "<strong>ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ.</strong> ਕੋਈ API ਨਹੀਂ; ਮੁੱਲ ਡਿਵਾਈਸ ਨਹੀਂ ਛੱਡਦੇ।",
      "<strong>ਮੁਫ਼ਤ ਤੇ ਬਹੁਭਾਸ਼ੀ.</strong> ਖਾਤਾ ਨਹੀਂ; ਹਰ ਲੋਕੇਲ ਲਈ UI ਤੇ SEO।"
    ],
    howTitle: "Kubernetes ਇਕਾਈਆਂ ਕਿਵੇਂ ਬਦਲੀਏ",
    howSteps: [
      "CPU ਜਾਂ ਮੈਮੋਰੀ ਭਾਗ ਖੋਲ੍ਹੋ।",
      "ਨੰਬਰ ਲਿਖੋ ਤੇ ਇਕਾਈ ਚੁਣੋ।",
      "ਲਿਖਦਿਆਂ ਬਰਾਬਰੀਆਂ ਤੇ YAML ਵੇਖੋ।",
      "ਉਦਾਹਰਨ ਵਰਤੋ ਤੇ ਲੋੜੀਂਦਾ ਸਨਿੱਪਟ ਕਾਪੀ ਕਰੋ।"
    ],
    strongTitle: "ਇਕਾਈਆਂ, requests ਤੇ limits",
    strongLead: "Kubernetes CPU ਨੂੰ cores ਜਾਂ millicores (<code>m</code>) ਵਜੋਂ ਤੇ ਮੈਮੋਰੀ ਨੂੰ ਬਾਈਨਰੀ (Ki/Mi/Gi/Ti) ਜਾਂ ਦਸ਼ਮਲਵ (k/M/G/T) ਪਿਛੇਤਰਾਂ ਨਾਲ ਲੈਂਦਾ ਹੈ। ਟੂਲ ਸਿਰਫ਼ ਮਾਤਰਾ ਬਦਲਦਾ ਹੈ।",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi 1024 ਦੀਆਂ ਘਾਤਾਂ ਹਨ; M/G/MB/GB 1000 ਦੀਆਂ।",
      "requests ਸ਼ੈਡਿਊਲਿੰਗ ਲਈ; limits ਵਰਤੋਂ ਰੋਕਦੇ ਹਨ — ਅਕਸਰ requests ≤ limits।",
      "CPU ਤੇ ਮੈਮੋਰੀ ਤੇ ਬਰਾਬਰ requests ਤੇ limits = Guaranteed QoS।",
      "ਟੀਮ ਵਿੱਚ ਇੱਕ ਇਕਾਈ ਸਟਾਈਲ ਰੱਖੋ ਤਾਂ ਜੋ Mi ਤੇ M ਨਾ ਰਲਣ।",
      "ਇਹ ਵਰਕਲੋਡ ਸਾਈਜ਼ਿੰਗ ਸਲਾਹਕਾਰ ਨਹੀਂ ਹੈ।"
    ],
    usesTitle: "ਕਿਸ ਲਈ",
    uses: [
      "Deployment ਸੋਧ ਤੋਂ ਪਹਿਲਾਂ millicores ਤੇ cores ਜਾਂਚ;",
      "ਚਾਰਟ ਜਾਂ ਮੈਨੀਫੈਸਟ ਪੜ੍ਹਦਿਆਂ Mi ਤੇ M ਦੀ ਤੁਲਨਾ;",
      "requests/limits ਲਈ YAML ਟੁਕੜੇ ਤਿਆਰ ਕਰਨਾ;",
      "ਬਾਈਨਰੀ ਤੇ ਦਸ਼ਮਲਵ ਪਿਛੇਤਰਾਂ ਦਾ ਫ਼ਰਕ ਸਿਖਾਉਣਾ;",
      "ਰਿਵਿਊ ਜਾਂ ਘਟਨਾ ਵੇਲੇ ਤੇਜ਼ ਜਾਂਚ।"
    ],
    faqTitle: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
    faq: [
      { q: "CPU ਤੇ m ਦਾ ਅਰਥ?", a: "ਮਿਲੀਕੋਰ: 1000m = ਇੱਕ ਪੂਰਾ core। 0.5 = 500m।" },
      { q: "ਕੀ Mi = M ਜਾਂ MB?", a: "ਨਹੀਂ। Mi = 1024² ਬਾਈਟ; M/MB = 1000²।" },
      { q: "ਕੀ ਮੁੱਲ ਅੱਪਲੋਡ ਹੁੰਦੇ ਹਨ?", a: "ਨਹੀਂ। ਰੂਪਾਂਤਰਨ ਸਿਰਫ਼ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ।" },
      { q: "ਸਹੀ requests ਸੁਝਾਏਗਾ?", a: "ਨਹੀਂ। ਸਿਰਫ਼ ਇਕਾਈ ਰੂਪਾਂਤਰਨ ਤੇ ਛੋਟੀ ਟਿਪ।" },
      { q: "CPU YAML ਕਿਹੜਾ?", a: "<code>500m</code> ਤੇ <code>0.5</code> ਦੋਵੇਂ ਠੀਕ; ਇੱਕ ਸਟਾਈਲ ਰੱਖੋ।" },
      { q: "KB/MB/GB?", a: "ਹਾਂ, 1000-ਆਧਾਰਿਤ ਉਪਨਾਮ K/M/G/T ਨਾਲ।" },
      { q: "Ti ਤੇ T?", a: "Ti = 1024⁴; T/TB = 1000⁴। ਦੋਵੇਂ ਟੇਬਲ ਵਿੱਚ।" },
      { q: "Guaranteed QoS ਲਾਜ਼ਮੀ?", a: "ਨਹੀਂ। ਜਦੋਂ requests = limits ਹੋਣ ਤਾਂ ਇੱਕ QoS ਵਰਗ।" },
      { q: "ਪੂਰਾ ਮੈਨੀਫੈਸਟ ਐਡੀਟਰ?", a: "ਨਹੀਂ। ਸਿਰਫ਼ ਇਕਾਈਆਂ ਤੇ ਛੋਟੇ YAML।" },
      { q: "ਕੀ ਫ਼ੀਸ ਹੈ?", a: "ਨਹੀਂ — ਮੁਫ਼ਤ, ਬਿਨਾਂ ਰਜਿਸਟਰ।" }
    ],
  },
  jv: {
    appName: "k8size",
    tipsLabel: "Tips:",
    benefitsTitle: "Kok nganggo k8size",
    benefits: [
      "<strong>Pepenget, enggo, QoS.</strong> Unit desimal nyaranake Mi/Gi; salin ?cpu=&mem=; priksa QoS siji kontainer.",
      "<strong>Cores ↔ millicores.</strong> Lebokake cores desimal utawa millicores wutuh lan deleng loro wujud plus YAML kaya <code>cpu: \"500m\"</code>.",
      "<strong>Memori biner vs desimal.</strong> Bedaake Mi/Gi (1024) saka M/G/MB/GB (1000) supaya 256Mi ora dikira 256M.",
      "<strong>Cuplikan YAML siap.</strong> Salin baris <code>cpu</code> lan <code>memory</code> kanggo requests lan limits.",
      "<strong>Tip cekak requests vs limits.</strong> Ngelingake Guaranteed QoS — dudu penasihat sizing.",
      "<strong>Tombol conto.</strong> Ngisi nilai umum: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Mlaku ing browser.</strong> Tanpa API; nilai ora metu saka piranti.",
      "<strong>Gratis lan multibasa.</strong> Tanpa akun; UI lan SEO saben locale."
    ],
    howTitle: "Cara ngowahi unit Kubernetes",
    howSteps: [
      "Bukak bagean CPU utawa Memori.",
      "Tulis angka lan pilih unit.",
      "Deleng padha lan YAML nalika ngetik.",
      "Gunakake conto banjur salin cuplikan sing dibutuhake."
    ],
    strongTitle: "Unit, requests, lan limits",
    strongLead: "Kubernetes nampa CPU minangka cores utawa millicores (<code>m</code>) lan memori nganggo sufiks biner (Ki/Mi/Gi/Ti) utawa desimal (k/M/G/T). Piranti iki mung ngowahi kuantitas.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi kuasa 1024; M/G/MB/GB kuasa 1000.",
      "requests nuntun penjadwalan; limits mbatesi panggunaan — biasane requests ≤ limits.",
      "Requests lan limits padha kanggo CPU lan memori = Guaranteed QoS.",
      "Samakna gaya unit ing tim supaya Mi lan M ora kacampur.",
      "Dudu penasihat sizing beban kerja."
    ],
    usesTitle: "Kanggo apa",
    uses: [
      "mriksa millicores vs cores sadurunge ngowahi Deployment;",
      "mbandhingake Mi lan M nalika maca chart utawa manifes;",
      "nyiapake fragmen YAML requests/limits;",
      "mulang bedane sufiks biner lan desimal;",
      "priksa cepet nalika review utawa insiden."
    ],
    faqTitle: "Pitakonan umum",
    faq: [
      { q: "Arti sufiks m ing CPU?", a: "Milicore: 1000m = siji core kebak. 0.5 = 500m." },
      { q: "Mi padha karo M utawa MB?", a: "Ora. Mi = 1024² bait; M/MB = 1000²." },
      { q: "Nilai diunggah?", a: "Ora. Konversi mung ing browser." },
      { q: "Nyaranake requests sing bener?", a: "Ora. Mung konversi unit lan tip cekak." },
      { q: "Bentuk YAML CPU endi?", a: "<code>500m</code> lan <code>0.5</code> valid; tetep konsisten." },
      { q: "KB/MB/GB?", a: "Ya, alias basis 1000 bebarengan K/M/G/T." },
      { q: "Ti lan T?", a: "Ti = 1024⁴; T/TB = 1000⁴. Loro-lorone ing tabel." },
      { q: "Guaranteed QoS wajib?", a: "Ora. Kelas nalika requests = limits kanggo CPU lan memori." },
      { q: "Editor manifes lengkap?", a: "Ora. Mung unit lan cuplikan YAML cekak." },
      { q: "Mbayar?", a: "Ora — gratis, tanpa registrasi." }
    ],
  },
  te: {
    appName: "k8size",
    tipsLabel: "చిట్కాలు:",
    benefitsTitle: "k8size ఎందుకు",
    benefits: [
      "<strong>హెచ్చరిక, షేర్, QoS.</strong> దశాంశ యూనిట్లకు Mi/Gi సూచన; ?cpu=&mem= కాపీ; ఒక కంటైనర్ QoS.",
      "<strong>Cores ↔ millicores.</strong> దశాంశ cores లేదా పూర్ణ millicores ఇచ్చి రెండు రూపాలు మరియు <code>cpu: \"500m\"</code> చూడండి.",
      "<strong>బైనరీ vs దశాంశ మెమరీ.</strong> Mi/Gi (1024)ను M/G/MB/GB (1000) నుండి వేరు చేయండి — 256Miను 256Mగా తీసుకోకండి.",
      "<strong>సిద్ధ YAML.</strong> requests మరియు limits కోసం <code>cpu</code>, <code>memory</code> కాపీ చేయండి.",
      "<strong>చిన్న requests vs limits చిట్కా.</strong> Guaranteed QoS గుర్తు — సైజింగ్ సలహాదారు కాదు.",
      "<strong>ఉదాహరణ బటన్లు.</strong> సాధారణ విలువలు: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>బ్రౌజర్‌లోనే.</strong> API లేదు; విలువలు పరికరం వదలవు.",
      "<strong>ఉచితం, బహుభాష.</strong> అకౌంట్ లేదు; ప్రతి లొకేల్‌కు UI మరియు SEO."
    ],
    howTitle: "Kubernetes యూనిట్లు ఎలా మార్చాలి",
    howSteps: [
      "CPU లేదా మెమరీ విభాగం తెరవండి.",
      "సంఖ్య రాసి యూనిట్ ఎంచుకోండి.",
      "టైప్ చేస్తూ సమానాలు మరియు YAML చూడండి.",
      "ఉదాహరణ వాడి అవసరమైన స్నిప్పెట్ కాపీ చేయండి."
    ],
    strongTitle: "యూనిట్లు, requests మరియు limits",
    strongLead: "Kubernetes CPUను cores లేదా millicores (<code>m</code>)గా, మెమరీని బైనరీ (Ki/Mi/Gi/Ti) లేదా దశాంశ (k/M/G/T) సఫిక్స్‌తో తీసుకుంటుంది. టూల్ కేవలం పరిమాణాలను మార్చుతుంది.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi = 1024 ఘాతాలు; M/G/MB/GB = 1000 ఘాతాలు.",
      "requests షెడ్యూలింగ్‌కు; limits వినియోగ పరిమితి — సాధారణంగా requests ≤ limits.",
      "CPU మరియు మెమరీపై సమాన requests మరియు limits = Guaranteed QoS.",
      "జట్టులో ఒకే యూనిట్ శైలి ఉంచి Mi vs M తప్పులు నివారించండి.",
      "ఇది వర్క్‌లోడ్ సైజింగ్ సలహాదారు కాదు."
    ],
    usesTitle: "దేనికి",
    uses: [
      "Deployment మార్చే ముందు millicores vs cores తనిఖీ;",
      "చార్ట్/మానిఫెస్ట్ చదువుతూ Mi మరియు M పోలిక;",
      "requests/limits YAML ముక్కలు సిద్ధం చేయడం;",
      "బైనరీ vs దశాంశ సఫిక్స్ తేడా నేర్పడం;",
      "రివ్యూ లేదా ఘటనలో త్వరిత తనిఖీ."
    ],
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
    faq: [
      { q: "CPUపై m అంటే?", a: "మిల్లీకోర్: 1000m = ఒక పూర్తి కోర్. 0.5 = 500m." },
      { q: "Mi = M లేదా MB?", a: "కాదు. Mi = 1024² బైట్లు; M/MB = 1000²." },
      { q: "విలువలు అప్‌లోడ్ అవుతాయా?", a: "కాదు. మార్పిడి బ్రౌజర్‌లోనే." },
      { q: "సరైన requests సూచిస్తుందా?", a: "కాదు. యూనిట్ మార్పిడి మరియు చిన్న చిట్కా మాత్రమే." },
      { q: "CPU YAML ఏది?", a: "<code>500m</code> మరియు <code>0.5</code> రెండూ సరైనవి; ఒక శైలి ఉంచండి." },
      { q: "KB/MB/GB?", a: "అవును, 1000-ఆధారిత అలియాస్‌లు K/M/G/Tతో." },
      { q: "Ti మరియు T?", a: "Ti = 1024⁴; T/TB = 1000⁴. రెండూ పట్టికలో." },
      { q: "Guaranteed QoS తప్పనిసరా?", a: "కాదు. requests = limits అయితే ఒక QoS తరగతి." },
      { q: "పూర్తి మానిఫెస్ట్ ఎడిటర్?", a: "కాదు. యూనిట్లు మరియు చిన్న YAML మాత్రమే." },
      { q: "చార్జీ?", a: "కాదు — ఉచితం, నమోదు లేకుండా." }
    ],
  },
  tr: {
    appName: "k8size",
    tipsLabel: "İpuçları:",
    benefitsTitle: "Neden k8size",
    benefits: [
      "<strong>Uyarı, paylaşım ve QoS.</strong> Ondalık birimler Mi/Gi önerir; ?cpu=&mem= kopyalayın; tek konteyner QoS.",
      "<strong>Cores ↔ millicores.</strong> Ondalık core veya tam milicore girin; her iki biçimi ve <code>cpu: \"500m\"</code> gibi YAML görün.",
      "<strong>İkili vs ondalık bellek.</strong> Mi/Gi (1024) ile M/G/MB/GB (1000) ayırın; 256Mi’yi 256M sanmayın.",
      "<strong>Hazır YAML.</strong> requests ve limits için <code>cpu</code> ve <code>memory</code> satırlarını kopyalayın.",
      "<strong>Kısa requests vs limits ipucu.</strong> Guaranteed QoS hatırlatması — boyutlandırma danışmanı değil.",
      "<strong>Örnek düğmeler.</strong> Yaygın değerler: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Tarayıcıda çalışır.</strong> API yok; değerler cihazdan çıkmaz.",
      "<strong>Ücretsiz ve çok dilli.</strong> Hesap yok; her dilde UI ve SEO."
    ],
    howTitle: "Kubernetes birimleri nasıl dönüştürülür",
    howSteps: [
      "CPU veya Bellek bölümünü açın.",
      "Sayı yazıp birimi seçin.",
      "Yazarken eşdeğerleri ve YAML’i görün.",
      "Örnek kullanıp gerekli parçayı kopyalayın."
    ],
    strongTitle: "Birimler, requests ve limits",
    strongLead: "Kubernetes CPU’yu cores veya millicores (<code>m</code>), belleği ikili (Ki/Mi/Gi/Ti) veya ondalık (k/M/G/T) soneklerle alır. Araç yalnızca miktar dönüştürür.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi 1024 kuvvetleri; M/G/MB/GB 1000 kuvvetleridir.",
      "requests zamanlamayı yönlendirir; limits kullanımı sınırlar — genelde requests ≤ limits.",
      "CPU ve bellekte eşit requests ve limits = Guaranteed QoS.",
      "Ekipte birim stilini hizalayın; Mi ile M karışmasın.",
      "İş yükü boyutlandırma danışmanı değildir."
    ],
    usesTitle: "Ne için",
    uses: [
      "Deployment düzenlemeden önce millicores ve cores kontrolü;",
      "chart veya manifesto okurken Mi ile M karşılaştırması;",
      "requests/limits YAML parçaları hazırlama;",
      "ikili ve ondalık sonek farkını öğretme;",
      "inceleme veya olay sırasında hızlı kontrol."
    ],
    faqTitle: "SSS",
    faq: [
      { q: "CPU’da m ne demek?", a: "Milicore: 1000m = bir tam çekirdek. 0.5 = 500m." },
      { q: "Mi, M veya MB ile aynı mı?", a: "Hayır. Mi = 1024² bayt; M/MB = 1000²." },
      { q: "Değerler yüklenir mi?", a: "Hayır. Dönüşüm yalnızca tarayıcıda." },
      { q: "Doğru requests önerir mi?", a: "Hayır. Yalnızca birim dönüşümü ve kısa ipucu." },
      { q: "CPU YAML hangisi?", a: "<code>500m</code> ve <code>0.5</code> geçerli; tutarlı olun." },
      { q: "KB/MB/GB?", a: "Evet, 1000 tabanlı takma adlar K/M/G/T ile." },
      { q: "Ti ve T?", a: "Ti = 1024⁴; T/TB = 1000⁴. İkisi de tabloda." },
      { q: "Guaranteed QoS zorunlu mu?", a: "Hayır. requests = limits olduğunda bir QoS sınıfı." },
      { q: "Tam manifesto düzenleyici mi?", a: "Hayır. Yalnızca birimler ve kısa YAML." },
      { q: "Ücretli mi?", a: "Hayır — ücretsiz, kayıtsız." }
    ],
  },
  ko: {
    appName: "k8size",
    tipsLabel: "팁:",
    benefitsTitle: "k8size를 쓰는 이유",
    benefits: [
      "<strong>경고·공유·QoS.</strong> 십진 단위는 Mi/Gi를 제안하고 ?cpu=&mem= 링크와 단일 컨테이너 QoS를 제공합니다.",
      "<strong>코어 ↔ 밀리코어.</strong> 소수 코어나 정수 밀리코어를 입력하면 두 형태와 <code>cpu: \"500m\"</code> 같은 YAML을 봅니다.",
      "<strong>이진 vs 십진 메모리.</strong> Mi/Gi(1024)와 M/G/MB/GB(1000)를 구분해 256Mi를 256M으로 착각하지 마세요.",
      "<strong>붙여넣기용 YAML.</strong> requests/limits용 <code>cpu</code>·<code>memory</code> 줄을 복사합니다.",
      "<strong>짧은 requests vs limits 안내.</strong> Guaranteed QoS를 상기 — 사이징 조언이 아닙니다.",
      "<strong>예제 버튼.</strong> 흔한 값: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>브라우저에서만.</strong> API 없음; 값이 기기를 떠나지 않습니다.",
      "<strong>무료·다국어.</strong> 계정 없음; 지원 로케일마다 UI와 SEO."
    ],
    howTitle: "Kubernetes 단위 변환 방법",
    howSteps: [
      "CPU 또는 메모리 섹션을 엽니다.",
      "숫자를 입력하고 단위를 고릅니다.",
      "입력하면서 환산값과 YAML을 봅니다.",
      "예제를 누른 뒤 필요한 조각을 복사합니다."
    ],
    strongTitle: "단위, requests, limits",
    strongLead: "Kubernetes는 CPU를 cores 또는 millicores(<code>m</code>), 메모리를 이진(Ki/Mi/Gi/Ti) 또는 십진(k/M/G/T) 접미사로 받습니다. 이 도구는 수량만 변환합니다.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi는 1024의 거듭제곱, M/G/MB/GB는 1000의 거듭제곱입니다.",
      "requests는 스케줄링, limits는 사용 상한 — 보통 requests ≤ limits.",
      "CPU·메모리에서 requests = limits이면 Guaranteed QoS.",
      "팀에서 단위 표기를 맞춰 Mi와 M 혼동을 피하세요.",
      "워크로드 사이징 조언기가 아닙니다."
    ],
    usesTitle: "용도",
    uses: [
      "Deployment 수정 전 millicores와 cores 확인;",
      "차트·매니페스트에서 Mi와 M 비교;",
      "requests/limits YAML 조각 준비;",
      "이진·십진 접미사 차이 설명;",
      "리뷰나 장애 시 빠른 점검."
    ],
    faqTitle: "자주 묻는 질문",
    faq: [
      { q: "CPU의 m은?", a: "밀리코어: 1000m = 1 코어. 0.5 = 500m." },
      { q: "Mi가 M/MB와 같나요?", a: "아니요. Mi = 1024²바이트, M/MB = 1000²." },
      { q: "값이 업로드되나요?", a: "아니요. 변환은 브라우저에서만." },
      { q: "적절한 requests를 추천하나요?", a: "아니요. 단위 변환과 짧은 팁만." },
      { q: "CPU YAML은?", a: "<code>500m</code>와 <code>0.5</code> 모두 유효; 일관되게." },
      { q: "KB/MB/GB?", a: "예. 1000 기준 별칭이 K/M/G/T와 함께." },
      { q: "Ti와 T?", a: "Ti = 1024⁴, T/TB = 1000⁴. 표에 둘 다." },
      { q: "Guaranteed QoS 필수?", a: "아니요. requests = limits일 때의 QoS 클래스." },
      { q: "전체 매니페스트 편집기?", a: "아니요. 단위와 짧은 YAML만." },
      { q: "유료?", a: "아니요 — 무료, 가입 없음." }
    ],
  },
  mr: {
    appName: "k8size",
    tipsLabel: "टीपा:",
    benefitsTitle: "k8size का वापरावे",
    benefits: [
      "<strong>इशारा, शेअर आणि QoS.</strong> दशांश एककांवर Mi/Gi; ?cpu=&mem= कॉपी; एक कंटेनर QoS.",
      "<strong>Cores ↔ millicores.</strong> दशांश cores किंवा पूर्ण millicores टाका आणि दोन्ही रूपे व <code>cpu: \"500m\"</code> पहा.",
      "<strong>बायनरी विरुद्ध दशांश मेमरी.</strong> Mi/Gi (1024) आणि M/G/MB/GB (1000) वेगळे ठेवा — 256Mi ला 256M समजू नका.",
      "<strong>तयार YAML.</strong> requests आणि limits साठी <code>cpu</code> व <code>memory</code> कॉपी करा.",
      "<strong>छोटी requests vs limits टीप.</strong> Guaranteed QoS आठवण — सायझिंग सल्लागार नाही.",
      "<strong>उदाहरण बटणे.</strong> सामान्य मूल्ये: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>ब्राउझरमध्ये.</strong> API नाही; मूल्ये डिव्हाइस सोडत नाहीत.",
      "<strong>मोफत व बहुभाषिक.</strong> खाते नाही; प्रत्येक लोकेलसाठी UI व SEO."
    ],
    howTitle: "Kubernetes एकके कशी रूपांतरित करावीत",
    howSteps: [
      "CPU किंवा मेमरी विभाग उघडा.",
      "आकडा लिहून एकक निवडा.",
      "टाइप करताना समतुल्य व YAML पहा.",
      "उदाहरण वापरा आणि आवश्यक स्निपेट कॉपी करा."
    ],
    strongTitle: "एकके, requests आणि limits",
    strongLead: "Kubernetes CPU cores किंवा millicores (<code>m</code>) म्हणून आणि मेमरी बायनरी (Ki/Mi/Gi/Ti) किंवा दशांश (k/M/G/T) प्रत्ययांनी स्वीकारते. हे साधन फक्त प्रमाणे रूपांतरित करते.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi = 1024 च्या घाता; M/G/MB/GB = 1000 च्या.",
      "requests शेड्युलिंगसाठी; limits वापर मर्यादित करतात — सहसा requests ≤ limits.",
      "CPU व मेमरीवर समान requests व limits = Guaranteed QoS.",
      "टीममध्ये एक एकक शैली ठेवा जेणेकरून Mi व M मिसळणार नाहीत.",
      "हे वर्कलोड सायझिंग सल्लागार नाही."
    ],
    usesTitle: "कशासाठी",
    uses: [
      "Deployment संपादनापूर्वी millicores व cores तपासणे;",
      "चार्ट/मॅनिफेस्ट वाचताना Mi व M तुलना;",
      "requests/limits YAML तुकडे तयार करणे;",
      "बायनरी व दशांश प्रत्यय फरक शिकवणे;",
      "पुनरावलोकन किंवा घटनेत जलद तपास."
    ],
    faqTitle: "नेहमीचे प्रश्न",
    faq: [
      { q: "CPU वर m म्हणजे?", a: "मिलीकोर: 1000m = एक पूर्ण कोर. 0.5 = 500m." },
      { q: "Mi = M किंवा MB?", a: "नाही. Mi = 1024² बाइट; M/MB = 1000²." },
      { q: "मूल्ये अपलोड होतात का?", a: "नाही. रूपांतरण फक्त ब्राउझरमध्ये." },
      { q: "योग्य requests सुचवेल का?", a: "नाही. फक्त एकक रूपांतरण व छोटी टीप." },
      { q: "CPU YAML कोणते?", a: "<code>500m</code> व <code>0.5</code> दोन्ही वैध; एक शैली ठेवा." },
      { q: "KB/MB/GB?", a: "हो, 1000-आधारित उपनाम K/M/G/T सोबत." },
      { q: "Ti व T?", a: "Ti = 1024⁴; T/TB = 1000⁴. दोन्ही सारणीत." },
      { q: "Guaranteed QoS अनिवार्य?", a: "नाही. requests = limits असताना एक QoS वर्ग." },
      { q: "पूर्ण मॅनिफेस्ट संपादक?", a: "नाही. फक्त एकके व छोटे YAML." },
      { q: "शुल्क?", a: "नाही — मोफत, नोंदणीशिवाय." }
    ],
  },
  vi: {
    appName: "k8size",
    tipsLabel: "Mẹo:",
    benefitsTitle: "Vì sao dùng k8size",
    benefits: [
      "<strong>Cảnh báo, chia sẻ và QoS.</strong> Đơn vị thập phân gợi ý Mi/Gi; sao chép ?cpu=&mem=; xem QoS một container.",
      "<strong>Cores ↔ millicores.</strong> Nhập cores thập phân hoặc millicores nguyên và xem cả hai dạng cùng YAML như <code>cpu: \"500m\"</code>.",
      "<strong>Bộ nhớ nhị phân vs thập phân.</strong> Phân biệt Mi/Gi (1024) với M/G/MB/GB (1000) để không nhầm 256Mi với 256M.",
      "<strong>Đoạn YAML sẵn.</strong> Sao chép dòng <code>cpu</code> và <code>memory</code> cho requests và limits.",
      "<strong>Mẹo ngắn requests vs limits.</strong> Nhắc Guaranteed QoS — không phải cố vấn sizing.",
      "<strong>Nút ví dụ.</strong> Điền giá trị phổ biến: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Chạy trong trình duyệt.</strong> Không API; giá trị không rời thiết bị.",
      "<strong>Miễn phí, đa ngôn ngữ.</strong> Không tài khoản; UI và SEO cho mọi locale."
    ],
    howTitle: "Cách đổi đơn vị Kubernetes",
    howSteps: [
      "Mở phần CPU hoặc Bộ nhớ.",
      "Gõ số và chọn đơn vị.",
      "Xem tương đương và YAML khi gõ.",
      "Dùng ví dụ rồi sao chép đoạn cần thiết."
    ],
    strongTitle: "Đơn vị, requests và limits",
    strongLead: "Kubernetes nhận CPU dạng cores hoặc millicores (<code>m</code>) và bộ nhớ với hậu tố nhị phân (Ki/Mi/Gi/Ti) hoặc thập phân (k/M/G/T). Công cụ chỉ đổi số lượng.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi là lũy thừa 1024; M/G/MB/GB là lũy thừa 1000.",
      "requests hướng lịch trình; limits giới hạn dùng — thường requests ≤ limits.",
      "requests = limits cho CPU và bộ nhớ → Guaranteed QoS.",
      "Thống nhất kiểu đơn vị trong nhóm để tránh nhầm Mi với M.",
      "Không phải cố vấn sizing tải."
    ],
    usesTitle: "Dùng để làm gì",
    uses: [
      "kiểm millicores và cores trước khi sửa Deployment;",
      "so sánh Mi và M khi đọc chart/manifest;",
      "chuẩn bị mảnh YAML requests/limits;",
      "giải thích khác biệt hậu tố nhị phân/thập phân;",
      "kiểm nhanh khi review hoặc sự cố."
    ],
    faqTitle: "Câu hỏi thường gặp",
    faq: [
      { q: "m trên CPU nghĩa là gì?", a: "Millicore: 1000m = một core đầy. 0.5 = 500m." },
      { q: "Mi có bằng M/MB?", a: "Không. Mi = 1024² byte; M/MB = 1000²." },
      { q: "Giá trị có được tải lên?", a: "Không. Đổi chỉ trong trình duyệt." },
      { q: "Có gợi ý requests đúng?", a: "Không. Chỉ đổi đơn vị và mẹo ngắn." },
      { q: "YAML CPU nào?", a: "<code>500m</code> và <code>0.5</code> đều hợp lệ; hãy nhất quán." },
      { q: "KB/MB/GB?", a: "Có, bí danh gốc 1000 cùng K/M/G/T." },
      { q: "Ti và T?", a: "Ti = 1024⁴; T/TB = 1000⁴. Cả hai trong bảng." },
      { q: "Guaranteed QoS bắt buộc?", a: "Không. Là lớp khi requests = limits cho CPU và bộ nhớ." },
      { q: "Trình sửa manifest đầy đủ?", a: "Không. Chỉ đơn vị và YAML ngắn." },
      { q: "Có mất phí?", a: "Không — miễn phí, không đăng ký." }
    ],
  },
  ta: {
    appName: "k8size",
    tipsLabel: "குறிப்புகள்:",
    benefitsTitle: "ஏன் k8size",
    benefits: [
      "<strong>எச்சரிக்கை, பகிர்வு, QoS.</strong> தசம அலகுகளுக்கு Mi/Gi பரிந்துரை; ?cpu=&mem= நகல்; ஒரு கொள்கலன் QoS.",
      "<strong>Cores ↔ millicores.</strong> தசம cores அல்லது முழு millicores உள்ளிட்டு இரு வடிவங்களும் <code>cpu: \"500m\"</code> போன்ற YAML-ஐயும் பாருங்கள்.",
      "<strong>இருமம் vs தசம நினைவகம்.</strong> Mi/Gi (1024)ஐ M/G/MB/GB (1000)இலிருந்து பிரிக்கவும் — 256Miஐ 256M ஆக எண்ண வேண்டாம்.",
      "<strong>தயாரான YAML.</strong> requests மற்றும் limitsக்கு <code>cpu</code>, <code>memory</code> நகலெடுக்கவும்.",
      "<strong>குறுகிய requests vs limits குறிப்பு.</strong> Guaranteed QoS நினைவூட்டல் — அளவு ஆலோசகர் அல்ல.",
      "<strong>எடுத்துக்காட்டு பொத்தான்கள்.</strong> பொது மதிப்புகள்: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>உலாவியில் இயங்கும்.</strong> API இல்லை; மதிப்புகள் சாதனத்தை விடா.",
      "<strong>இலவசம், பன்மொழி.</strong> கணக்கு இல்லை; ஒவ்வொரு மொழிக்கும் UI மற்றும் SEO."
    ],
    howTitle: "Kubernetes அலகுகளை எவ்வாறு மாற்றுவது",
    howSteps: [
      "CPU அல்லது நினைவகப் பிரிவைத் திறக்கவும்.",
      "எண்ணை உள்ளிட்டு அலகைத் தேர்ந்தெடுக்கவும்.",
      "தட்டச்சு செய்யும்போது சமமானவை மற்றும் YAML பாருங்கள்.",
      "எடுத்துக்காட்டைப் பயன்படுத்தி தேவையான துண்டை நகலெடுக்கவும்."
    ],
    strongTitle: "அலகுகள், requests மற்றும் limits",
    strongLead: "Kubernetes CPUஐ cores அல்லது millicores (<code>m</code>) ஆகவும் நினைவகத்தை இரும (Ki/Mi/Gi/Ti) அல்லது தசம (k/M/G/T) பின்னொட்டுகளுடன் ஏற்கும். கருவி அளவுகளை மட்டும் மாற்றும்.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi = 1024 அடுக்குகள்; M/G/MB/GB = 1000 அடுக்குகள்.",
      "requests அட்டவணைக்கு; limits பயன்பாட்டை வரம்பிடும் — பொதுவாக requests ≤ limits.",
      "CPU மற்றும் நினைவகத்தில் சம requests மற்றும் limits = Guaranteed QoS.",
      "குழுவில் ஒரே அலகு பாணியை வைத்து Mi vs M தவறுகளைத் தவிர்க்கவும்.",
      "இது பணிச்சுமை அளவு ஆலோசகர் அல்ல."
    ],
    usesTitle: "எதற்கு",
    uses: [
      "Deployment திருத்தும் முன் millicores மற்றும் cores சரிபார்ப்பு;",
      "சார்ட்/மேனிஃபெஸ்ட் படிக்கும்போது Mi மற்றும் M ஒப்பீடு;",
      "requests/limits YAML துண்டுகள் தயாரித்தல்;",
      "இரும vs தசம பின்னொட்டு வேறுபாடு கற்பித்தல்;",
      "மதிப்பாய்வு அல்லது சம்பவத்தில் விரைவு சோதனை."
    ],
    faqTitle: "அடிக்கடி கேட்கும் கேள்விகள்",
    faq: [
      { q: "CPUஇல் m என்றால்?", a: "மில்லிகோர்: 1000m = ஒரு முழு கோர். 0.5 = 500m." },
      { q: "Mi = M அல்லது MB?", a: "இல்லை. Mi = 1024² பைட்; M/MB = 1000²." },
      { q: "மதிப்புகள் பதிவேற்றப்படுமா?", a: "இல்லை. மாற்றம் உலாவியில் மட்டும்." },
      { q: "சரியான requests பரிந்துரைக்குமா?", a: "இல்லை. அலகு மாற்றம் மற்றும் குறுகிய குறிப்பு மட்டும்." },
      { q: "CPU YAML எது?", a: "<code>500m</code> மற்றும் <code>0.5</code> இரண்டும் செல்லும்; ஒரே பாணி வைக்கவும்." },
      { q: "KB/MB/GB?", a: "ஆம், 1000 அடிப்படை மாற்றுப்பெயர்கள் K/M/G/T உடன்." },
      { q: "Ti மற்றும் T?", a: "Ti = 1024⁴; T/TB = 1000⁴. இரண்டும் அட்டவணையில்." },
      { q: "Guaranteed QoS கட்டாயா?", a: "இல்லை. requests = limits ஆகும்போது ஒரு QoS வகுப்பு." },
      { q: "முழு மேனிஃபெஸ்ட் தொகுப்பி?", a: "இல்லை. அலகுகள் மற்றும் குறுகிய YAML மட்டும்." },
      { q: "கட்டணம்?", a: "இல்லை — இலவசம், பதிவு இல்லை." }
    ],
  },
  it: {
    appName: "k8size",
    tipsLabel: "Suggerimenti:",
    benefitsTitle: "Perché usare k8size",
    benefits: [
      "<strong>Avvisi, condivisione e QoS.</strong> Le unità decimali suggeriscono Mi/Gi; copia ?cpu=&mem=; controlla il QoS di un contenitore.",
      "<strong>Cores ↔ millicores.</strong> Inserisci core decimali o millicore interi e vedi entrambe le forme più YAML come <code>cpu: \"500m\"</code>.",
      "<strong>Memoria binaria vs decimale.</strong> Distingui Mi/Gi (1024) da M/G/MB/GB (1000) per non confondere 256Mi con 256M.",
      "<strong>Snippet YAML pronti.</strong> Copia le righe <code>cpu</code> e <code>memory</code> per requests e limits.",
      "<strong>Breve tip requests vs limits.</strong> Ricorda Guaranteed QoS — non è un consulente di dimensionamento.",
      "<strong>Pulsanti esempio.</strong> Compilano valori comuni: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>Nel browser.</strong> Niente API; i valori non lasciano il dispositivo.",
      "<strong>Gratis e multilingue.</strong> Senza account; UI e SEO per ogni locale."
    ],
    howTitle: "Come convertire le unità Kubernetes",
    howSteps: [
      "Apri la sezione CPU o Memoria.",
      "Digita un numero e scegli l’unità.",
      "Leggi equivalenti e YAML mentre digiti.",
      "Usa un esempio e copia lo snippet necessario."
    ],
    strongTitle: "Unità, requests e limits",
    strongLead: "Kubernetes accetta la CPU come cores o millicores (<code>m</code>) e la memoria con suffissi binari (Ki/Mi/Gi/Ti) o decimali (k/M/G/T). Lo strumento converte solo quantità.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi sono potenze di 1024; M/G/MB/GB di 1000.",
      "requests guidano lo scheduling; limits limitano l’uso — di solito requests ≤ limits.",
      "Requests e limits uguali per CPU e memoria = Guaranteed QoS.",
      "Allinea lo stile delle unità nel team per evitare Mi vs M.",
      "Non è un consulente di sizing del carico."
    ],
    usesTitle: "A cosa serve",
    uses: [
      "controllare millicores e cores prima di modificare un Deployment;",
      "confrontare Mi e M leggendo chart o manifest;",
      "preparare frammenti YAML di requests e limits;",
      "spiegare la differenza tra suffissi binari e decimali;",
      "controlli rapidi in review o incidenti."
    ],
    faqTitle: "Domande frequenti",
    faq: [
      { q: "Cosa significa il suffisso m sulla CPU?", a: "Millicore: 1000m = un core intero. 0.5 = 500m." },
      { q: "Mi è uguale a M o MB?", a: "No. Mi = 1024² byte; M/MB = 1000²." },
      { q: "I valori vengono caricati?", a: "No. Conversione solo nel browser." },
      { q: "Suggerisce i requests giusti?", a: "No. Solo conversione unità e tip breve." },
      { q: "Quale YAML per la CPU?", a: "<code>500m</code> e <code>0.5</code> sono validi; sii coerente." },
      { q: "KB/MB/GB?", a: "Sì, alias base 1000 insieme a K/M/G/T." },
      { q: "Ti e T?", a: "Ti = 1024⁴; T/TB = 1000⁴. Entrambi in tabella." },
      { q: "Guaranteed QoS obbligatorio?", a: "No. Classe quando requests = limits per CPU e memoria." },
      { q: "Editor di manifest completi?", a: "No. Solo unità e snippet YAML brevi." },
      { q: "A pagamento?", a: "No — gratis, senza registrazione." }
    ],
  },
  fa: {
    appName: "k8size",
    tipsLabel: "نکته‌ها:",
    benefitsTitle: "چرا k8size",
    benefits: [
      "<strong>هشدار، هم‌رسانی و QoS.</strong> واحدهای ده‌دهی Mi/Gi پیشنهاد می‌کنند؛ ?cpu=&mem= را کپی کنید؛ QoS یک کانتینر را ببینید.",
      "<strong>هسته ↔ میلی‌کور.</strong> هسته‌های اعشاری یا میلی‌کور صحیح وارد کنید و هر دو شکل و YAML مانند <code>cpu: \"500m\"</code> را ببینید.",
      "<strong>حافظه دودویی در برابر دهدهی.</strong> Mi/Gi (۱۰۲۴) را از M/G/MB/GB (۱۰۰۰) جدا کنید تا ۲۵۶Mi را با ۲۵۶M اشتباه نگیرید.",
      "<strong>قطعه‌های YAML آماده.</strong> خطوط <code>cpu</code> و <code>memory</code> را برای requests و limits کپی کنید.",
      "<strong>نکته کوتاه requests در برابر limits.</strong> یادآوری Guaranteed QoS — مشاور اندازه‌گذاری نیست.",
      "<strong>دکمه‌های نمونه.</strong> مقادیر رایج: <code>100m</code>، <code>500m</code>، <code>256Mi</code>، <code>1Gi</code>.",
      "<strong>در مرورگر.</strong> بدون API؛ مقادیر دستگاه را ترک نمی‌کنند.",
      "<strong>رایگان و چندزبانه.</strong> بدون حساب؛ UI و SEO برای هر زبان پشتیبانی‌شده."
    ],
    howTitle: "چگونه واحدهای Kubernetes را تبدیل کنیم",
    howSteps: [
      "بخش CPU یا حافظه را باز کنید.",
      "عدد را بنویسید و واحد را انتخاب کنید.",
      "هم‌ارزها و YAML را هنگام تایپ ببینید.",
      "نمونه را بزنید و قطعه لازم را کپی کنید."
    ],
    strongTitle: "واحدها، requests و limits",
    strongLead: "Kubernetes CPU را به‌صورت cores یا millicores (<code>m</code>) و حافظه را با پسوندهای دودویی (Ki/Mi/Gi/Ti) یا دهدهی (k/M/G/T) می‌پذیرد. ابزار فقط کمیت‌ها را تبدیل می‌کند.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi توان‌های ۱۰۲۴ هستند؛ M/G/MB/GB توان‌های ۱۰۰۰.",
      "requests زمان‌بندی را هدایت می‌کنند؛ limits مصرف را محدود می‌کنند — معمولاً requests ≤ limits.",
      "requests و limits برابر برای CPU و حافظه = Guaranteed QoS.",
      "سبک واحد را در تیم یکسان کنید تا Mi و M قاطی نشوند.",
      "مشاور اندازه‌گذاری بار کاری نیست."
    ],
    usesTitle: "برای چه کاری",
    uses: [
      "بررسی millicores و cores پیش از ویرایش Deployment؛",
      "مقایسه Mi و M هنگام خواندن chart یا مانیفست؛",
      "آماده‌سازی قطعات YAML برای requests و limits؛",
      "آموزش تفاوت پسوندهای دودویی و دهدهی؛",
      "بررسی سریع در بازبینی یا رخداد."
    ],
    faqTitle: "پرسش‌های پرتکرار",
    faq: [
      { q: "معنی m روی CPU؟", a: "میلی‌کور: ۱۰۰۰m = یک هسته کامل. ۰٫۵ = ۵۰۰m." },
      { q: "آیا Mi همان M یا MB است؟", a: "خیر. Mi = ۱۰۲۴² بایت؛ M/MB = ۱۰۰۰²." },
      { q: "آیا مقادیر بارگذاری می‌شوند؟", a: "خیر. تبدیل فقط در مرورگر است." },
      { q: "requests درست پیشنهاد می‌دهد؟", a: "خیر. فقط تبدیل واحد و نکته کوتاه." },
      { q: "کدام YAML برای CPU؟", a: "هم <code>500m</code> و هم <code>0.5</code> معتبرند؛ یک سبک بمانید." },
      { q: "KB/MB/GB؟", a: "بله، نام‌های مستعار پایه ۱۰۰۰ کنار K/M/G/T." },
      { q: "Ti و T؟", a: "Ti = ۱۰۲۴⁴؛ T/TB = ۱۰۰۰⁴. هر دو در جدول." },
      { q: "Guaranteed QoS اجباری است؟", a: "خیر. وقتی requests = limits برای CPU و حافظه یک کلاس QoS است." },
      { q: "ویرایشگر مانیفست کامل؟", a: "خیر. فقط واحدها و YAML کوتاه." },
      { q: "پولی است؟", a: "خیر — رایگان، بدون ثبت‌نام." }
    ],
  },
  tlh: {
    appName: "k8size",
    tipsLabel: "qaghmey:",
    benefitsTitle: "qatlh k8size lo'",
    benefits: [
      "<strong>ghuH, 'ej yo', QoS.</strong> 1000 'ay'mey Mi/Gi; ?cpu=&mem= yIqaw; wa' QoS yIlegh.",
      "<strong>cores ↔ millicores.</strong> cores decimal pagh millicores ngugh yIghItlh 'ej cha' Dochmey <code>cpu: \"500m\"</code> je yIlegh.",
      "<strong>qawHaq binary vs decimal.</strong> Mi/Gi (1024) M/G/MB/GB (1000) je yIpIm — 256Mi 256M 'oHbe'.",
      "<strong>YAML Hol.</strong> requests limits jevaD <code>cpu</code> <code>memory</code> je yIlan.",
      "<strong>requests vs limits tip.</strong> Guaranteed QoS yIqaw — sizing ghojwI' 'oHbe'.",
      "<strong>laH yoS.</strong> mI'mey: <code>100m</code>, <code>500m</code>, <code>256Mi</code>, <code>1Gi</code>.",
      "<strong>lIjwI'Daq.</strong> API pagh; mI'mey ghun Duj vISoplaHbe'.",
      "<strong>tlhIngan Hol je.</strong> mID pagh; Hoch HolvaD UI SEO je."
    ],
    howTitle: "Kubernetes 'ay'mey choHmeH",
    howSteps: [
      "CPU pagh qawHaq yIpoS.",
      "mI' yIghItlh 'ej 'ay' yIwuq.",
      "ghItlhtaHvIS nIb YAML je yIlegh.",
      "laH yIlo' 'ej Hol yIlan."
    ],
    strongTitle: "'ay'mey, requests, limits je",
    strongLead: "Kubernetes CPU cores pagh millicores (<code>m</code>) ghap, qawHaq binary (Ki/Mi/Gi/Ti) pagh decimal (k/M/G/T) je. nuv'e' mI'mey neH choH.",
    strongTips: [
      "1 core = 1000 millicores; <code>500m</code> = <code>0.5</code>.",
      "Mi/Gi 1024; M/G/MB/GB 1000.",
      "requests Scheduler; limits lo' yuv — pIj requests ≤ limits.",
      "requests = limits CPU qawHaq je → Guaranteed QoS.",
      "ghomDaq 'ay' Hol yIchu'Ha'Qo' — Mi M je yIpIm.",
      "workload sizing ghojwI' 'oHbe'."
    ],
    usesTitle: "nuqvaD",
    uses: [
      "Deployment choHpa' millicores cores je yIDoy';",
      "chart manifest je leghtaHvIS Mi M je yIpIm;",
      "requests/limits YAML Hol;",
      "binary decimal suffix pIm yIghoj;",
      "review incident jeDaq yIDoy' nom."
    ],
    faqTitle: "FAQ",
    faq: [
      { q: "CPU m nuq?", a: "millicores: 1000m = wa' core. 0.5 = 500m." },
      { q: "Mi = M pagh MB?", a: "ghobe'. Mi = 1024²; M/MB = 1000²." },
      { q: "mI'mey QoymoHlu'?", a: "ghobe'. lIjwI'Daq neH." },
      { q: "requests QaQ?", a: "ghobe'. 'ay' choH tip je neH." },
      { q: "CPU YAML 'Iv?", a: "<code>500m</code> <code>0.5</code> je QaQ; yIchu'." },
      { q: "KB/MB/GB?", a: "HIja'. 1000 alias K/M/G/T je." },
      { q: "Ti T je?", a: "Ti = 1024⁴; T/TB = 1000⁴." },
      { q: "Guaranteed QoS poQ?", a: "ghobe'. requests = limits 'e' QoS." },
      { q: "manifest choHwI' naQ?", a: "ghobe'. 'ay' YAML je neH." },
      { q: "Huch?", a: "ghobe' — tlheghbe', mIDbe'." }
    ],
  },
};

export const SEO_COPY: Record<Locale, SeoCopy> = localeRecord((locale) => ({
  title: titles[locale],
  description: descriptions[locale],
  heading: headings[locale],
  leadHtml: leads[locale],
  ...bodies[locale],
}));
