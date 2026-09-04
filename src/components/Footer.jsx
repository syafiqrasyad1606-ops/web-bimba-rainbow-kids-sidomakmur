import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Logo Bimba Rainbow Kids" />

          <div>
            <strong>Rainbow Kids</strong>
            <span>Sidomakmur</span>
          </div>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Rainbow Kids Sidomakmur. Semua hak
          dilindungi.
        </p>
      </div>
    </footer>
  )
}
