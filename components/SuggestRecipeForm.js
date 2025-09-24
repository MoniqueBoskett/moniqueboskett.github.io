// components/SuggestRecipeForm.js
import { useMemo, useState } from "react";

export default function SuggestRecipeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const formAction = "https://formspree.io/f/mpwdnlyw";

  const pageContext = useMemo(() => {
    try { return typeof window !== "undefined" ? window.location.href : ""; }
    catch { return ""; }
  }, []);

  const onSubmit = (e) => {
    const form = e.currentTarget;
    const name = form.elements.name?.value?.trim();
    const email = form.elements.email?.value?.trim();
    const idea = form.elements.idea?.value?.trim();
    const botField = form.elements._gotcha?.value;

    if (botField) { e.preventDefault(); return; }
    if (!name || !email || !idea) { e.preventDefault(); setStatus("Please complete the required fields."); return; }

    setStatus(""); setSubmitting(true);
    try { window.va?.track?.("form_submit", { form: "suggest_recipe", idea, page: pageContext }); } catch {}
  };

  return (
    <form
      action={formAction}
      method="POST"
      onSubmit={onSubmit}
      style={formStyle}
      aria-describedby="suggest-recipe-status"
    >
      <h2 style={{ marginTop: 0, textAlign: "center", color: "#413b42" }}>Suggest a Recipe</h2>

      {/* Honeypot */}
      <div style={honeypotStyle} aria-hidden="true">
        <label>
          Do not fill this out:
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <input type="hidden" name="page" value={pageContext} />
      <input type="hidden" name="_redirect" value="/thank-you" />
      <input type="hidden" name="_subject" value="New Recipe Suggestion" />

      <label htmlFor="sr-name" style={labelStyle}>
        Your name
        <div style={inputShell}><input id="sr-name" type="text" name="name" required style={inputInner} /></div>
      </label>

      <label htmlFor="sr-email" style={labelStyle}>
        Email
        <div style={inputShell}><input id="sr-email" type="email" name="email" required inputMode="email" style={inputInner} placeholder="you@example.com" /></div>
      </label>

      <label htmlFor="sr-idea" style={labelStyle}>
        Recipe idea or link
        <div style={inputShell}><input id="sr-idea" type="text" name="idea" required style={inputInner} placeholder="e.g., Taco casserole, or paste a link" /></div>
      </label>

      <label htmlFor="sr-notes" style={labelStyle}>
        Notes (optional)
        <div style={inputShell}><textarea id="sr-notes" name="notes" rows={4} style={{ ...inputInner, lineHeight: 1.5, resize: "vertical" }} placeholder="Add details, dietary notes, etc." /></div>
      </label>

      <div id="suggest-recipe-status" aria-live="polite" style={{ minHeight: 20, marginBottom: 8, color: status ? "#b00020" : "transparent" }}>
        {status || "."}
      </div>

      <button type="submit" disabled={submitting} style={submitBtnStyle(submitting)} aria-disabled={submitting}>
        {submitting ? "Sending…" : "Send suggestion"}
      </button>

      <p style={finePrintStyle}>By submitting, you agree that I can contact you about your suggestion.</p>
    </form>
  );
}

/* Styles (no fontFamily) */
const formStyle = { background: "#eee8f0", borderRadius: "12px", padding: "1rem", maxWidth: 640, margin: "2.5rem auto 0", color: "#413b42", border: "1px solid var(--border)", boxShadow: "var(--shadow-1)" };

const honeypotStyle = { position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" };

const labelStyle = { display: "block", marginBottom: 10, fontWeight: 700 };

/* Two-tone fields */
const inputShell = { background: "#eee8f0", padding: "6px", borderRadius: "10px", border: "1px solid var(--border)" };
const inputInner = { width: "100%", background: "#fbf8fc", color: "var(--text)", border: "none", borderRadius: "6px", padding: "0.6rem 0.75rem", fontSize: "1rem", boxSizing: "border-box", outline: "none" };

/* Accent-aware submit */
const submitBtnStyle = (disabled) => ({ background: disabled ? "color-mix(in oklab, var(--accent), #ffffff 35%)" : "var(--accent)", color: "var(--accent-contrast)", border: "none", padding: "0.75rem 1rem", borderRadius: "10px", cursor: disabled ? "not-allowed" : "pointer", fontWeight: 700, width: "100%", boxShadow: "var(--shadow-1)" });

const finePrintStyle = { marginTop: 10, fontSize: "0.85rem", opacity: 0.85 };
