import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 clamp(1.5rem, 5vw, 3rem)',
      height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
          color: 'var(--cream)', letterSpacing: '-0.02em', background: 'none', border: 'none' }}>
        AM<span style={{ color: 'var(--accent)' }}>.</span>
      </button>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        className="nav-desktop">
        {links.map(l => (
          <button key={l} onClick={() => navTo(l)}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text2)',
              letterSpacing: '0.08em', textTransform: 'uppercase', background: 'none', border: 'none',
              transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--cream)'}
            onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
            {l}
          </button>
        ))}
        <a href="mailto:aathikanm@gmail.com"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '6px 16px',
            border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '2px',
            letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#0a0a0a' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}>
          Hire Me
        </a>
      </div>

      {/* Mobile burger */}
      <button onClick={() => setOpen(!open)} className="nav-burger"
        style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none' }}>
        {[0,1,2].map(i => (
          <span key={i} style={{ width: 24, height: 1.5, background: 'var(--cream)', display: 'block',
            transition: 'all 0.3s',
            transform: open ? (i===0 ? 'translateY(6.5px) rotate(45deg)' : i===2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)') : 'none'
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, top: 64, background: 'var(--bg)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2rem', zIndex: 99 }}>
          {links.map(l => (
            <button key={l} onClick={() => navTo(l)}
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700,
                color: 'var(--cream)', background: 'none', border: 'none' }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
