import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const SECTION_LINKS = [
  ['#tentang', 'Tentang'],
  ['#keunggulan', 'Keunggulan'],
  ['#program', 'Program'],
  ['#galeri', 'Galeri'],
  ['#kontak', 'Kontak'],
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#top')
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  const linksRef = useRef(null)
  const itemRefs = useRef({})
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  // Scroll-spy hanya relevan di halaman Beranda (yang punya section id).
  useEffect(() => {
    if (!isHome) return

    const ids = SECTION_LINKS.map(([href]) => href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    if (!sections.length) return

    function onScroll() {
      const anchor = window.scrollY + 160
      let current = null

      for (const section of sections) {
        if (section.offsetTop <= anchor) {
          current = section.id
        }
      }

      setActiveHref(current ? `#${current}` : '#top')
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [isHome])

  useEffect(() => {
    function updateIndicator() {
      const container = linksRef.current
      const el = itemRefs.current[activeHref]

      if (!container || !el || !isHome) {
        setIndicator((prev) => ({ ...prev, opacity: 0 }))
        return
      }

      const containerBox = container.getBoundingClientRect()
      const elBox = el.getBoundingClientRect()

      setIndicator({
        left: elBox.left - containerBox.left,
        width: elBox.width,
        opacity: 1,
      })
    }

    updateIndicator()

    window.addEventListener('resize', updateIndicator)

    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeHref, open, isHome])

  function handleLogoClick(e) {
    e.preventDefault()
    setOpen(false)

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  function handleSectionClick(e, href) {
    setOpen(false)

    if (isHome) return // biarkan anchor scroll bawaan browser

    // Dari halaman lain: pindah ke Beranda dulu, baru scroll ke section.
    e.preventDefault()
    navigate('/', { state: { scrollTo: href.slice(1) } })
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="/" className="nav__brand" onClick={handleLogoClick}>
          <img src={logo} alt="Logo Rainbow Kids" className="nav__logo" />

          <span className="nav__brandtext">
            BIMBA Rainbow Kids
            <small>Sidomakmur</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} ref={linksRef}>
          <span
            className="nav__indicator"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
            aria-hidden="true"
          />

          {SECTION_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={isHome ? href : `/${href}`}
              ref={(el) => {
                itemRefs.current[href] = el
              }}
              className={isHome && activeHref === href ? 'is-active' : ''}
              onClick={(e) => handleSectionClick(e, href)}
            >
              {label}
            </a>
          ))}

          <Link
            to="/kalender-libur"
            className={location.pathname === '/kalender-libur' ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            Info & Kalender
          </Link>

          <Link to="/login" className="nav__loginlink" onClick={() => setOpen(false)}>
            Masuk
          </Link>
        </nav>

        <button
          className="nav__burger"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
