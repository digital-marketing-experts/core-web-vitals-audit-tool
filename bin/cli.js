#!/usr/bin/env node

import { auditUrl } from '../lib/cwvAuditor.js';

const targetUrl = process.argv[2] || 'https://digital-marketing-experts.github.io/';

console.log(`\n======================================================`);
console.log(`  🚀 Core Web Vitals & Schema Architecture Auditor`);
console.log(`  Author: Digital Marketing Experts Systems Lab`);
console.log(`======================================================\n`);

async function run() {
  console.log(`🎯 Target URL: ${targetUrl}\n`);
  const result = await auditUrl(targetUrl);
  
  console.log(`📊 Audit Results:`);
  console.log(`  - HTTP Status: ${result.status}`);
  console.log(`  - Server Latency (TTFB): ${result.ttfb} ms [Target: < 200ms]`);
  console.log(`  - Payload Size: ${(result.size / 1024).toFixed(2)} KB`);
  console.log(`  - DOM Element Estimation: ~${result.domEstimate} nodes [Target: < 800]`);
  console.log(`  - Script Tags Count: ${result.scriptCount} [Target: Minimal]`);
  console.log(`  - Connected JSON-LD Schema: ${result.hasSchema ? '✅ FOUND' : '❌ MISSING'}`);
  if (result.hasGraph) {
    console.log(`  - Unified @graph Structure: ✅ VALIDATED`);
  }

  console.log(`\n🏆 Compliance Verdict:`);
  if (result.passed) {
    console.log(`  ✅ EXCELLENT: Meets enterprise Core Web Vitals & crawlability budgets!\n`);
  } else {
    console.log(`  ⚠️ ADVISORY: Review task latency budgets and DOM tree depth.\n`);
  }
}

run().catch(err => {
  console.error(`❌ Audit failed:`, err.message);
  process.exit(1);
});
