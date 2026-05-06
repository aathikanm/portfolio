import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0
    const move = (e) => {
      x = e.clientX; y = e.clientY
      if (dot.current) {
        dot.current.style.left = x + 'px'
        dot.current.style.top = y + 'px'
      }
    }
    const animate = () => {
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top = ry + 'px'
      }
      requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', move)
    animate()

    const links = document.querySelectorAll('a, button, [data-hover]')
    const grow = () => { if (ring.current) ring.current.classList.add('big') }
    const shrink = () => { if (ring.current) ring.current.classList.remove('big') }
    links.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })

    return () => { window.removeEventListener('mousemove', move) }
  }, [])

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed; pointer-events: none; z-index: 9999;
          width: 6px; height: 6px; background: var(--accent);
          border-radius: 50%; transform: translate(-50%, -50%);
          transition: transform 0.1s;
        }
        .cursor-ring {
          position: fixed; pointer-events: none; z-index: 9998;
          width: 32px; height: 32px; border: 1.5px solid var(--accent);
          border-radius: 50%; transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, border-color 0.3s;
          opacity: 0.6;
        }
        .cursor-ring.big { width: 48px; height: 48px; border-color: var(--cream); }
        @media (hover: none) { .cursor-dot, .cursor-ring { display: none; } }
      `}</style>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
