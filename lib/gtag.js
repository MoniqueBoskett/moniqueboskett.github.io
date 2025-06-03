// lib/gtag.js
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// Log a pageview for the given URL
export const pageview = (url) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

// (Optional) Custom event helper
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
