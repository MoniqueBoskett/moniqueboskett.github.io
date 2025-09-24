export function CardSkeleton() {
  return (
    <div className="card" style={{ padding: "1rem" }}>
      <div className="skeleton skel-rect" />
      <div className="skeleton skel-title" />
      <div className="skeleton skel-text" />
      <div className="skeleton skel-text" style={{ width: "80%" }} />
    </div>
  );
}

export function TextSkeleton({ lines = 3 }) {
  const items = Array.from({ length: lines });
  return (
    <div>
      <div className="skeleton skel-title" />
      {items.map((_, i) => (
        <div key={i} className="skeleton skel-text" style={{ width: i % 3 === 0 ? "85%" : "100%" }} />
      ))}
    </div>
  );
}
