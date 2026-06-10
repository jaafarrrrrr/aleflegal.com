/**
 * Alef "Get started" submission worker (Cloudflare Workers).
 *
 * Receives a JSON POST from the website form and records every submission as a
 * GitHub issue, so you can retrieve and search leads in GitHub (and later sync
 * them to Notion). Keep leads PRIVATE: point LEADS_REPO at a PRIVATE repo, not
 * the public site repo.
 *
 * Required secret/var (set in the Cloudflare dashboard or wrangler):
 *   GITHUB_TOKEN   fine-grained PAT with "Issues: Read and write" on LEADS_REPO
 *   LEADS_REPO     e.g. "jaafarrrrrr/aleflegal-leads"  (a PRIVATE repo)
 *   ALLOWED_ORIGIN e.g. "https://alef.legal"           (optional, defaults to *)
 */
export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin'
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: cors });
    }

    let d;
    try { d = await request.json(); } catch (e) {
      return json({ ok: false, error: 'invalid json' }, 400, cors);
    }

    // Honeypot: silently accept and drop obvious bots.
    if (d.company) return json({ ok: true }, 200, cors);

    const clean = (v) => String(v == null ? '' : v).slice(0, 600).replace(/[<>]/g, '');
    const name = clean(d.name);
    const email = clean(d.email);
    const role = clean(d.role);
    const practice = clean(d.practice);
    const contracts = clean(d.contracts);
    const filings = clean(d.filings);
    const page = clean(d.page);

    if (!name || !email) return json({ ok: false, error: 'name and email required' }, 400, cors);

    const repo = env.LEADS_REPO;
    if (!repo || !env.GITHUB_TOKEN) {
      return json({ ok: false, error: 'worker not configured' }, 500, cors);
    }

    const title = 'Lead: ' + name + (practice ? ' (' + practice + ')' : '');
    const lines = [
      '**Name:** ' + name,
      '**Role:** ' + role,
      '**Email:** ' + email,
      '**Interested in:** ' + practice,
      contracts ? '**Contracts/month:** ' + contracts : '',
      filings ? '**Filings:** ' + filings : '',
      page ? '**From page:** ' + page : '',
      '',
      '_Submitted ' + new Date().toISOString() + ' via alef.legal_'
    ].filter(Boolean);

    const labels = ['lead'];
    if (/compliance/i.test(practice)) labels.push('compliance');
    if (/legal/i.test(practice)) labels.push('legal');

    const res = await fetch('https://api.github.com/repos/' + repo + '/issues', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + env.GITHUB_TOKEN,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'alef-submission-worker',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title, body: lines.join('\n'), labels: labels })
    });

    if (!res.ok) {
      const txt = await res.text();
      return json({ ok: false, error: 'github ' + res.status + ': ' + txt.slice(0, 200) }, 502, cors);
    }

    const issue = await res.json();
    return json({ ok: true, url: issue.html_url }, 200, cors);
  }
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status: status,
    headers: Object.assign({ 'Content-Type': 'application/json' }, cors)
  });
}
