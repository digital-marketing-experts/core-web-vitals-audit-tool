export async function auditUrl(url) {
  const startTime = Date.now();
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Digital-Marketing-Experts-CWV-Auditor/1.0 (+https://digital-marketing-experts.github.io/)'
    }
  });
  const ttfb = Date.now() - startTime;
  const html = await response.text();
  const size = Buffer.byteLength(html, 'utf8');

  // Parse HTML signals
  const tagMatches = html.match(/<[a-zA-Z][a-zA-Z0-9]*\b[^>]*>/g) || [];
  const domEstimate = Math.round(tagMatches.length / 2);
  const scriptMatches = html.match(/<script\b[^>]*>/gi) || [];
  const scriptCount = scriptMatches.length;

  const hasSchema = /type=["']application\/ld\+json["']/i.test(html);
  const hasGraph = /"@graph"\s*:/i.test(html);

  const passed = ttfb < 500 && domEstimate < 1200 && hasSchema;

  return {
    status: response.status,
    ttfb,
    size,
    domEstimate,
    scriptCount,
    hasSchema,
    hasGraph,
    passed
  };
}
