import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import BackToTop from '../components/BackToTop'
import { CalendarIcon } from '../components/icons'
import { useKalenderLibur } from '../hooks/useKalenderLibur'

const NAMA_BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
]

function formatTanggal(tanggalStr) {
  // tanggalStr format: 'YYYY-MM-DD'
  const [tahun, bulan, tgl] = tanggalStr.split('-').map(Number)
  return `${tgl} ${NAMA_BULAN[bulan - 1]} ${tahun}`
}

function isSudahLewat(tanggalStr) {
  const tanggal = new Date(`${tanggalStr}T23:59:59`)
  return tanggal.getTime() < Date.now()
}

export default function KalenderLibur() {
  const { items, loading } = useKalenderLibur()

  const akanDatang = items.filter((it) => !isSudahLewat(it.tanggal))
  const sudahLewat = items.filter((it) => isSudahLewat(it.tanggal))

  return (
    <div className="app">
      <WhatsAppFloat />
      <BackToTop />
      <TopBar />
      <NavBar />

      <section className="infopage-hero">
        <CalendarIcon />
        <h1>Info & Kalender BIMBA</h1>
        <p>
          Jadwal libur dan info penting seputar kegiatan Rainbow Kids
          Sidomakmur, biar Ayah/Bunda nggak ketinggalan info.
        </p>
      </section>

      <section className="section infopage-content">
        {loading && <p className="dash-note">Memuat data...</p>}

        {!loading && items.length === 0 && (
          <p className="dash-empty infopage-empty">
            Belum ada info libur yang ditambahkan.
          </p>
        )}

        {!loading && akanDatang.length > 0 && (
          <div className="infopage-block">
            <h2>Akan Datang</h2>

            <div className="libur-list">
              {akanDatang.map((it) => (
                <div className="libur-card" key={it.id}>
                  <span className="libur-card__tanggal">
                    {formatTanggal(it.tanggal)}
                  </span>
                  <span className="libur-card__ket">{it.keterangan}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && sudahLewat.length > 0 && (
          <div className="infopage-block infopage-block--lewat">
            <h2>Sudah Lewat</h2>

            <div className="libur-list">
              {sudahLewat.map((it) => (
                <div className="libur-card libur-card--lewat" key={it.id}>
                  <span className="libur-card__tanggal">
                    {formatTanggal(it.tanggal)}
                  </span>
                  <span className="libur-card__ket">{it.keterangan}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
