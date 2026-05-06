import { useState, useEffect } from 'react'

const roles = ['AI/ML Engineer', 'Full Stack Developer', 'Problem Solver', 'IEEE Leader']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIdx]
    let i = 0
    if (typing) {
      const t = setInterval(() => {
        setDisplayed(role.slice(0, ++i))
        if (i >= role.length) { clearInterval(t); setTimeout(() => setTyping(false), 1800) }
      }, 60)
      return () => clearInterval(t)
    } else {
      let j = role.length
      const t = setInterval(() => {
        setDisplayed(role.slice(0, --j))
        if (j <= 0) {
          clearInterval(t)
          setRoleIdx((roleIdx + 1) % roles.length)
          setTyping(true)
        }
      }, 35)
      return () => clearInterval(t)
    }
  }, [roleIdx, typing])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        opacity: 0.35,
      }} />

      {/* Glowing orb */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%', width: 400, height: 400,
        borderRadius: '50%', zIndex: 0,
        background: 'radial-gradient(circle, rgba(200,240,100,0.08) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
        {/* Terminal badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          border: '1px solid rgba(200,240,100,0.3)', borderRadius: '2px',
          padding: '6px 14px', marginBottom: '2rem', letterSpacing: '0.1em' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          PROTFOLIO
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(3.5rem, 9vw, 6rem)', lineHeight: 0.92,
          letterSpacing: '-0.04em', color: 'var(--cream)',
          marginBottom: '1.5rem',
        }}>
          Aathika N M<br />
          <span style={{ color: 'var(--text3)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--accent2)', marginBottom: '2rem', minHeight: '2rem', display: 'flex', alignItems: 'center', gap: 2 }}>
          <span>{'>'}</span>
          <span style={{ marginLeft: 10 }}>{displayed}</span>
          <span style={{ width: 2, height: '1.2em', background: 'var(--accent)', display: 'inline-block',
            animation: 'blink 1s step-end infinite' }} />
        </div>

        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: 'var(--text2)', maxWidth: 560, lineHeight: 1.7, marginBottom: '3rem' }}>
          B.Tech IT @ Sri Sairam Engineering College · CGPA 9.55<br />
          Building AI models and scalable web apps that create real-world impact.
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {[['283+', 'LeetCode Problems'], ['7800+', 'SkillRack Points'], ['95%', 'AI Model Accuracy'], ['3', 'MERN Apps Shipped']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--cream)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {n}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>
                {l}
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '12px 28px',
              background: 'var(--accent)', color: '#0a0a0a', border: 'none', borderRadius: '2px',
              fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s' }}
            onMouseEnter={e => e.target.style.background = 'var(--accent2)'}
            onMouseLeave={e => e.target.style.background = 'var(--accent)'}>
            View My Work ↓
          </button>
          <a href="https://github.com/aathikanm" target="_blank" rel="noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '12px 28px',
              border: '1px solid var(--border2)', color: 'var(--cream2)', borderRadius: '2px',
              letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: 8 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cream)'; e.currentTarget.style.color = 'var(--cream)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--cream2)' }}>
            <GithubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/aathikanm" target="_blank" rel="noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '12px 28px',
              border: '1px solid var(--border2)', color: 'var(--cream2)', borderRadius: '2px',
              letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: 8 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--cream2)' }}>
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)',
        letterSpacing: '0.12em', textTransform: 'uppercase', animation: 'float 2s ease-in-out infinite' }}>
        Scroll
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="6.5" y="1" width="3" height="5" rx="1.5" fill="var(--text3)" />
          <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="var(--border2)" />
        </svg>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
