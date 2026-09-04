import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      },
      {
        threshold: 0.15,
      }
    )

    io.observe(el)

    return () => io.disconnect()
  }, [])

  return ref
}

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
