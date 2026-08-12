import { useState, useEffect, useRef } from 'react'

import logo from './assets/logo.png'
import balon from './assets/balon.png'
import bintang1 from './assets/bintang_1.png'
import bintang2 from './assets/bintang_2.png'

import fotoBareng from './assets/foto_bareng.jpg'
import fotoCampuran from './assets/foto_campuran.jpg'
import iconGroup from './assets/icon_group.png'
import iconBintang from './assets/icon_bintang.png'
import iconUang from './assets/icon_uang.png'
import iconQuran from './assets/icon_quran.png'
import iconHeart from './assets/icon_heart.png'

import fotoKidsRainbow from './assets/foto_kids_rainbow.jpg'
import fotoBelajar from './assets/foto_belajar.jpg'

import fotowarnain1 from './assets/gambarbareng.jpeg'
import fotowarnain2 from './assets/mewarnai.jpeg'
import fotowarnain3 from './assets/gambar.jpeg'
import fotowarnain4 from './assets/warnai.jpeg'

import fotosekolah from './assets/sekolah.jpeg'

/* =========================================================
   DATA
========================================================= */

const keunggulan = [
  {
    judul: 'Tahfidz Setiap Jumat',
    desc: 'Hafal surat pendek dengan metode talqin & lagu.',
    ikon: iconQuran,
    deco: iconHeart,
  },
  {
    judul: 'Biaya Terjangkau',
    desc: 'Kualitas terbaik dengan harga bersahabat.',
    ikon: iconUang,
    deco: iconBintang,
  },
  {
    judul: 'Metode Belajar Menyenangkan',
    desc: 'Belajar sambil bermain, tanpa tekanan, tanpa paksaan.',
    ikon: iconBintang,
    deco: iconHeart,
  },
  {
    judul: 'Fokus pada Minat Belajar',
    desc: 'Kenali potensi anak, kembangkan sesuai minatnya.',
    ikon: iconHeart,
    deco: iconBintang,
  },
]

const benefits = [
  {
    judul: 'Anak Lebih Percaya Diri',
    desc: 'Berani tampil & berpendapat.',
    ikon: iconHeart,
    warna: 'pink',
  },
  {
    judul: 'Tumbuh Kreatif & Mandiri',
    desc: 'Kreatif dalam berpikir, mandiri dalam bertindak.',
    ikon: iconBintang,
    warna: 'yellow',
  },
  {
    judul: 'Karakter Islami Terbentuk',
    desc: 'Berakhlak baik, disiplin & menghargai sesama.',
    ikon: iconQuran,
    warna: 'green',
  },
  {
    judul: 'Lingkungan Aman & Nyaman',
    desc: 'Guru profesional dengan kasih sayang.',
    ikon: iconGroup,
    warna: 'blue',
  },
  {
    judul: 'Persiapan Masa Depan',
    desc: 'Bekal ilmu & karakter untuk masa depan cerah.',
    ikon: iconUang,
    warna: 'purple',
  },
]

const rainbowLetterColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
]

const programList = [
  {
    judul: 'Program Reguler',
    desc: 'Motorik, bahasa, dan sosial lewat bermain yang seru setiap hari.',
    warna: 'purple',
    ikon: 'star',
  },
  {
    judul: 'Program Calistung',
    desc: 'Baca, tulis, hitung dengan metode ramah anak.',
    warna: 'green',
    ikon: 'pencil',
  },
  {
    judul: 'Program Tahfidz',
    desc: 'Hafalan surat pendek setiap hari Jumat dengan pendekatan menyenangkan.',
    warna: 'pink',
    ikon: 'book',
  },
]

