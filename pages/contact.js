// pages/contact.js
import BackToTopButton from "../components/BackToTopButton";
import GoogleAnalytics from "../components/GoogleAnalytics";
import MicrosoftClarity from "../components/MicrosoftClarity";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headingStyle, sectionStyle } from "../styles/styles";
import { useId } from "react";

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const msgId = useId();

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Get in Touch 💌</h1>

      <p style={descriptionStyle}>
        Have a question, collaboration idea, or just want to say hello? Fill out the form below and I&apos;ll get back to you!
      </p>

      <div style={centeredWrapper}>
        <form action="https://formspree.io/f/mpwdnlyw" method="POST" style={formCard} noValidate>
          <input type="hidden" name="_redirect" value="https://moniqueboskett.vercel.app/thankyou" />
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />

          <div style={fieldGroup}>
            <label htmlFor={nameId} style={labelStyle}>
              Name <span style={reqMark} aria-hidden="true">*</span>
            </label>
            <div className="field-shell">
              <input id={nameId} type="text" name="name" required placeholder="Your full name" className="contact-input" />
            </div>
          </div>

          <div style={fieldGroup}>
            <label htmlFor={emailId} style={labelStyle}>
              Email <span style={reqMark} aria-hidden="true">*</span>
            </label>
            <div className="field-shell">
              <input id={emailId} type="email" name="email" required inputMode="email" placeholder="you@example.com" className="contact-input" />
            </div>
          </div>

          <div style={fieldGroup}>
            <label htmlFor={msgId} style={labelStyle}>
              Message <span style={reqMark} aria-hidden="true">*</span>
            </label>
            <div className="field-shell">
              <textarea id={msgId} name="message" rows={6} required placeholder="Write your message here…" className="contact-input" />
            </div>
          </div>

          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>

      <BackToTopButton />
      <GoogleAnalytics />
      <Analytics />
      <MicrosoftClarity />
      <SpeedInsights />

      <style jsx>{`
        .field-shell {
          background: #eee8f0;
          padding: 8px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .field-shell:focus-within { outline: 2px solid var(--accent); outline-offset: 2px; }

        .contact-input {
          display: block; width: 100%;
          background: #fbf8fc; color: var(--text);
          border: none; border-radius: 8px;
          padding: 0.75rem 0.9rem; line-height: 1.4; box-sizing: border-box;
        }
        .contact-input::placeholder { color: var(--muted-text); opacity: 0.9; }

        .contact-submit {
          width: 100%; margin-top: 0.5rem; padding: 0.8rem 1.2rem;
          border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; cursor: pointer;
          background: var(--accent); color: var(--accent-contrast); box-shadow: var(--shadow-1);
        }
        .contact-submit:hover { filter: brightness(1.03); }
        .contact-submit:active { filter: brightness(0.98); }
      `}</style>
    </section>
  );
}

/* Styles (no fontFamily) */
const centeredWrapper = { display: "flex", justifyContent: "center", width: "100%", padding: "0 1rem", boxSizing: "border-box" };
const descriptionStyle = { maxWidth: "640px", width: "100%", textAlign: "center", marginBottom: "1.75rem", fontSize: "1.1rem", padding: "0 1rem", marginLeft: "auto", marginRight: "auto", color: "var(--text)" };
const formCard = { backgroundColor: "var(--card)", color: "var(--card-text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem", maxWidth: "560px", width: "100%", boxSizing: "border-box", boxShadow: "var(--shadow-1)" };
const fieldGroup = { marginBottom: "1rem" };
const labelStyle = { fontWeight: 700, display: "block", marginBottom: "0.35rem", color: "var(--card-text)" };
const reqMark = { color: "var(--muted-text)", fontWeight: 700 };
