/**
 * stuko.dev /api/subscribe — Cloudflare Worker
 *
 * Adds the submitted email to the Resend "General" audience and sends the
 * published `welcome` template to new subscribers (best effort).
 *
 * Secret required: RESEND_API_KEY (set with:
 *   curl -X PUT ".../workers/scripts/subscribe/secrets"
 *        -F name=RESEND_API_KEY -F type=secret_text -F text=<key>)
 * Route: stuko.dev/api/*  (POST only; same-origin from the portfolio form)
 *
 * The key is never exposed to the browser: it only lives in this Worker.
 */
const AUDIENCE_ID = '2024402d-8e23-472a-b327-75f39e6fc4a6';
const FROM = 'Stuko News <news@stuko.dev>';
const REPLY_TO = 'Alexander Villanueva Porcel <contact@stuko.dev>';
const WELCOME_TEMPLATE = '04d688d8-cd1f-461e-9fe2-2f775aa60407';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request, env) {
    const json = (obj, status = 200) =>
      new Response(JSON.stringify(obj), {
        status,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'no-referrer',
        },
      });

    if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'invalid_json' }, 400);
    }

    const email = String(body?.email ?? '').trim().toLowerCase();
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      return json({ error: 'invalid_email' }, 400);
    }

    // Honeypot: bots fill the hidden field; pretend success and stop here.
    if (body?.website) return json({ ok: true });

    const res = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, audience_id: AUDIENCE_ID }),
    });

    const isNew = res.ok;
    if (!res.ok) {
      const detail = await res.text();
      const already = /exist|duplicate|already/i.test(detail);
      if (!already) return json({ error: 'upstream_error' }, 502);
    }

    if (isNew) {
      // Welcome email, best effort: a failure here never fails the subscription.
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM,
          to: [email],
          reply_to: REPLY_TO,
          template: {
            id: WELCOME_TEMPLATE,
            variables: { greeting: 'Bienvenido, viajero' },
          },
        }),
      }).catch(() => {});
    }

    return json({ ok: true, already: !isNew });
  },
};
