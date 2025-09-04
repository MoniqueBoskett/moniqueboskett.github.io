// components/SuggestRecipeForm.js
import { useMemo, useState } from 'react';

const COLORS = {
  card: '#eee8f0',
  accent: '#dcc0e5',
  text: '#413b42'
};

export default function SuggestRecipeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const formAction = 'https://formspree.io/f/mpwdnlyw';

  // Capture current page for context in submissions
  const pageContext = useMemo(() => {
    try {
      return typeof window !== 'undefined' ? window.location.href : '';
    } catch {
      return '';
    }
  }, []);

  const onSubmit = (e) => {
    // Basic client-side check to reduce noisy submissions
    const form = e.currentTarget;
    const name = form.elements.name?.value?.trim();
    const email = form.elements.email?.value?.trim();
    const idea = form.elements.idea?.value?.trim();
    const notes = form.elements.notes?.value?.trim();
    const botField = form.elements._gotcha?.value;

    if (botField) {
      // Honeypot caught a bot; cancel submit silently
      e.preventDefault();
      return;
    }

    if (!name || !email || !idea) {
      e.preventDefault();
      setStatus('Please complete the required fields.');
      return;
    }

    setStatus('');
    setSubmitting(true);

    // Optional: analytics event
    try {
      window.va?.track?.('form_submit', { form: 'suggest_recipe', idea, page: pageContext });
    } catch {}
  };

  return (
    <form
      action={formAction}
      method="POST"
      onSubmit={onSubmit}
      style={formStyle}
      aria-describedby="suggest-recipe-status"
    >
      <h2 style={{ marginTop: 0, textAlign: 'center', color: COLORS.text }}>Suggest a Recipe</h2>

      {/* Honeypot (hidden from users, visible to bots) */}
      <div style={honeypotStyle} aria-hidden="true">
        <label>
          Do not fill this out:
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Include page context */}
      <input type="hidden" name="page" value={pageContext} />
      {/* Redirect to custom thank-you page */}
      <input type="hidden" name="_redirect" value="/thank-you" />
      {/* Optional: custom subject in Formspree inbox */}
      <input type="hidden" name="_subject" value="New Recipe Suggestion" />

      <label htmlFor="sr-name" style={labelStyle}>
        Your name
        <input id="sr-name" type="text" name="name" required style={inputStyle} />
      </label>

      <label htmlFor="sr-email" style={labelStyle}>
        Email
        <input
          id="sr-email"
          type="email"
          name="email"
          required
          inputMode="email"
          style={inputStyle}
          placeholder="you@example.com"
        />
      </label>

      <label htmlFor="sr-idea" style={labelStyle}>
        Recipe idea or link
        <input
          id="sr-idea"
          type="text"
          name="idea"
          required
          style={inputStyle}
          placeholder="e.g., Taco casserole, or paste a link"
        />
      </label>

      <label htmlFor="sr-notes" style={labelStyle}>
        Notes (optional)
        <textarea id="sr-notes" name="notes" rows={4} style={inputStyle} placeholder="Add details, dietary notes, etc." />
      </label>

      <div
        id="suggest-recipe-status"
        aria-live="polite"
        style={{ minHeight: 20, marginBottom: 8, color: status ? '#b00020' : 'transparent' }}
      >
        {status || '.'}
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={submitBtnStyle(submitting)}
        aria-disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Send suggestion'}
      </button>

      <p style={finePrintStyle}>
        By submitting, you agree that I can contact you about your suggestion.
      </p>
    </form>
  );
}

/* ---- Styles ---- */

const formStyle = {
  background: '#eee8f0',
  borderRadius: '12px',
  padding: '1rem',
  maxWidth: 640,
  margin: '2.5rem auto 0',
  color: '#413b42',
  fontFamily: 'Fira Sans'
};

const honeypotStyle = {
  position: 'absolute',
  left: '-9999px',
  width: 1,
  height: 1,
  overflow: 'hidden'
};

const labelStyle = { display: 'block', marginBottom: 8 };

const inputStyle = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  marginTop: 6,
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  background: '#fff',
  color: '#413b42',
  boxSizing: 'border-box'
};

const submitBtnStyle = (disabled) => ({
  background: disabled ? '#e3d6ea' : '#dcc0e5',
  color: '#413b42',
  border: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontWeight: 700,
  width: '100%'
});

const finePrintStyle = {
  marginTop: 10,
  fontSize: '0.85rem',
  opacity: 0.8
};
