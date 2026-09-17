import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import bintang1 from '../assets/bintang_1.png'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { user, loading, login, resetPassword } = useAuth()
  const location = useLocation()

  const [mode, setMode] = useState('login') // 'login' | 'forgot'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [resetEmail, setResetEmail] = useState('')
  const [resetError, setResetError] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const [resetSubmitting, setResetSubmitting] = useState(false)

  const from = location.state?.from?.pathname || '/dashboard'

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
    } catch (err) {
      console.error(err)
      setError('Email atau kata sandi salah. Coba lagi ya.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleReset(e) {
    e.preventDefault()
    setResetError('')

    if (!resetEmail) {
      setResetError('Masukkan email yang terdaftar.')
      return
    }

    setResetSubmitting(true)

    try {
      await resetPassword(resetEmail)
      setResetSent(true)
    } catch (err) {
      console.error(err)
      setResetError('Gagal mengirim link reset. Periksa kembali email Anda.')
    } finally {
      setResetSubmitting(false)
    }
  }

  function switchToForgot() {
    setError('')
    setResetError('')
    setResetSent(false)
    setResetEmail(email)
    setMode('forgot')
  }

  function switchToLogin() {
    setResetError('')
    setResetSent(false)
    setMode('login')
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

          {mode === 'login' ? (
            <div className="login-form-anim" key="login">
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

                <button
                  type="button"
                  className="login-forgot-toggle"
                  onClick={switchToForgot}
                >
                  Lupa kata sandi?
                </button>

                {error && <p className="login-error">{error}</p>}

                <button type="submit" className="login-submit" disabled={submitting}>
                  {submitting ? 'Memproses...' : 'Masuk'}
                </button>
              </form>

              <p className="login-help">Belum punya akun? Hubungi admin sekolah.</p>
            </div>
          ) : (
            <div className="login-form-anim" key="forgot">
              <h2>Lupa Kata Sandi</h2>
              <p className="login-sub">
                Masukkan email akun Anda, kami akan kirim link untuk membuat
                kata sandi baru.
              </p>

              {resetSent ? (
                <div className="login-success">
                  <p>
                    Link reset kata sandi sudah dikirim ke{' '}
                    <strong>{resetEmail}</strong>. Cek juga folder spam ya.
                  </p>

                  <button
                    type="button"
                    className="login-back-btn"
                    onClick={switchToLogin}
                  >
                    ← Kembali ke halaman masuk
                  </button>
                </div>
              ) : (
                <form className="login-form" onSubmit={handleReset} noValidate>
                  <label className="login-field">
                    <span>Email</span>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="nama@rainbowkids.id"
                      autoComplete="username"
                    />
                  </label>

                  {resetError && <p className="login-error">{resetError}</p>}

                  <button
                    type="submit"
                    className="login-submit"
                    disabled={resetSubmitting}
                  >
                    {resetSubmitting ? 'Mengirim...' : 'Kirim Link Reset'}
                  </button>

                  <button
                    type="button"
                    className="login-back-btn"
                    onClick={switchToLogin}
                  >
                    ← Kembali ke halaman masuk
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
