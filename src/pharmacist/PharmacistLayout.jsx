import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  initialPharmacistPrescriptions,
  initialPharmacistOrders,
  initialPharmacistProfile,
  medicationInfo,
} from './pharmacistMockData'

const PharmacistLayout = () => {
  const [prescriptions, setPrescriptions] = useState(initialPharmacistPrescriptions)
  const [orders, setOrders] = useState(initialPharmacistOrders)
  const [profile, setProfile] = useState(initialPharmacistProfile)
  const [medications] = useState(medicationInfo)

  const pendingCount = prescriptions.filter((p) => p.status === 'To Verify').length

  return (
    <div className="pharmacist-shell">
      <div className="pharmacist-topbar">
        <div>
          <div className="pharmacist-topbar-title">Pharmacist workspace</div>
          <div className="pharmacist-topbar-subtitle">
            Handle incoming prescriptions, orders, and medication insights.
          </div>
        </div>
        <div className="pharmacist-topbar-badge">
          New prescriptions: <strong>{pendingCount}</strong>
        </div>
      </div>

      <div className="layout-sidebar">
        <aside className="sidebar">
          <div className="sidebar-title">Pharmacist navigation</div>
          <nav className="sidebar-nav">
            <NavLink
              to="/pharmacist/dashboard"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Dashboard <span>Today</span>
            </NavLink>
            <NavLink
              to="/pharmacist/prescriptions"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Incoming prescriptions <span>{prescriptions.length}</span>
            </NavLink>
            <NavLink
              to="/pharmacist/orders"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Orders <span>{orders.length}</span>
            </NavLink>
            <NavLink
              to="/pharmacist/medications"
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              Medication info <span>{medications.length}</span>
            </NavLink>
            <NavLink
              to="/pharmacist/profile"
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
              prescriptions,
              setPrescriptions,
              orders,
              setOrders,
              profile,
              setProfile,
              medications,
            }}
          />
        </section>
      </div>
    </div>
  )
}

export default PharmacistLayout

