import { useOutletContext } from 'react-router-dom'

const DoctorDashboard = () => {
  const { appointments, patients, prescriptions } = useOutletContext()

  const todaysAppointments = appointments.length
  const totalPatients = patients.length
  const pendingConsultations = appointments.filter(
    (a) => a.status === 'Pending' || a.status === 'In Progress',
  ).length
  const prescriptionCount = prescriptions.length

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Doctor dashboard</h2>
          <p className="page-subtitle">
            At‑a‑glance metrics for today&apos;s appointments, your patient panel, and
            prescriptions.
          </p>
        </div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Today&apos;s summary</h3>
          </div>
          <div className="card-body">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-label">Today&apos;s appointments</div>
                <div className="summary-value">{todaysAppointments}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Total patients (panel)</div>
                <div className="summary-value">{totalPatients}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Pending consultations</div>
                <div className="summary-value">{pendingConsultations}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Prescriptions created</div>
                <div className="summary-value">{prescriptionCount}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Today&apos;s appointments</h3>
          </div>
          <div className="card-body">
            <ul className="appointments-list">
              {appointments.map((a) => (
                <li key={a.id} className="appointment-card">
                  <div className="appointment-main">
                    <div className="appointment-name">{a.patient}</div>
                    <div className="appointment-meta">
                      {a.time} • {a.type}
                    </div>
                  </div>
                  <span className="badge badge-info">{a.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DoctorDashboard