const testimoni = [
  {
    nama: 'Bu Rina',
    anak: 'Ibu dari Elmeera (5 th)',
    pesan:
      'Elmeera jadi lebih pede dan udah hafal surat pendek dan lancar iqro sejak masuk Rainbow Kids. Gurunya sabar banget!',
  },
  {
    nama: 'Bu Dewi',
    anak: 'Ibu dari Fathan (4 th)',
    pesan:
      'Suasana belajarnya ceria, Fathan selalu semangat berangkat sekolah tiap pagi. Program Jumatnya jadi favorit kami sekeluarga.',
  },
  {
    nama: 'Pak Yusuf',
    anak: 'Ayah dari Naila (6 th)',
    pesan:
      'Perkembangan motorik dan bahasa Naila terasa banget kemajuannya dalam beberapa bulan. Recommended untuk orang tua di Sidomakmur!',
  },
]

/*
=========================================================
GALERI
=========================================================
*/

const galeri = [
  {
    src: fotoBelajar,
    label: 'Kegiatan Belajar',
  },
  {
    src: fotoBareng,
    label: 'Kebersamaan di Rainbow Kids Sidomakmur',
  },
  {
    src: fotowarnain1,
    label: 'Menempel Origami',
  },
  {
    src: fotowarnain2,
    label: 'Menempel Origami Bersama',
  },
  {
    src: fotowarnain3,
    label: 'Menempel Origami Bersama',
  },
  {
    src: fotowarnain4,
    label: 'Menempel Origami Bersama',
  },
  {
    src: fotoBareng,
    label: 'Keceriaan selama pembelajaran',
  },
]

const WA_NUMBER = '62'

/* =========================================================
   RAINBOW TEXT
========================================================= */

function RainbowText({ text }) {
  let i = -1

  return (
    <>
      {text.split('').map((ch, idx) => {
        if (ch === ' ') return ' '

        i += 1

        const color =
          rainbowLetterColors[i % rainbowLetterColors.length]

        return (
          <span
            key={idx}
            className={`rainbow-letter rainbow-letter--${color}`}
          >
            {ch}
          </span>
        )
      })}
    </>
  )
}

/* =========================================================
   ICONS
========================================================= */

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.6 10.8c1.3 2.7 3.5 4.9 6.2 6.2l2-2a1 1 0 0 1 1-.25c1 .33 2.1.5 3.2.5a1 1 0 0 1 1 1V19.5a1 1 0 0 1-1 1C10.5 20.5 3.5 13.5 3.5 5a1 1 0 0 1 1-1H8a1 1 0 0 1 1 1c0 1.1.17 2.2.5 3.2a1 1 0 0 1-.25 1l-2 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M12 7v5l3.2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.02 3C9.4 3 4 8.37 4 15c0 2.31.65 4.48 1.78 6.33L3 29l7.86-2.7A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.63 28 15S22.65 3 16.02 3Z"
        fill="#25D366"
      />

      <path
        d="M21.53 18.22c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        fill="#fff"
      />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20l1-4.2L15.6 5.2a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.2 19 4 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M14 7l3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5v-12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SparkIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2v6M12 16v6M4.2 4.2l4.2 4.2M15.6 15.6l4.2 4.2M2 12h6M16 12h6M4.2 19.8l4.2-4.2M15.6 8.4l4.2-4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* =========================================================
   REVEAL
========================================================= */

function useReveal() {
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

function Reveal({
  children,
  className = '',
  delay = 0,
}) {
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

/* =========================================================
   WHATSAPP FLOAT
========================================================= */

function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
    >
      <WhatsAppIcon size={30} />
    </a>
  )
}

/* =========================================================
   BACK TO TOP
========================================================= */

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`back-to-top ${
        visible ? 'is-visible' : ''
      }`}
      onClick={handleClick}
      aria-label="Kembali ke atas"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M12 5l-6 6M12 5l6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

/* =========================================================
   TOP BAR
========================================================= */

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          +62
        </a>
      </div>
    </div>
  )
}

/* =========================================================
   NAVBAR
========================================================= */

