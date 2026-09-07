import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function NotFound() {
  return (
    <div className="notfound-page">
      <img src={logo} alt="Logo Rainbow Kids" />
      <h1>404</h1>
      <p>Halaman yang lo cari nggak ketemu.</p>
      <Link to="/" className="btn btn--cta">
        Kembali ke Beranda
      </Link>
    </div>
  )
}
