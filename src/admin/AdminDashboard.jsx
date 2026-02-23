import { useOutletContext } from 'react-router-dom'

const AdminDashboard = () => {
  const { users, appointments } = useOutletContext()

  const totalDoctors = users.filter((u) => u.role === 'Doctor').length
  const totalPatients = users.filter((u) => u.role === 'Patient').length
  const totalPharmacists = users.filter((u) => u.role === 'Pharmacist').length
  const activeAppointments = appointments.filter((a) => a.status !== 'Completed').length

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Admin dashboard</h2>
          <p className="page-subtitle">
            High‑level view of medical staff, patients, pharmacists, and appointment
            activity.
          </p>
        </div>
        <div className="badge-pill">Admin</div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">User &amp; appointment summary</h3>
          </div>
          <div className="card-body">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-label">Total doctors</div>
                <div className="summary-value">{totalDoctors}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Total patients</div>
                <div className="summary-value">{totalPatients}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Total pharmacists</div>
                <div className="summary-value">{totalPharmacists}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Active appointments</div>
                <div className="summary-value">{activeAppointments}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">System status</h3>
          </div>
          <div className="card-body">
            <p className="form-helper">
              This is a conceptual UI only. In a real deployment, this section could show
              uptime charts, API health, queue backlogs, and incident banners.
            </p>
            <p className="form-helper" style={{ marginTop: '0.5rem' }}>
              Current simulated status: <strong>Healthy</strong> – all key modules
              available.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard

