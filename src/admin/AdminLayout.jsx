import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { adminService } from '../api/adminService'

const AdminLayout = () => {
  const [users, setUsers] = useState([])
  const [appointments, setAppointments] = useState([])
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    appointmentDuration: 20,
    maxDailyAppointments: 40,
  })
  const [logs, setLogs] = useState([])
  const [error, setError] = useState('')

  const fetchOverview = async () => {
    setError('')
    try {
      const data = await adminService.getOverview()
      setUsers(data.users || [])
      setAppointments(data.appointments || [])
      setSettings(data.settings || {})
      setLogs(data.logs || [])
    } catch (err) {
      setError(err.message || 'Failed to load admin data')
    }
  }

  useEffect(() => {
    fetchOverview()
  }, [])

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div>
          <div className="admin-topbar-title">Admin console</div>
          <div className="admin-topbar-subtitle">
            Monitor users, appointments, security, and platform settings.
          </div>
        </div>
      </div>

      <div className="layout-sidebar">
        <aside className="sidebar">
          <div className="sidebar-title">Admin navigation</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Dashboard <span>Overview</span>
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Users <span>{users.length}</span>
            </NavLink>
            <NavLink
              to="/admin/appointments"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Appointments <span>{appointments.length}</span>
            </NavLink>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Settings <span>Platform</span>
            </NavLink>
            <NavLink
              to="/admin/security"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Security &amp; logs <span>Audit</span>
            </NavLink>
          </nav>
        </aside>

        <section className="patient-content">
          {error && <p className="form-error">{error}</p>}
          <Outlet
            context={{
              users,
              setUsers,
              appointments,
              settings,
              setSettings,
              logs,
              fetchOverview,
            }}
          />
        </section>
      </div>
    </div>
  )
}

export default AdminLayout

