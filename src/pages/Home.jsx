import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import balon from '../assets/balon.png'
import bintang1 from '../assets/bintang_1.png'
import bintang2 from '../assets/bintang_2.png'
import fotoBareng from '../assets/foto_bareng.jpg'
import fotoCampuran from '../assets/foto_campuran.jpg'
import iconGroup from '../assets/icon_group.png'
import iconBintang from '../assets/icon_bintang.png'
import iconUang from '../assets/icon_uang.png'
import iconQuran from '../assets/icon_quran.png'
import iconHeart from '../assets/icon_heart.png'
import fotoKidsRainbow from '../assets/foto_kids_rainbow.jpg'
import fotoBelajar from '../assets/foto_belajar.jpg'
import fotowarnain1 from '../assets/gambarbareng.jpeg'
import fotowarnain2 from '../assets/mewarnai.jpeg'
import fotowarnain3 from '../assets/gambar.jpeg'
import fotowarnain4 from '../assets/warnai.jpeg'
import fotosekolah from '../assets/sekolah.jpeg'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import WhatsAppFloat, { WA_NUMBER } from '../components/WhatsAppFloat'
import BackToTop from '../components/BackToTop'
import { Reveal } from '../components/Reveal'
import {
  PinIcon,
  PhoneIcon,
  ClockIcon,
  WhatsAppIcon,
  PencilIcon,
  BookIcon,
  SparkIcon,
} from '../components/icons'

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
    anak: 'Ibu dari Fathan (5 th)',
    pesan:
      'Suasana belajarnya ceria, Fathan selalu semangat berangkat sekolah tiap pagi.',
  },
  {
    nama: 'Pak Yusuf',
    anak: 'Ayah dari Kayla (6 th)',
    pesan:
      'Perkembangan motorik dan bahasa Kayla terasa banget kemajuannya dalam beberapa bulan. Recommended untuk orang tua yang lagi mencari Bimba untuk anaknya!',
  },
]

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

function Hero() {
  return (
    <section
      id="top"
      className="hero"
      style={{
        backgroundImage: `url(${fotoKidsRainbow})`,
      }}
    >
      <div className="hero__overlay" aria-hidden="true" />

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

        <h1>Belajar Ceria, Tumbuh Penuh Warna!</h1>

        <p className="hero__sub">
          Rainbow Kids membimbing si kecil belajar sambil bermain —
          lengkap dengan program{' '}
          <strong>
            Tahfidz Qur&apos;an setiap hari Jumat
          </strong>{' '}
          sebagai bekal akhlak sejak dini.
        </p>
      </div>
    </section>
  )
}

