import { useEffect } from "react";

/**
 * Simple toast/alert component.
 * Props:
 * - open: boolean
 * - onClose: function
 * - message: string
 * - variant: "default" | "success" | "error"
 * - duration: ms (default 2200)
 */
export default function Toast({ open, onClose, message = "", variant = "default", duration = 2200 }) {
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(id);
  }, [open, onClose, duration]);

  if (!open) return null;

  const cls =
    variant === "success"
      ? "toast toast-success"
      : variant === "error"
      ? "toast toast-error"
      : "toast";

  return (
    <div role="status" aria-live="polite" className={cls}>
      <span>{message}</span>
      <button className="btn btn-ghost" onClick={onClose} aria-label="Close toast">
        &#215;
      </button>
    </div>
  );
}
