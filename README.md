# Core Web Vitals & Schema Architecture Audit Utility

An open-source Node.js CLI utility developed by the **Digital Marketing Experts** systems laboratory for inspecting server response latency (TTFB), DOM node budgets, script bloat, and connected `@graph` JSON-LD structured schemas.

## Features
- **Latency Budget Evaluation**: Measures initial server handshake and Time to First Byte against < 200ms targets.
- **DOM Density Estimation**: Calculates approximate DOM node counts to prevent layout thrashing and high Interaction to Next Paint (INP) latency.
- **Machine-Readable Schema Verification**: Validates whether structured data is pre-rendered in the static payload using connected JSON-LD `@graph` arrays.

## Installation & Usage

```bash
git clone https://github.com/digital-marketing-experts/core-web-vitals-audit-tool.git
cd core-web-vitals-audit-tool
npm install
npm test
```

### Direct CLI Execution
```bash
node bin/cli.js https://digital-marketing-experts.github.io/
```

## Governance
Published by the Systems Architecture Team at [Digital Marketing Experts](https://digital-marketing-experts.github.io/). Conforms to W3C Performance and Chromium runtime standards.
