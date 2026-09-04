js import { useGuruList } from '../../hooks/useGuruList'
import { useState } from 'react'
import DashboardLayout from './DashboardLayout'
import { usePengumuman } from '../../hooks/usePengumuman'
import { useKalenderLibur } from '../../hooks/useKalenderLibur'

const NAV_ITEMS = [
  { key: 'ringkasan', label: 'Ringkasan' },
  { key: 'pengumuman', label: 'Pengumuman' },
  { key: 'kalender', label: 'Kalender Libur' },
  { key: 'guru', label: 'Data Guru' },
  { key: 'jadwal', label: 'Jadwal' },
  { key: 'galeri', label: 'Galeri' },
]

export default function AdminDashboard() {
  const [tab, setTab] = useState('ringkasan')

  return (
    <DashboardLayout navItems={NAV_ITEMS} activeKey={tab} onNavChange={setTab}>
      {tab === 'ringkasan' && <Ringkasan />}
      {tab === 'pengumuman' && <PengumumanAdmin />}
      {tab === 'kalender' && <KalenderLiburAdmin />}
      {tab === 'guru' && <DataGuru />}
      {tab === 'jadwal' && <Jadwal />}
      {tab === 'galeri' && <GaleriPlaceholder />}
    </DashboardLayout>
  )
}

function Ringkasan() {
  // Angka di bawah ini contoh statis — sambungkan ke Firestore
  // (mis. hitung dokumen di koleksi 'siswa', 'guru', dst.) kalau
  // datanya sudah ada.
  const stats = [
    { label: 'Total Siswa', value: '48' },
    { label: 'Total Guru', value: '6' },
    { label: 'Pengumuman Aktif', value: '—' },
    { label: 'Kelas Berjalan', value: '3' },
  ]

  return (
    <section>
      <h2 className="dash-section-title">Ringkasan</h2>

      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-card__value">{s.value}</span>
            <span className="stat-card__label">{s.label}</span>
          </div>
        ))}
      </div>

      <p className="dash-note">
        Angka di atas masih contoh. Sambungkan ke koleksi Firestore terkait
        (siswa, guru, kelas) untuk data real-time.
      </p>
    </section>
  )
}

function PengumumanAdmin() {
  const { items, loading, tambah, hapus } = usePengumuman()
  const [judul, setJudul] = useState('')
  const [isi, setIsi] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (!judul.trim() || !isi.trim()) return

    setSubmitting(true)

    try {
      await tambah(judul.trim(), isi.trim())
      setJudul('')
      setIsi('')
    } catch (err) {
      console.error('Gagal menambah pengumuman:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <h2 className="dash-section-title">Pengumuman</h2>

      <form className="pengumuman-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul pengumuman"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <textarea
          placeholder="Isi pengumuman"
          rows={3}
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />

        <button type="submit" disabled={submitting}>
          {submitting ? 'Menyimpan...' : 'Tambah Pengumuman'}
        </button>
      </form>

      {loading && <p className="dash-note">Memuat pengumuman...</p>}

      <div className="pengumuman-list">
        {!loading && items.length === 0 && (
          <p className="dash-empty">Belum ada pengumuman.</p>
        )}

        {items.map((item) => (
          <div className="pengumuman-card" key={item.id}>
            <div>
              <strong>{item.judul}</strong>
              <p>{item.isi}</p>
            </div>

            <button type="button" onClick={() => hapus(item.id)}>
              Hapus
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

function KalenderLiburAdmin() {
  const { items, loading, tambah, hapus } = useKalenderLibur()
  const [tanggal, setTanggal] = useState('')
  const [keterangan, setKeterangan] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (!tanggal || !keterangan.trim()) return

    setSubmitting(true)

    try {
      await tambah(tanggal, keterangan.trim())
      setTanggal('')
      setKeterangan('')
    } catch (err) {
      console.error('Gagal menambah kalender libur:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <h2 className="dash-section-title">Kalender Libur</h2>

      <p className="dash-note">
        Data di sini otomatis tampil di halaman publik{' '}
        <strong>Info & Kalender</strong> yang bisa dilihat orang tua tanpa
        perlu login.
      </p>

      <form className="pengumuman-form kalender-form" onSubmit={handleSubmit}>
        <input
          type="date"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
        />

        <input
          type="text"
          placeholder="Keterangan (mis. Libur Semester Ganjil)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />

        <button type="submit" disabled={submitting}>
          {submitting ? 'Menyimpan...' : 'Tambah'}
        </button>
      </form>

      {loading && <p className="dash-note">Memuat data...</p>}

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Keterangan</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {!loading && items.length === 0 && (
              <tr>
                <td colSpan={3} className="dash-empty">
                  Belum ada data libur.
                </td>
              </tr>
            )}

            {items.map((it) => (
              <tr key={it.id}>
                <td>{it.tanggal}</td>
                <td>{it.keterangan}</td>
                <td>
                  <button
                    type="button"
                    className="table-card__hapus"
                    onClick={() => hapus(it.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

js function DataGuru() { const { items, loading } = useGuruList() return ( <section> <h2 className="dash-section-title">Data Guru</h2> {loading && <p className="dash-note">Memuat data guru...</p>} <div className="table-card"> <table> <thead> <tr> <th>Nama</th> <th>Peran</th> </tr> </thead> <tbody> {!loading && items.length === 0 && ( <tr> <td colSpan={2} className="dash-empty"> Belum ada akun guru terdaftar. </td> </tr> )} {items.map((g) => ( <tr key={g.id}> <td>{g.nama || '-'}</td> <td> <span className="status-pill">Guru</span> </td> </tr> ))} </tbody> </table> </div> </section> ) }

  return (
    <section>
      <h2 className="dash-section-title">Data Guru</h2>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Kelas</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {guru.map((g) => (
              <tr key={g.nama}>
                <td>{g.nama}</td>
                <td>{g.kelas}</td>
                <td>
                  <span className="status-pill">{g.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="dash-note">
        Data masih contoh statis. Hubungkan ke koleksi Firestore untuk data guru
        sesungguhnya.
      </p>
    </section>
  )
}

function Jadwal() {
  const jadwal = [
    { hari: 'Senin', kegiatan: 'Calistung' },
    { hari: 'Selasa', kegiatan: 'Motorik & Bahasa' },
    { hari: 'Rabu', kegiatan: 'Bermain Sosial' },
    { hari: 'Kamis', kegiatan: 'Kreativitas' },
    { hari: 'Jumat', kegiatan: 'Tahfidz' },
  ]

  return (
    <section>
      <h2 className="dash-section-title">Jadwal Mingguan</h2>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Hari</th>
              <th>Kegiatan</th>
            </tr>
          </thead>

          <tbody>
            {jadwal.map((j) => (
              <tr key={j.hari}>
                <td>{j.hari}</td>
                <td>{j.kegiatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function GaleriPlaceholder() {
  return (
    <section>
      <h2 className="dash-section-title">Galeri</h2>

      <p className="dash-empty">
        Bagian ini untuk upload/kelola foto galeri. Sambungkan ke Firebase
        Storage + Firestore kalau sudah siap — pola CRUD-nya sama seperti
        tab Pengumuman.
      </p>
    </section>
  )
}
