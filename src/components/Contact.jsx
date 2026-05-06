export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 8vw, 6rem)', background: 'var(--bg2)' }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase' }}>06 / Contact</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <div style={{ maxWidth: 760 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          letterSpacing: '-0.05em', color: 'var(--cream)', lineHeight: 1, marginBottom: '1.5rem' }}>
          Let's work<br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
            color: 'var(--accent)' }}>together.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-display)', color: 'var(--text2)', fontSize: '1.1rem',
          lineHeight: 1.7, maxWidth: 500, marginBottom: '3rem' }}>
          I'm actively seeking placement opportunities in AI/ML engineering and full-stack development.
          If you think I'd be a great fit, let's talk.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 480 }}>
          {[
            { label: 'Email', value: 'aathikanm@gmail.com', href: 'mailto:aathikanm@gmail.com', color: 'var(--accent)' },
            { label: 'Phone', value: '+91 97910 88771', href: 'tel:+919791088771', color: 'var(--blue)' },
            { label: 'GitHub', value: 'github.com/aathikanm', href: 'https://github.com/aathikanm', color: 'var(--coral)' },
            { label: 'LinkedIn', value: 'linkedin.com/in/aathikanm', href: 'https://www.linkedin.com/in/aathika-n-m-558418285/', color: 'var(--purple)' },
          ].map(({ label, value, href, color }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.25rem', background: 'var(--surface)',
                border: '1px solid var(--border)', borderRadius: '4px', transition: 'all 0.25s',
                textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateX(6px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)',
                letterSpacing: '0.1em', textTransform: 'uppercase', width: 80 }}>{label}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--cream)',
                fontWeight: 500 }}>{value}</span>
              <span style={{ color, fontSize: '1rem' }}>→</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--surface)',
          border: '1px solid var(--accent)', borderRadius: '4px',
          backgroundImage: 'radial-gradient(ellipse at top right, rgba(200,240,100,0.05), transparent 60%)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Open to Opportunities
          </p>
          <p style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: '1rem', lineHeight: 1.7 }}>
            Looking for roles in <strong style={{ color: 'var(--accent)' }}>AI/ML Engineering</strong>,{' '}
            <strong style={{ color: 'var(--blue)' }}>Full Stack Development</strong>, or{' '}
            <strong style={{ color: 'var(--coral)' }}>Software Engineering</strong>.
            Available from June 2026 onward.
          </p>
        </div>
      </div>
    </section>
  )
}