function Tentang() {
  return (
    <section id="tentang" className="section tentang">
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

        <Reveal className="reveal--right" delay={100}>
          <div className="tentang__text">
            <img
              src={logo}
              alt="Logo Rainbow Kids"
              className="tentang__logo"
            />

            <p className="tentang__desc">
              Rainbow Kids adalah BIMBA (Bimbingan Belajar Anak)
              di Sidomakmur yang fokus pada penumbuhan minat
              belajar anak usia 4–6 tahun, bukan sekadar bisa
              baca tulis. Kami percaya anak yang mencintai belajar
              sejak dini akan tumbuh menjadi pribadi yang cerdas,
              percaya diri, mandiri, dan dekat dengan Al-Qur&apos;an
              lewat Tahfidz mingguan.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="tentang__cards">
        <Reveal delay={50}>
          <div className="visi-card">
            <span className="visi-card__tag">Visi</span>

            <p>
              Menjadi tempat belajar pilihan yang membentuk anak
              cerdas, mandiri, dan berakhlak mulia sejak usia dini.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="visi-card">
            <span className="visi-card__tag">Misi</span>

            <p>
              Menghadirkan pembelajaran aktif berbasis bermain,
              membiasakan nilai-nilai Islami lewat Tahfidz mingguan,
              dan menjalin kedekatan erat dengan orang tua.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Keunggulan() {
  return (
    <section id="keunggulan" className="section keunggulan">
      <Reveal className="section__head">
        <h2 className="keunggulan__title">
          Mengapa Pilih <RainbowText text="Rainbow Kids" />?{' '}
          <img
            src={bintang1}
            className="sparkle-img"
            alt=""
            aria-hidden="true"
          />
        </h2>

        <p className="keunggulan__subtitle">
          Belajar seru, tumbuh bahagia, masa depan cerah!
        </p>
      </Reveal>

      <div className="keunggulan__grid">
        {keunggulan.map((k, i) => (
          <Reveal key={k.judul} delay={i * 80}>
            <div
              className={`keunggulan-card ${
                k.judul.includes('Tahfidz')
                  ? 'is-highlight'
                  : ''
              }`}
            >
              <div className="keunggulan-card__media">
                <img src={k.ikon} alt="" aria-hidden="true" />
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

      <Reveal className="benefit__head" delay={100}>
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
          <Reveal key={b.judul} delay={i * 70}>
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

function Program() {
  const programIcons = {
    star: (
      <img src={iconBintang} alt="" aria-hidden="true" />
    ),
    pencil: <PencilIcon />,
    book: <BookIcon />,
  }

  return (
    <section id="program" className="section program">
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
              Program lengkap untuk mendukung tumbuh kembang
              anak dengan cara belajar yang menyenangkan.{' '}
              <img
                src={iconHeart}
                className="program__intro-heart"
                alt=""
                aria-hidden="true"
              />
            </p>

            <div className="program__cards">
              {programList.map((p) => (
                <div key={p.judul} className="program-item">
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

        <Reveal className="reveal--right" delay={100}>
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
                <img src={iconHeart} alt="" aria-hidden="true" />
              </span>

              <div>
                <strong>
                  Belajar dengan Hati, Tumbuh Sepanjang Hati
                </strong>

                <p>
                  Kami percaya setiap anak unik dan berharga.
                  Di Rainbow Kids, mereka belajar, bermain,
                  dan berkembang dengan bahagia.
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
   - Desktop: 4 foto
   - Tablet: 2 foto
   - Mobile: 1 foto
   - Tombol prev/next
   - Dot indikator
   - Tidak membutuhkan library tambahan
========================================================= */

function Galeri() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(4)

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

    window.addEventListener('resize', updateVisible)

    return () => {
      window.removeEventListener('resize', updateVisible)
    }
  }, [])

  const maxIndex = Math.max(0, galeri.length - visible)

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
      transform: `translateX(-${idx * slideWidth}%)`,
      transition:
        'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)',
    },

    slide: {
      flex: `0 0 ${slideWidth}%`,
      width: `${slideWidth}%`,
      boxSizing: 'border-box',
      padding: '0 7px',
    },

    item: {
      position: 'relative',
      width: '100%',
      height: '205px',
      overflow: 'hidden',
      borderRadius: '18px',
      background: '#eee',
      boxShadow: '0 12px 30px rgba(40, 30, 80, 0.10)',
      cursor: 'pointer',
      transition:
        'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
    },

    img: {
      width: '100%',
      height: '100%',
      display: 'block',
      objectFit: 'cover',
      transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
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
      textShadow: '0 2px 5px rgba(0,0,0,.35)',
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
      boxShadow: '0 8px 20px rgba(40,30,80,.10)',
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
    <section id="galeri" className="section galeri">
      <Reveal className="section__head">
        <p className="eyebrow eyebrow--dark">Galeri</p>

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
          Lihat keseruan anak-anak belajar, bermain,
          dan berkarya bersama Rainbow Kids.
        </p>
      </Reveal>

      <div style={carouselStyles.wrapper}>
        <button
          type="button"
          style={carouselStyles.arrow}
          onClick={() => go(-1)}
          aria-label="Foto sebelumnya"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow =
              '0 12px 25px rgba(40,30,80,.16)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(40,30,80,.10)'
          }}
        >
          ‹
        </button>

        <div style={carouselStyles.viewport}>
          <div style={carouselStyles.track}>
            {galeri.map((g, i) => (
              <div
                key={`${g.label}-${i}`}
                style={carouselStyles.slide}
              >
                <div
                  style={carouselStyles.item}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(-6px) scale(1.015)'
                    e.currentTarget.style.boxShadow =
                      '0 20px 40px rgba(40, 30, 80, 0.22)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow =
                      '0 12px 30px rgba(40, 30, 80, 0.10)'
                  }}
                >
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    style={carouselStyles.img}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        'scale(1.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        'scale(1)'
                    }}
                  />

                  <div style={carouselStyles.overlay} />

                  <span style={carouselStyles.caption}>
                    {g.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          style={carouselStyles.arrow}
          onClick={() => go(1)}
          aria-label="Foto berikutnya"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow =
              '0 12px 25px rgba(40,30,80,.16)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(40,30,80,.10)'
          }}
        >
          ›
        </button>
      </div>

      <div style={carouselStyles.dots}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Halaman galeri ${i + 1}`}
            style={{
              width: i === idx ? '24px' : '9px',
              height: '9px',
              padding: 0,
              border: 0,
              borderRadius: '999px',
              background:
                i === idx ? '#ff7060' : '#d2d2d2',
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

function Testimoni() {
  const [idx, setIdx] = useState(0)
  const total = testimoni.length
  const timerRef = useRef(null)

  function go(dir) {
    setIdx((prev) => (prev + dir + total) % total)
  }

  function restartTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % total)
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
    <section id="testimoni" className="testimoni">
      <div className="testimoni__inner">
        <Reveal>
          <h2>Kata Para Orang Tua</h2>

          <p className="testimoni__sub">
            Anak senang belajar, orang tua pun tenang.
          </p>
        </Reveal>

        <div className="testimoni__carousel">
          <button
            className="testimoni__arrow"
            onClick={() => handleManualGo(-1)}
            aria-label="Testimoni sebelumnya"
          >
            ‹
          </button>

          <blockquote className="testi-card" key={idx}>
            <p>
              &ldquo;{testimoni[idx].pesan}&rdquo;
            </p>

            <footer>
              <span className="testi-card__avatar">
                {testimoni[idx].nama
                  .split(' ')
                  .slice(-1)[0][0]}
              </span>

              <span className="testi-card__who">
                <strong>{testimoni[idx].nama}</strong>

                <span>{testimoni[idx].anak}</span>
              </span>
            </footer>
          </blockquote>

          <button
            className="testimoni__arrow"
            onClick={() => handleManualGo(1)}
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
                i === idx ? 'is-active' : ''
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

function Kontak() {
  return (
    <section id="kontak" className="kontak">
      <div className="kontak__inner">
        <h2>Kunjungi Kami</h2>

        <p className="kontak__sub">
          Ayah/Bunda bisa datang langsung untuk lihat
          suasana belajar Rainbow Kids.
        </p>

        <ul className="kontak__list">
          <li>
            <span className="kontak__icon">
              <PinIcon />
            </span>
            Kav.sidomakmur I Rt. 005/03 No. 14. Kel. Kaliabang Tengah. 
            Kec. Bekasi Utara. Kota Bekasi
          </li>

          <li>
            <span className="kontak__icon">
              <PhoneIcon />
            </span>
            0895-1546-0401
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

export default function Home() {
  const location = useLocation()

  // Kalau datang dari halaman lain lewat NavBar (mis. klik "Tentang"
  // saat sedang di /kalender-libur), scroll ke section yang dituju
  // setelah Home selesai render.
  useEffect(() => {
    const targetId = location.state?.scrollTo

    if (!targetId) return

    const el = document.getElementById(targetId)

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    }
  }, [location.state])

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
