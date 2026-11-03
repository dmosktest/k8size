# k8size

Browser-only converter for Kubernetes resource units: CPU cores ↔ millicores (`m`) and memory (Ki/Mi/Gi/Ti, K/M/G/T, KB/MB/GB/TB, bytes). Live equivalents, YAML snippets (`cpu: "500m"`, `memory: "256Mi"`), example fill buttons, and a short requests vs limits tip — not a sizing advisor and not a full manifest editor.

**License:** MIT (copyright dmosk)  
**Live (prod):** https://k8size.dmosk.net/

## Stack

Vite + TypeScript + vanilla UI, static nginx in production. No backend API; conversion never leaves the browser.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Note

This GitHub tree is a public mirror of application source. Docker/Compose/stand config live in the private monorepo. Brand link: [dmosk.net](https://dmosk.net/).
