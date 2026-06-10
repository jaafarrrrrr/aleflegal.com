# Submission tracking (form to GitHub issues)

The "Get started" form posts each submission to a small Cloudflare Worker, which
creates a GitHub issue per lead. You retrieve and search leads in GitHub, and can
later wire a Notion automation off those issues.

Leads contain names and emails (PII), so store them in a **PRIVATE** repo, never
the public site repo.

## One-time setup (about 10 minutes)

1. **Create a private leads repo.** On GitHub, create a new **private** repo, for
   example `aleflegal-leads`. (Tell me and I can create it for you.)

2. **Create a fine-grained token.** GitHub, Settings, Developer settings,
   Fine-grained personal access tokens, Generate new token:
   - Resource owner: your account
   - Repository access: Only select repositories, choose `aleflegal-leads`
   - Permissions: Repository permissions, **Issues: Read and write**
   - Copy the token (starts with `github_pat_...`).

3. **Deploy the Worker.** Easiest path, the Cloudflare dashboard:
   - Workers and Pages, Create, Worker. Name it `alef-submissions`.
   - Replace the starter code with the contents of `submission-worker.js`.
   - Deploy, then in the Worker's Settings, Variables and Secrets add:
     - `GITHUB_TOKEN`  = the fine-grained token (mark as Secret/Encrypt)
     - `LEADS_REPO`    = `jaafarrrrrr/aleflegal-leads`
     - `ALLOWED_ORIGIN` = `https://alef.legal`
   - Copy the Worker URL, for example `https://alef-submissions.<you>.workers.dev`.

   Or with the CLI:
   ```
   npm i -g wrangler
   wrangler deploy worker/submission-worker.js --name alef-submissions
   wrangler secret put GITHUB_TOKEN        # paste the token
   # set LEADS_REPO and ALLOWED_ORIGIN as vars in the dashboard or wrangler.toml
   ```

4. **Point the site at the Worker.** In `assets/app.js`, set:
   ```js
   var SUBMISSION_ENDPOINT = 'https://alef-submissions.<you>.workers.dev';
   ```
   Commit and push. Done.

## Behavior

- With `SUBMISSION_ENDPOINT` set: every submit creates a GitHub issue in the
  private leads repo, labeled `lead` plus `compliance` and/or `legal`.
- If it is empty (default) or the request fails: the form falls back to opening
  the visitor's email client (mailto) so nothing is lost.
- A hidden honeypot field (`company`) drops obvious bots.

## Retrieving leads

- Browse: the Issues tab of the private repo, filter by label.
- API: `GET /repos/jaafarrrrrr/aleflegal-leads/issues?labels=lead`.
- Notion later: Notion's GitHub sync, or a small action that mirrors new issues
  into a Notion database.
