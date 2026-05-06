import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current?.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 8vw, 6rem)' }}>
      <style>{`
        .about-grid { opacity: 0; transform: translateY(32px); transition: all 0.8s ease; }
        .about-grid.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="about-grid" ref={ref}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
            letterSpacing: '0.15em', textTransform: 'uppercase' }}>01 / About</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.04em', color: 'var(--cream)', lineHeight: 1, marginBottom: '1.5rem' }}>
              Building things<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--text2)' }}>
                that matter.
              </span>
            </h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              I'm a final-year IT undergrad at Sri Sairam Engineering College, Chennai — with a CGPA of 9.55 and a passion for building AI-driven systems that solve real problems.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
              From deep learning models that detect diabetes non-invasively, to full-stack platforms serving hundreds of users — I turn ideas into production-ready software. I'm IEEE Vice Chair, hackathon winner, and IEEE paper author.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:aathikanm@gmail.com"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', padding: '10px 20px',
                  background: 'var(--surface)', border: '1px solid var(--border2)',
                  color: 'var(--cream)', borderRadius: '2px', letterSpacing: '0.06em',
                  display: 'flex', alignItems: 'center', gap: 8, transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border2)'}>
                📧 aathikanm@gmail.com
              </a>
              <a href="tel:+919791088771"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', padding: '10px 20px',
                  background: 'var(--surface)', border: '1px solid var(--border2)',
                  color: 'var(--cream)', borderRadius: '2px', letterSpacing: '0.06em',
                  display: 'flex', alignItems: 'center', gap: 8, transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border2)'}>
                📞 +91 97910 88771
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'CGPA', value: '9.55 / 10', color: 'var(--accent)' },
              { label: 'Institution', value: 'Sri Sairam Engineering College', color: 'var(--cream)' },
              { label: 'Program', value: 'B.Tech — Information Technology', color: 'var(--cream)' },
              { label: 'Year', value: '2023 – Present (Final Year)', color: 'var(--cream)' },
              { label: 'Location', value: 'Chennai, Tamil Nadu', color: 'var(--cream)' },
              { label: 'IEEE Roles', value: 'Vice Chair, CS Branch · HKN Website Lead', color: 'var(--blue)' },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                padding: '14px 0', borderBottom: '1px solid var(--border)', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color, textAlign: 'right', fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
