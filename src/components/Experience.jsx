const experiences = [
  {
    role: 'AI Intern',
    company: 'Sairam Techno Incubator — Nexthria Health Tech',
    period: 'Jan 2025 – Jun 2025',
    color: 'var(--coral)',
    tag: 'ML / Healthcare AI',
    bullets: [
      'Built DenseNet121 deep learning models for non-invasive diabetes detection achieving ~95% accuracy',
      'Improved early diagnosis efficiency by nearly 30% through model optimization and preprocessing',
      'Collaborated with researchers to validate models on real clinical datasets',
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Maestrominds',
    period: 'Sept 2023 – Aug 2025',
    color: 'var(--blue)',
    tag: 'MERN Stack',
    bullets: [
      'Developed 3 MERN stack applications serving 500+ active users',
      'Designed RESTful APIs improving backend performance by 25%',
      'Built responsive interfaces with ReactJS and integrated auth systems',
      'Worked in Agile environments with version control and CI/CD pipelines',
    ]
  },
  {
    role: 'Website Committee Lead',
    company: 'IEEE Eta Kappa Nu — Nu Eta Chapter',
    period: 'Sept 2025 – Present',
    color: 'var(--purple)',
    tag: 'Leadership',
    bullets: [
      'Managed and improved the chapter website and all digital platforms',
      'Organized technical workshops and outreach programs for student communities',
      'Coordinated with cross-functional teams to enhance student engagement',
    ]
  },
  {
    role: 'Vice Chair',
    company: 'IEEE Computer Society — SEC Student Branch',
    period: 'Sept 2025 – Present',
    color: 'var(--accent)',
    tag: 'Leadership',
    bullets: [
      'Organized hackathons, coding contests, and technical workshops',
      'Encouraged student participation in innovation activities and competitions',
      'Facilitated inclusive collaboration across departments',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 8vw, 6rem)' }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase' }}>03 / Experience</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        letterSpacing: '-0.04em', color: 'var(--cream)', marginBottom: '3rem' }}>
        Work & Leadership
      </h2>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1,
          background: 'linear-gradient(to bottom, var(--accent), var(--border), transparent)',
          display: 'block' }} className="timeline-line" />

        <style>{`.timeline-line { display: none; } @media (min-width: 640px) { .timeline-line { display: block; } }`}</style>

        <div style={{ paddingLeft: 'clamp(0px, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Dot */}
              <div style={{ position: 'absolute', left: 'clamp(-14px, -2.5vw, -13px)', top: 6,
                width: 10, height: 10, borderRadius: '50%', background: exp.color,
                border: '2px solid var(--bg)', boxShadow: `0 0 0 3px ${exp.color}33` }}
                className="timeline-dot" />
              <style>{`.timeline-dot { display: none; } @media (min-width: 640px) { .timeline-dot { display: block; } }`}</style>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '4px', padding: 'clamp(1.25rem, 3vw, 2rem)',
                transition: 'border-color 0.3s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = exp.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: exp.color,
                      letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
                      {exp.tag}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem',
                      color: 'var(--cream)', letterSpacing: '-0.02em' }}>{exp.role}</h3>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text2)',
                      marginTop: 2 }}>{exp.company}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text3)',
                    padding: '4px 10px', border: '1px solid var(--border)', borderRadius: '2px',
                    whiteSpace: 'nowrap' }}>{exp.period}</span>
                </div>

                <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem',
                      color: 'var(--text2)', lineHeight: 1.6 }}>
                      <span style={{ color: exp.color, marginRight: 6 }}>▸</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
