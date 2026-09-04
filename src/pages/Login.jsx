import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import bintang1 from '../assets/bintang_1.png'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { user, loading, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const from = location.state?.from?.pathname || '/dashboard'

  // Sudah login? langsung lempar ke dashboard, jangan tampilkan form lagi
  if (!loading && user) {
    return <Navigate to={from} replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Email dan kata sandi wajib diisi.')
      return
    }

    setSubmitting(true)

    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      console.error(err)
      setError('Email atau kata sandi salah. Coba lagi ya.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <img
            src={bintang1}
            className="login-brand__deco login-brand__deco--1"
            alt=""
            aria-hidden="true"
          />

          <img
            src={bintang1}
            className="login-brand__deco login-brand__deco--2"
            alt=""
            aria-hidden="true"
          />

          <img src={logo} alt="Logo Rainbow Kids" className="login-brand__logo" />

          <h1>BIMBA Rainbow Kids</h1>
          <p>Sidomakmur</p>

          <span className="login-brand__tag">Portal Guru & Admin</span>
        </div>

        <div className="login-form-wrap">
          <a href="/" className="login-back">
            ← Kembali ke halaman utama
          </a>

          <h2>Masuk ke Akun</h2>
          <p className="login-sub">
            Khusus untuk guru dan admin Rainbow Kids Sidomakmur.
          </p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label className="login-field">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@rainbowkids.id"
                autoComplete="username"
              />
            </label>

            <label className="login-field">
              <span>Kata Sandi</span>
              <div className="login-field__password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={
                    showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'
                  }
                >
                  {showPassword ? 'Sembunyikan' : 'Lihat'}
                </button>
              </div>
            </label>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit" disabled={submitting}>
              {submitting ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          <p className="login-help">
            Lupa kata sandi atau belum punya akun? Hubungi admin sekolah.
          </p>
        </div>
      </div>
    </div>
  )
}
