import { useState } from 'react'
import DashboardLayout from './DashboardLayout'
import { usePengumuman } from '../../hooks/usePengumuman'
import { useAuth } from '../../context/AuthContext'

const NAV_ITEMS = [
  { key: 'ringkasan', label: 'Ringkasan' },
  { key: 'jadwal', label: 'Jadwal Saya' },
  { key: 'pengumuman', label: 'Pengumuman' },
  { key: 'profil', label: 'Profil' },
]

export default function GuruDashboard() {
  const [tab, setTab] = useState('ringkasan')

  return (
    <DashboardLayout navItems={NAV_ITEMS} activeKey={tab} onNavChange={setTab}>
      {tab === 'ringkasan' && <Ringkasan />}
      {tab === 'jadwal' && <JadwalSaya />}
      {tab === 'pengumuman' && <PengumumanGuru />}
      {tab === 'profil' && <Profil />}
    </DashboardLayout>
  )
}

function Ringkasan() {
  return (
    <section>
      <h2 className="dash-section-title">Ringkasan Hari Ini</h2>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-card__value">Kelompok A</span>
          <span className="stat-card__label">Kelas yang diampu</span>
        </div>

        <div className="stat-card">
          <span className="stat-card__value">07.30</span>
          <span className="stat-card__label">Jam masuk hari ini</span>
        </div>
      </div>

      <p className="dash-note">
        Data kelas & jadwal masih contoh — sambungkan ke Firestore sesuai
        akun guru yang login.
      </p>
    </section>
  )
}

function JadwalSaya() {
  const jadwal = [
    { hari: 'Senin', kegiatan: 'Calistung', jam: '08.00 – 09.30' },
    { hari: 'Rabu', kegiatan: 'Bermain Sosial', jam: '08.00 – 09.30' },
    { hari: 'Jumat', kegiatan: 'Tahfidz', jam: '08.00 – 09.00' },
  ]

  return (
    <section>
      <h2 className="dash-section-title">Jadwal Saya</h2>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Hari</th>
              <th>Kegiatan</th>
              <th>Jam</th>
            </tr>
          </thead>

          <tbody>
            {jadwal.map((j) => (
              <tr key={j.hari}>
                <td>{j.hari}</td>
                <td>{j.kegiatan}</td>
                <td>{j.jam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function PengumumanGuru() {
  const { items, loading } = usePengumuman()

  return (
    <section>
      <h2 className="dash-section-title">Pengumuman</h2>

      {loading && <p className="dash-note">Memuat pengumuman...</p>}

      <div className="pengumuman-list">
        {!loading && items.length === 0 && (
          <p className="dash-empty">Belum ada pengumuman dari admin.</p>
        )}

        {items.map((item) => (
          <div className="pengumuman-card pengumuman-card--readonly" key={item.id}>
            <div>
              <strong>{item.judul}</strong>
              <p>{item.isi}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Profil() {
  const { user, profile } = useAuth()

  return (
    <section>
      <h2 className="dash-section-title">Profil</h2>

      <div className="table-card profil-card">
        <p>
          <span>Nama</span>
          <strong>{profile?.nama || '-'}</strong>
        </p>

        <p>
          <span>Email</span>
          <strong>{user?.email}</strong>
        </p>

        <p>
          <span>Peran</span>
          <strong>Guru</strong>
        </p>
      </div>
    </section>
  )
}
