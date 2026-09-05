import DashboardLayout from './DashboardLayout'
import AdminDashboard from './AdminDashboard'
import GuruDashboard from './GuruDashboard'
import { useAuth } from '../../context/AuthContext'

export default function Dashboard() {
  const { profile } = useAuth()

  if (profile?.role === 'admin') {
    return <AdminDashboard />
  }

  if (profile?.role === 'guru') {
    return <GuruDashboard />
  }

  // Fallback: role tidak dikenali (dokumen users/{uid} belum diisi role)
  return (
    <DashboardLayout navItems={[]} activeKey="" onNavChange={() => {}}>
      <p className="dash-empty">
        Akun ini belum punya peran (role) yang valid. Hubungi admin untuk
        mengatur dokumen <code>users/&#123;uid&#125;</code> dengan field{' '}
        <code>role: 'admin'</code> atau <code>role: 'guru'</code>.
      </p>
    </DashboardLayout>
  )
}