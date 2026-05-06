const achievements = [
  { icon: '🏆', title: 'Sairam Hackathon 2025 Winner', sub: 'C3 iTech AI Internship — 1st Place', color: 'var(--accent)' },
  { icon: '🥇', title: 'Innovathon First Prize', sub: 'Sairam Pitch Fest 2026', color: 'var(--coral)' },
  { icon: '📄', title: 'IEEE Research Paper', sub: 'AgriSync Smart Agriculture Platform — Published', color: 'var(--blue)' },
  { icon: '🎯', title: 'LeetCode — 283+ Problems', sub: 'Data Structures & Algorithms', color: 'var(--accent)' },
  { icon: '⚡', title: 'SkillRack — 7800+ Points', sub: 'Competitive Programming', color: 'var(--purple)' },
  { icon: '🏅', title: 'Multiple Paper Presentation Wins', sub: 'Inter-College Technical Events', color: 'var(--coral)' },
  { icon: '🎓', title: 'Certifications', sub: 'NPTEL · edX · Udemy · IIT Bombay', color: 'var(--blue)' },
  { icon: '🏛️', title: 'Youth Parliament', sub: 'Selected — District Level NSS', color: 'var(--purple)' },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 8vw, 6rem)' }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase' }}>05 / Achievements</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        letterSpacing: '-0.04em', color: 'var(--cream)', marginBottom: '3rem' }}>
        Recognition & Awards
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1px',
        border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
        {achievements.map((a, i) => (
          <div key={i}
            style={{ padding: '1.75rem', background: 'var(--surface)', cursor: 'default',
              transition: 'background 0.25s', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem', lineHeight: 1 }}>{a.icon}</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem',
              color: 'var(--cream)', marginBottom: 4, letterSpacing: '-0.01em' }}>{a.title}</h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)',
              letterSpacing: '0.04em', lineHeight: 1.5 }}>{a.sub}</p>
            <div style={{ marginTop: '1rem', width: 24, height: 2, background: a.color, borderRadius: 1 }} />
          </div>
        ))}
      </div>

      {/* Coding profiles */}
      <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: 'LeetCode', url: 'https://leetcode.com/u/aathikanm', stat: '283+ problems', color: 'var(--accent)' },
          { label: 'SkillRack', url: 'http://www.skillrack.com/profile/442264/45862c677252f3c49bc25f9158968af9f150f2b5', stat: '7800+ points', color: 'var(--coral)' },
        ].map(p => (
          <a key={p.label} href={p.url} target="_blank" rel="noreferrer"
            style={{ flex: 1, minWidth: 220, padding: '1.5rem',
              background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px',
              display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = p.color}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: p.color,
              letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.label}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem',
              color: 'var(--cream)', letterSpacing: '-0.03em' }}>{p.stat}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text3)' }}>
              {p.url.replace('https://', '')} ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
