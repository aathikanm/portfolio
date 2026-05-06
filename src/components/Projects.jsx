import { useState } from 'react'

const projects = [
  {
    title: 'AgriSync',
    subtitle: 'AI-Powered Smart Agriculture',
    description: 'Precision agriculture platform integrating ML, IoT, and satellite data. Models for pest detection, seed analysis, and weather prediction.',
    accent: 'var(--accent)',
    stats: [{ v: '92%', l: 'Model Accuracy' }, { v: '60%', l: 'Manual Effort Saved' }],
    tags: ['Python', 'ML', 'IoT', 'Satellite Data', 'Dashboard'],
    highlight: 'IEEE Published',
    icon: '🌾',
  },
  {
    title: 'Diabetic Retinopathy Detector',
    subtitle: 'CNN-Based Retinal Analysis',
    description: 'DenseNet121 deep learning system for retinal image analysis enabling early detection of diabetic retinopathy.',
    accent: 'var(--coral)',
    stats: [{ v: '95%', l: 'Accuracy' }, { v: '35%', l: 'Diagnosis Time Saved' }],
    tags: ['TensorFlow', 'DenseNet121', 'CNN', 'Transfer Learning', 'Augmentation'],
    highlight: 'Healthcare AI',
    icon: '👁️',
  },
  {
    title: 'Phishing Detection System',
    subtitle: 'ML Email & URL Security',
    description: 'Machine learning system to detect phishing emails and malicious URLs, trained on 10,000+ real-world samples.',
    accent: 'var(--blue)',
    stats: [{ v: '96%', l: 'Accuracy' }, { v: '10K+', l: 'Samples Trained' }],
    tags: ['Scikit-learn', 'Logistic Regression', 'Random Forest', 'NLP', 'Cybersecurity'],
    highlight: 'Security AI',
    icon: '🔒',
  },
  {
    title: 'Virtual Jarvis',
    subtitle: 'Voice Automation Assistant',
    description: 'Voice-enabled desktop automation assistant using NLP. Automates 20+ system operations including file handling and reminders.',
    accent: 'var(--purple)',
    stats: [{ v: '20+', l: 'Operations' }, { v: 'RNN + T', l: 'Architecture' }],
    tags: ['Python', 'Speech Recognition', 'NLP', 'RNN', 'Transformer', 'Automation'],
    highlight: 'Voice AI',
    icon: '🤖',
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)', borderRadius: '4px',
        border: `1px solid ${hovered ? project.accent : 'var(--border)'}`,
        padding: '1.75rem', transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        cursor: 'default', position: 'relative', overflow: 'hidden',
      }}>
      {/* Glow on hover */}
      <div style={{
        position: 'absolute', inset: 0, opacity: hovered ? 1 : 0,
        background: `radial-gradient(ellipse at top left, ${project.accent}0a, transparent 60%)`,
        transition: 'opacity 0.4s', pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '2rem', lineHeight: 1 }}>{project.icon}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', padding: '3px 10px',
          border: `1px solid ${project.accent}`, color: project.accent,
          borderRadius: '2px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {project.highlight}
        </span>
      </div>

      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem',
          color: 'var(--cream)', letterSpacing: '-0.02em', marginBottom: 4 }}>{project.title}</h3>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: project.accent,
          letterSpacing: '0.06em', textTransform: 'uppercase' }}>{project.subtitle}</p>
      </div>

      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text2)',
        lineHeight: 1.7, flex: 1 }}>{project.description}</p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {project.stats.map(s => (
          <div key={s.l}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem',
              color: project.accent, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.v}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)',
              letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.5rem',
        borderTop: '1px solid var(--border)' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            padding: '3px 8px', background: 'var(--bg3)', color: 'var(--text3)',
            borderRadius: '2px' }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 8vw, 6rem)', background: 'var(--bg2)' }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase' }}>04 / Projects</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        letterSpacing: '-0.04em', color: 'var(--cream)', marginBottom: '0.5rem' }}>
        What I've Built
      </h2>
      <p style={{ fontFamily: 'var(--font-display)', color: 'var(--text2)', marginBottom: '3rem', fontSize: '1rem' }}>
        AI systems and full-stack apps with real-world impact
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="https://github.com/aathikanm" target="_blank" rel="noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', padding: '12px 28px',
            border: '1px solid var(--border2)', color: 'var(--cream2)', borderRadius: '2px',
            letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-flex',
            alignItems: 'center', gap: 10, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--cream2)' }}>
          View All on GitHub →
        </a>
      </div>
    </section>
  )
}
