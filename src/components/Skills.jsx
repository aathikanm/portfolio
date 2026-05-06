import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    title: 'Languages',
    color: 'var(--accent)',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'C / C++', level: 80 },
      { name: 'Java', level: 72 },
    ]
  },
  {
    title: 'AI & ML',
    color: 'var(--coral)',
    skills: [
      { name: 'TensorFlow / Keras', level: 90 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'CNN / DenseNet', level: 85 },
      { name: 'NLP / Transformers', level: 75 },
    ]
  },
  {
    title: 'Web & Full Stack',
    color: 'var(--blue)',
    skills: [
      { name: 'ReactJS', level: 88 },
      { name: 'Node.js / Express', level: 84 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST API Design', level: 86 },
    ]
  },
]

const tags = [
  'Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab',
  'SDLC', 'Agile', 'CI/CD', 'MySQL', 'DSA', 'OOP',
  'Computer Networks', 'OS', 'DBMS', 'LeetCode 283+', 'SkillRack 7800+',
  'IEEE Member', 'NPTEL', 'edX', 'IIT Bombay Certified',
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--cream)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text3)' }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 2,
          background: color,
          width: animate ? `${level}%` : '0%',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimate(true); obs.disconnect() }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 8vw, 6rem)', background: 'var(--bg2)' }}>
      <div ref={ref}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
            letterSpacing: '0.15em', textTransform: 'uppercase' }}>02 / Skills</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          letterSpacing: '-0.04em', color: 'var(--cream)', marginBottom: '3rem' }}>
          Technical Arsenal
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {skillGroups.map(group => (
            <div key={group.title}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: group.color,
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem',
                display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 20, height: 1, background: group.color, display: 'inline-block' }} />
                {group.title}
              </div>
              {group.skills.map(s => (
                <SkillBar key={s.name} {...s} color={group.color} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)',
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Also familiar with
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '5px 12px',
                border: '1px solid var(--border)', color: 'var(--text2)',
                borderRadius: '2px', letterSpacing: '0.04em', transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text2)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
