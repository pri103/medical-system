import { useNavigate, useOutletContext } from 'react-router-dom'

const PatientDashboard = () => {
  const navigate = useNavigate()
  const { appointments, prescriptions, labReports } = useOutletContext()

  const upcoming = appointments.find(
    (a) => a.status === 'Pending' || a.status === 'Confirmed',
  )
  const totalConsultations = appointments.filter((a) => a.status === 'Completed').length
  const activePrescriptions = prescriptions.length
  const availableLabs = labReports.filter((r) => r.status === 'Available').length

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Patient dashboard</h2>
          <p className="page-subtitle">
            Quick snapshot of your upcoming appointment, consultations, prescriptions, and
            lab reports.
          </p>
        </div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Summary</h3>
          </div>
          <div className="card-body">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-label">Upcoming appointment</div>
                <div className="summary-value">
                  {upcoming
                    ? `${upcoming.date} • ${upcoming.time} • ${upcoming.doctor}`
                    : 'No upcoming appointment'}
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Total consultations</div>
                <div className="summary-value">{totalConsultations}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Active prescriptions</div>
                <div className="summary-value">{activePrescriptions}</div>
              </div>
              <div className="summary-card">
                <div className="summary-label">Lab reports available</div>
                <div className="summary-value">{availableLabs}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Quick actions</h3>
          </div>
          <div className="card-body">
            <div className="quick-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/patient/book-appointment')}
              >
                Book appointment
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => navigate('/patient/prescriptions')}
              >
                View prescriptions
              </button>
            </div>
            <p className="form-helper" style={{ marginTop: '0.7rem' }}>
              This dashboard is front‑end only. All counts and details are based on mock
              data maintained in local state.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PatientDashboard