function NavBar() {
  const [open, setOpen] = useState(false)

  const [activeHref, setActiveHref] =
    useState('#top')

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  const linksRef = useRef(null)
  const itemRefs = useRef({})

  const links = [
    ['#tentang', 'Tentang'],
    ['#keunggulan', 'Keunggulan'],
    ['#program', 'Program'],
    ['#galeri', 'Galeri'],
    ['#kontak', 'Kontak'],
  ]

  useEffect(() => {
    const ids = links.map(([href]) =>
      href.slice(1)
    )

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    function onScroll() {
      const anchor = window.scrollY + 160

      let current = null

      for (const section of sections) {
        if (section.offsetTop <= anchor) {
          current = section.id
        }
      }

      setActiveHref(
        current ? `#${current}` : '#top'
      )
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      )

      window.removeEventListener(
        'resize',
        onScroll
      )
    }
  }, [])

  useEffect(() => {
    function updateIndicator() {
      const container = linksRef.current
      const el = itemRefs.current[activeHref]

      if (!container || !el) {
        setIndicator((prev) => ({
          ...prev,
          opacity: 0,
        }))

        return
      }

      const containerBox =
        container.getBoundingClientRect()

      const elBox =
        el.getBoundingClientRect()

      setIndicator({
        left:
          elBox.left - containerBox.left,
        width: elBox.width,
        opacity: 1,
      })
    }

    updateIndicator()

    window.addEventListener(
      'resize',
      updateIndicator
    )

    return () => {
      window.removeEventListener(
        'resize',
        updateIndicator
      )
    }
  }, [activeHref, open])

  function handleLogoClick(e) {
    e.preventDefault()
    window.location.reload()
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__brand"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="Logo Rainbow Kids"
            className="nav__logo"
          />

          <span className="nav__brandtext">
            BIMBA Rainbow Kids
            <small>Sidomakmur</small>
          </span>
        </a>

        <nav
          className={`nav__links ${
            open ? 'is-open' : ''
          }`}
          ref={linksRef}
        >
          <span
            className="nav__indicator"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
            aria-hidden="true"
          />

          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              ref={(el) => {
                itemRefs.current[href] = el
              }}
              className={
                activeHref === href
                  ? 'is-active'
                  : ''
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
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

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section
      id="top"
      className="hero"
      style={{
        backgroundImage: `url(${fotoKidsRainbow})`,
      }}
    >
      <div
        className="hero__overlay"
        aria-hidden="true"
      />

      <img
        src={bintang1}
        className="hero__deco hero__deco--star1"
        alt=""
        aria-hidden="true"
      />

      <img
        src={bintang2}
        className="hero__deco hero__deco--star2"
        alt=""
        aria-hidden="true"
      />

      <img
        src={balon}
        className="hero__deco hero__deco--balon1"
        alt=""
        aria-hidden="true"
      />

      <img
        src={balon}
        className="hero__deco hero__deco--balon2"
        alt=""
        aria-hidden="true"
      />

      <div className="hero__content hero__content--intro">
        <p className="eyebrow eyebrow--onlight">
          BIMBA untuk usia 4–6 tahun · Sidomakmur
        </p>

        <h1>
          Belajar Ceria, Tumbuh Penuh Warna!
        </h1>

        <p className="hero__sub">
          Rainbow Kids membimbing si kecil belajar
          sambil bermain — lengkap dengan program{' '}
          <strong>
            Tahfidz Qur&apos;an setiap hari Jumat
          </strong>{' '}
          sebagai bekal akhlak sejak dini.
        </p>
      </div>
    </section>
  )
}

/* =========================================================
   TENTANG
========================================================= */

