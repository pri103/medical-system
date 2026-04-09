import { NavLink, Outlet } from 'react-router-dom'
import { DoctorDataProvider, useDoctorData } from '../context/DoctorDataContext'

const DoctorLayoutInner = () => {
  const {
    appointments,
    setAppointments,
    patients,
    setPatients,
    prescriptions,
    setPrescriptions,
    profile,
    setProfile,
    saveProfile,
    addPrescription,
  } = useDoctorData()

  return (
    <div className="doctor-shell">
      <div className="doctor-topbar">
        <div>
          <div className="doctor-topbar-title">Doctor workspace</div>
          <div className="doctor-topbar-subtitle">
            Manage virtual appointments, patient records, and prescriptions.
          </div>
        </div>
      </div>

      <div className="layout-sidebar">
        <aside className="sidebar">
          <div className="sidebar-title">Doctor navigation</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/doctor/dashboard"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Dashboard <span>Today</span>
            </NavLink>
            <NavLink
              to="/doctor/appointments"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Appointments <span>{appointments.length}</span>
            </NavLink>
            <NavLink
              to="/doctor/patients"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Patients <span>{patients.length}</span>
            </NavLink>
            <NavLink
              to="/doctor/prescriptions"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              E‑prescriptions <span>{prescriptions.length}</span>
            </NavLink>
            <NavLink
              to="/doctor/profile"
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
              patients,
              prescriptions,
              setPrescriptions,
              profile,
              setProfile,
              saveProfile,
              addPrescription,
            }}
          />
        </section>
      </div>
    </div>
  )
}

const DoctorLayout = () => (
  <DoctorDataProvider>
    <DoctorLayoutInner />
  </DoctorDataProvider>
)

export default DoctorLayout

