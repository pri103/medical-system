import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { PatientDataProvider, usePatientData } from '../context/PatientDataContext'

const PatientLayoutInner = () => {
  const { user } = useAuth()
  const {
    appointments,
    setAppointments,
    prescriptions,
    setPrescriptions,
    records,
    setRecords,
    labReports,
    setLabReports,
    profile,
    setProfile,
  } = usePatientData()

  return (
    <div className="patient-shell">
      <div className="patient-topbar">
        <div>
          <div className="patient-topbar-title">Patient portal</div>
          <div className="patient-topbar-subtitle">
            Manage your virtual consultations, prescriptions, and health records.
          </div>
        </div>
        <div className="patient-topbar-user">
          <span className="patient-avatar">
            {(profile.name || user?.name || 'P')[0]?.toUpperCase()}
          </span>
          <div className="patient-topbar-userinfo">
            <span className="patient-topbar-name">{profile.name || user?.name}</span>
            <span className="patient-topbar-role">Patient</span>
          </div>
        </div>
      </div>

      <div className="layout-sidebar">
        <aside className="sidebar">
          <div className="sidebar-title">Patient navigation</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/patient/dashboard"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Dashboard <span>Overview</span>
            </NavLink>
            <NavLink
              to="/patient/book-appointment"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Book appointment <span>New</span>
            </NavLink>
            <NavLink
              to="/patient/appointments"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              My appointments <span>{appointments.length}</span>
            </NavLink>
            <NavLink
              to="/patient/prescriptions"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              E‑prescriptions <span>{prescriptions.length}</span>
            </NavLink>
            <NavLink
              to="/patient/medical-records"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Medical records <span>{records.length}</span>
            </NavLink>
            <NavLink
              to="/patient/lab-reports"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Lab reports <span>{labReports.length}</span>
            </NavLink>
            <NavLink
              to="/patient/profile"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Profile <span>Account</span>
            </NavLink>
          </nav>
        </aside>

        <section className="patient-content">
          <Outlet
            context={{
              appointments,
              setAppointments,
              prescriptions,
              setPrescriptions,
              records,
              setRecords,
              labReports,
              setLabReports,
              profile,
              setProfile,
            }}
          />
        </section>
      </div>
    </div>
  )
}

const PatientLayout = () => (
  <PatientDataProvider>
    <PatientLayoutInner />
  </PatientDataProvider>
)

export default PatientLayout

