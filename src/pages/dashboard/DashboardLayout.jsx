import { useState } from 'react'
import logo from '../../assets/logo.png'
import { useAuth } from '../../context/AuthContext'

export default function DashboardLayout({
  navItems,
  activeKey,
  onNavChange,
  children,
}) {
  const { profile, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  async function handleLogout() {
    await logout()
    window.location.href = '/'
  }

  return (
    <div className="dash">
      <header className="dash-header">
        <div className="dash-header__inner">
          <a href="/" className="dash-brand">
            <img src={logo} alt="Logo Rainbow Kids" />
            <span>
              Rainbow Kids
              <small>Panel Kerja</small>
            </span>
          </a>

          <nav className={`dash-nav ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={activeKey === item.key ? 'is-active' : ''}
                onClick={() => {
                  onNavChange(item.key)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="dash-header__right">
            <span
              className={`dash-role-badge dash-role-badge--${profile?.role || 'guru'}`}
            >
              {profile?.role === 'admin' ? 'Panel Admin' : 'Panel Guru'}
            </span>

            <button type="button" className="dash-logout" onClick={handleLogout}>
              Keluar
            </button>

            <button
              type="button"
              className="dash-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Buka menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main className="dash-content">
        <p className="dash-greeting">
          Halo, <strong>{profile?.nama || 'Pengguna'}</strong> 👋
        </p>

        {children}
      </main>
    </div>
  )
}