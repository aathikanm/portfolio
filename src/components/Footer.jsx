export default function Footer() {
  return (
    <footer style={{ padding: '2rem clamp(1.5rem, 8vw, 6rem)', borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', letterSpacing: '0.06em' }}>
        © 2025 Aathika N M · Built with React + Vite
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)', letterSpacing: '0.06em' }}>
        Designed for placement · Chennai, India
      </span>
    </footer>
  )
}