function Tentang() {
  return (
    <section
      id="tentang"
      className="section tentang"
    >
      <div className="tentang__grid">
        <Reveal className="reveal--left">
          <div className="photo-frame tentang__photo">
            <img
              src={fotosekolah}
              alt="Kebersamaan anak-anak Rainbow Kids Sidomakmur"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal
          className="reveal--right"
          delay={100}
        >
          <div className="tentang__text">
            <img
              src={logo}
              alt="Logo Rainbow Kids"
              className="tentang__logo"
            />

            <p className="tentang__desc">
              Rainbow Kids adalah BIMBA (Bimbingan
              Belajar Anak) di Sidomakmur yang fokus
              pada penumbuhan minat belajar anak usia
              4–6 tahun, bukan sekadar bisa baca tulis.
              Kami percaya anak yang mencintai belajar
              sejak dini akan tumbuh menjadi pribadi
              yang cerdas, percaya diri, mandiri, dan
              dekat dengan Al-Qur&apos;an lewat Tahfidz
              mingguan.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="tentang__cards">
        <Reveal delay={50}>
          <div className="visi-card">
            <span className="visi-card__tag">
              Visi
            </span>

            <p>
              Menjadi tempat belajar pilihan yang
              membentuk anak cerdas, mandiri, dan
              berakhlak mulia sejak usia dini.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="visi-card">
            <span className="visi-card__tag">
              Misi
            </span>

            <p>
              Menghadirkan pembelajaran aktif berbasis
              bermain, membiasakan nilai-nilai Islami
              lewat Tahfidz mingguan, dan menjalin
              kedekatan erat dengan orang tua.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   KEUNGGULAN
========================================================= */

function Keunggulan() {
  return (
    <section
      id="keunggulan"
      className="section keunggulan"
    >
      <Reveal className="section__head">
        <h2 className="keunggulan__title">
          Mengapa Pilih{' '}
          <RainbowText text="Rainbow Kids" />?{' '}
          <img
            src={bintang1}
            className="sparkle-img"
            alt=""
            aria-hidden="true"
          />
        </h2>

        <p className="keunggulan__subtitle">
          Belajar seru, tumbuh bahagia, masa depan
          cerah!
        </p>
      </Reveal>

      <div className="keunggulan__grid">
        {keunggulan.map((k, i) => (
          <Reveal
            key={k.judul}
            delay={i * 80}
          >
            <div
              className={`keunggulan-card ${
                k.judul.includes('Tahfidz')
                  ? 'is-highlight'
                  : ''
              }`}
            >
              <div className="keunggulan-card__media">
                <img
                  src={k.ikon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <h3>{k.judul}</h3>

              <p>{k.desc}</p>

              <img
                src={k.deco}
                className="keunggulan-card__deco"
                alt=""
                aria-hidden="true"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal
        className="benefit__head"
        delay={100}
      >
        <p className="benefit__title">
          <img
            src={bintang2}
            className="benefit__title-icon"
            alt=""
            aria-hidden="true"
          />

          Benefit untuk Si Kecil & Orang Tua

          <img
            src={bintang2}
            className="benefit__title-icon"
            alt=""
            aria-hidden="true"
          />
        </p>
      </Reveal>

      <div className="benefit__grid">
        {benefits.map((b, i) => (
          <Reveal
            key={b.judul}
            delay={i * 70}
          >
            <div
              className={`benefit-card benefit-card--${b.warna}`}
            >
              <img
                src={b.ikon}
                className="benefit-card__ikon"
                alt=""
                aria-hidden="true"
              />

              <h3>{b.judul}</h3>

              <p>{b.desc}</p>

              <span className="benefit-card__bar" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* =========================================================
   PROGRAM
========================================================= */

function Program() {
  const programIcons = {
    star: (
      <img
        src={iconBintang}
        alt=""
        aria-hidden="true"
      />
    ),

    pencil: <PencilIcon />,

    book: <BookIcon />,
  }

  return (
    <section
      id="program"
      className="section program"
    >
      <div className="program__grid">
        <Reveal className="reveal--left">
          <div className="program__text">
            <p className="eyebrow eyebrow--dark program__badge">
              <SparkIcon size={16} />
              Program Kami
              <SparkIcon size={16} />
            </p>

            <h2 className="program__title">
              Program Pendidikan
              <br />

              <span className="program__title-accent">
                Anak Usia Dini{' '}
                <img
                  src={bintang1}
                  className="program__title-star"
                  alt=""
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="program__intro">
              Program lengkap untuk mendukung tumbuh
              kembang anak dengan cara belajar yang
              menyenangkan.{' '}
              <img
                src={iconHeart}
                className="program__intro-heart"
                alt=""
                aria-hidden="true"
              />
            </p>

            <div className="program__cards">
              {programList.map((p) => (
                <div
                  key={p.judul}
                  className="program-item"
                >
                  <span
                    className={`program-item__icon program-item__icon--${p.warna}`}
                  >
                    {programIcons[p.ikon]}
                  </span>

                  <span className="program-item__text">
                    <strong>{p.judul}</strong>

                    <span>{p.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          className="reveal--right"
          delay={100}
        >
          <div className="program__media">
            <div className="photo-frame program__photo">
              <img
                src={fotoCampuran}
                alt="Suasana belajar di Rainbow Kids"
                loading="lazy"
              />
            </div>

            <div className="program__quote">
              <span className="program__quote-icon">
                <img
                  src={iconHeart}
                  alt=""
                  aria-hidden="true"
                />
              </span>

              <div>
                <strong>
                  Belajar dengan Hati, Tumbuh Sepanjang
                  Hati
                </strong>

                <p>
                  Kami percaya setiap anak unik dan
                  berharga. Di Rainbow Kids, mereka
                  belajar, bermain, dan berkembang
                  dengan bahagia.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   GALERI CAROUSEL
   FIX MOBILE LANDSCAPE
========================================================= */

function Galeri() {
  const [idx, setIdx] = useState(0)

  const [visible, setVisible] =
    useState(4)

  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth <= 600) {
        setVisible(1)
      } else if (window.innerWidth <= 900) {
        setVisible(2)
      } else {
        setVisible(4)
      }
    }

    updateVisible()

    window.addEventListener(
      'resize',
      updateVisible
    )

    return () => {
      window.removeEventListener(
        'resize',
        updateVisible
      )
    }
  }, [])

  const maxIndex = Math.max(
    0,
    galeri.length - visible
  )

  useEffect(() => {
    if (idx > maxIndex) {
      setIdx(maxIndex)
    }
  }, [idx, maxIndex])

  function go(dir) {
    setIdx((prev) => {
      const next = prev + dir

      if (next < 0) {
        return maxIndex
      }

      if (next > maxIndex) {
        return 0
      }

      return next
    })
  }

  const slideWidth = 100 / visible

  /*
  =======================================================
  INI BAGIAN YANG DIPERBAIKI
  =======================================================

  Sebelumnya:

  height: '205px'

  Masalah:
  Saat mobile lebar card mengecil tetapi tingginya
  tetap 205px sehingga rasio gambar berubah.

  Sekarang kita pakai:

  aspectRatio: '16 / 9'

  Jadi:
  - Desktop -> landscape
  - Tablet  -> landscape
  - Mobile  -> tetap landscape
  =======================================================
  */

  const carouselStyles = {
    wrapper: {
      width: 'min(1150px, calc(100% - 70px))',
      margin: '42px auto 0',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
    },

    viewport: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
    },

    track: {
      display: 'flex',
      width: '100%',

      transform: `translateX(-${
        idx * slideWidth
      }%)`,

      transition:
        'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)',
    },

    slide: {
      flex: `0 0 ${slideWidth}%`,
      width: `${slideWidth}%`,
      boxSizing: 'border-box',
      padding: '0 7px',
    },

    /*
    ================================================
    FIX UTAMA
    ================================================
    */

    item: {
      position: 'relative',
      width: '100%',

      /*
      Jangan pakai height fixed lagi.
      */
      aspectRatio: '16 / 9',

      overflow: 'hidden',
      borderRadius: '18px',
      background: '#eee',
      boxShadow:
        '0 12px 30px rgba(40, 30, 80, 0.10)',
      cursor: 'pointer',
    },

    img: {
      width: '100%',
      height: '100%',
      display: 'block',

      /*
      Foto tetap mengisi frame,
      tetapi frame sekarang sudah landscape.
      */
      objectFit: 'cover',

      transition:
        'transform .35s ease',
    },

    overlay: {
      position: 'absolute',
      inset: 0,

      background:
        'linear-gradient(to top, rgba(20, 30, 70, .78), rgba(20, 30, 70, .03) 68%)',

      pointerEvents: 'none',
    },

    caption: {
      position: 'absolute',
      left: '14px',
      right: '14px',
      bottom: '13px',
      color: '#fff',
      fontSize: '13px',
      fontWeight: 700,
      lineHeight: 1.35,
      textShadow:
        '0 2px 5px rgba(0,0,0,.35)',
    },

    arrow: {
      flex: '0 0 auto',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      border: '1px solid #e4e4e4',
      background: '#fff',
      color: '#25326b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '31px',
      lineHeight: 1,
      cursor: 'pointer',
      boxShadow:
        '0 8px 20px rgba(40,30,80,.10)',
      transition:
        'transform .2s ease, box-shadow .2s ease',
      flexShrink: 0,
    },

    dots: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      marginTop: '24px',
    },
  }

  return (
    <section
      id="galeri"
      className="section galeri"
    >
      <Reveal className="section__head">
        <p className="eyebrow eyebrow--dark">
          Galeri
        </p>

        <h2 className="keunggulan__title">
          Momen ceria di{' '}
          <RainbowText text="Rainbow Kids" />
        </h2>

        <p
          style={{
            maxWidth: '650px',
            margin: '12px auto 0',
            textAlign: 'center',
            color: '#777',
            fontSize: '15px',
            lineHeight: 1.7,
          }}
        >
          Lihat keseruan anak-anak belajar,
          bermain, dan berkarya bersama Rainbow Kids.
        </p>
      </Reveal>

      <div style={carouselStyles.wrapper}>
        {/* PREVIOUS */}

        <button
          type="button"
          style={carouselStyles.arrow}
          onClick={() => go(-1)}
          aria-label="Foto sebelumnya"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              'scale(1.08)'

            e.currentTarget.style.boxShadow =
              '0 12px 25px rgba(40,30,80,.16)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              'scale(1)'

            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(40,30,80,.10)'
          }}
        >
          ‹
        </button>

        {/* VIEWPORT */}

        <div style={carouselStyles.viewport}>
          <div style={carouselStyles.track}>
            {galeri.map((g, i) => (
              <div
                key={`${g.label}-${i}`}
                style={carouselStyles.slide}
              >
                <div style={carouselStyles.item}>
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    style={carouselStyles.img}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        'scale(1.06)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        'scale(1)'
                    }}
                  />

                  <div
                    style={
                      carouselStyles.overlay
                    }
                  />

                  <span
                    style={
                      carouselStyles.caption
                    }
                  >
                    {g.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEXT */}

        <button
          type="button"
          style={carouselStyles.arrow}
          onClick={() => go(1)}
          aria-label="Foto berikutnya"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              'scale(1.08)'

            e.currentTarget.style.boxShadow =
              '0 12px 25px rgba(40,30,80,.16)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              'scale(1)'

            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(40,30,80,.10)'
          }}
        >
          ›
        </button>
      </div>

      {/* DOTS */}

      <div style={carouselStyles.dots}>
        {Array.from({
          length: maxIndex + 1,
        }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Halaman galeri ${
              i + 1
            }`}
            style={{
              width:
                i === idx ? '24px' : '9px',
              height: '9px',
              padding: 0,
              border: 0,
              borderRadius: '999px',

              background:
                i === idx
                  ? '#ff7060'
                  : '#d2d2d2',

              cursor: 'pointer',

              transition:
                'width .25s ease, background .25s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}

/* =========================================================
   TESTIMONI
========================================================= */

function Testimoni() {
  const [idx, setIdx] = useState(0)

  const total = testimoni.length

  const timerRef = useRef(null)

  function go(dir) {
    setIdx(
      (prev) =>
        (prev + dir + total) % total
    )
  }

  function restartTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setIdx(
        (prev) => (prev + 1) % total
      )
    }, 5000)
  }

  useEffect(() => {
    restartTimer()

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  function handleManualGo(dir) {
    go(dir)
    restartTimer()
  }

  function handleDot(i) {
    setIdx(i)
    restartTimer()
  }

  return (
    <section
      id="testimoni"
      className="testimoni"
    >
      <div className="testimoni__inner">
        <Reveal>
          <h2>Kata Para Orang Tua</h2>

          <p className="testimoni__sub">
            Anak senang belajar, orang tua pun
            tenang.
          </p>
        </Reveal>

        <div className="testimoni__carousel">
          <button
            className="testimoni__arrow"
            onClick={() =>
              handleManualGo(-1)
            }
            aria-label="Testimoni sebelumnya"
          >
            ‹
          </button>

          <blockquote className="testi-card">
            <p>
              &ldquo;
              {testimoni[idx].pesan}
              &rdquo;
            </p>

            <footer>
              <span className="testi-card__avatar">
                {testimoni[idx].nama
                  .split(' ')
                  .slice(-1)[0][0]}
              </span>

              <span className="testi-card__who">
                <strong>
                  {testimoni[idx].nama}
                </strong>

                <span>
                  {testimoni[idx].anak}
                </span>
              </span>
            </footer>
          </blockquote>

          <button
            className="testimoni__arrow"
            onClick={() =>
              handleManualGo(1)
            }
            aria-label="Testimoni berikutnya"
          >
            ›
          </button>
        </div>

        <div className="testimoni__dots">
          {testimoni.map((t, i) => (
            <button
              key={t.nama}
              className={`testimoni__dot ${
                i === idx
                  ? 'is-active'
                  : ''
              }`}
              onClick={() => handleDot(i)}
              aria-label={`Testimoni ${t.nama}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   KONTAK
========================================================= */

function Kontak() {
  return (
    <section
      id="kontak"
      className="kontak"
    >
      <div className="kontak__inner">
        <h2>Kunjungi Kami</h2>

        <p className="kontak__sub">
          Ayah/Bunda bisa datang langsung untuk
          lihat suasana belajar Rainbow Kids.
        </p>

        <ul className="kontak__list">
          <li>
            <span className="kontak__icon">
              <PinIcon />
            </span>

            Kav.sidomakmur I Rt. 005/03 No. 14.
            Kel. Kaliabang Tengah. Kec. Bekasi
            Utara. Kota Bekasi
          </li>

          <li>
            <span className="kontak__icon">
              <PhoneIcon />
            </span>

            08
          </li>

          <li>
            <span className="kontak__icon">
              <ClockIcon />
            </span>

            Senin–Jumat, 07.30–11.00
          </li>
        </ul>

        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn--cta kontak__wa"
        >
          <WhatsAppIcon size={20} />
          Chat via WhatsApp
        </a>
      </div>
    </section>
  )
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            src={logo}
            alt="Logo Bimba Rainbow Kids"
          />

          <div>
            <strong>Rainbow Kids</strong>
            <span>Sidomakmur</span>
          </div>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} RAINBOW KIDS
          SIDOMAKMUR. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <div className="app">
      <WhatsAppFloat />

      <BackToTop />

      <TopBar />

      <NavBar />

      <Hero />

      <Tentang />

      <Keunggulan />

      <Program />

      <Galeri />

      <Testimoni />

      <Kontak />

      <Footer />
    </div>
  )
}
