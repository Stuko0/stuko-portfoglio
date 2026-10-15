import { useState } from 'preact/hooks';

interface NewsStrings {
  label: string;
  placeholder: string;
  button: string;
  loading: string;
  success: string;
  error: string;
}

interface Props {
  data: NewsStrings;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function SubscribeForm({ data }: Props) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const submit = async (e: Event) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('err');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), website: honeypot }),
      });
      if (res.ok) {
        setStatus('ok');
        setEmail('');
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  };

  const message =
    status === 'ok' ? data.success : status === 'err' ? data.error : '';

  return (
    <form class="subscribe-form" onSubmit={submit} novalidate>
      <label class="visually-hidden" for="sub-email">
        {data.label}
      </label>
      <input
        id="sub-email"
        class="sub-input"
        type="email"
        name="email"
        required
        autocomplete="email"
        placeholder={data.placeholder}
        value={email}
        onInput={(e) => setEmail((e.currentTarget as HTMLInputElement).value)}
      />
      {/* Honeypot: bots fill it, humans never see it */}
      <input
        class="visually-hidden"
        type="text"
        name="website"
        tabindex={-1}
        autocomplete="off"
        aria-hidden="true"
        value={honeypot}
        onInput={(e) => setHoneypot((e.currentTarget as HTMLInputElement).value)}
      />
      <button type="submit" class="btn-royal subscribe-btn" disabled={status === 'loading'}>
        {status === 'loading' ? data.loading : data.button}
      </button>
      <p class={`subscribe-msg ${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
