import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  initialAdminUsers,
  initialAdminAppointments,
  initialAdminSettings,
  initialAdminLogs,
} from './adminMockData'

const AdminLayout = () => {
  const [users, setUsers] = useState(initialAdminUsers)
  const [appointments] = useState(initialAdminAppointments)
  const [settings, setSettings] = useState(initialAdminSettings)
  const [logs] = useState(initialAdminLogs)

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
          <Outlet
            context={{
              users,
              setUsers,
              appointments,
              settings,
              setSettings,
              logs,
            }}
          />
        </section>
      </div>
    </div>
  )
}

export default AdminLayout

