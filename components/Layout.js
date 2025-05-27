export default function Layout({ children }) {
  return (
    <main style={{ paddingTop: '100px', maxWidth: '1100px', margin: '0 auto' }}>
      {children}
    </main>
  );
}
