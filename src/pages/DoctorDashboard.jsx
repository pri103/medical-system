import { useState } from 'react'

const DoctorDashboard = () => {
  const [prescription, setPrescription] = useState({
    patientName: '',
    diagnosis: '',
    medicines: '',
  })
  const [submittedMessage, setSubmittedMessage] = useState('')

  const upcomingAppointments = [
    {
      id: 1,
      patient: 'Rahul Sharma',
      time: '10:00 AM',
      type: 'Follow up',
      status: 'confirmed',
    },
    {
      id: 2,
      patient: 'Ananya Verma',
      time: '10:45 AM',
      type: 'New consultation',
      status: 'pending',
    },
    {
      id: 3,
      patient: 'Vikram Singh',
      time: '11:30 AM',
      type: 'Follow up',
      status: 'in-progress',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setPrescription((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedMessage(
      `E‑prescription created for ${prescription.patientName || 'patient'} (demo only).`,
    )
    setPrescription({
      patientName: '',
      diagnosis: '',
      medicines: '',
    })
  }

  const statusBadgeClass = (status) => {
    if (status === 'confirmed') return 'badge badge-success'
    if (status === 'pending') return 'badge badge-warning'
    return 'badge badge-info'
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Doctor dashboard</h2>
          <p className="page-subtitle">
            Conduct virtual consultations, issue e‑prescriptions, and keep track of your
            patients&apos; records in one place.
          </p>
        </div>
        <div className="pill">
          <span className="pill-dot" />
          Online • Available
        </div>
      </div>

      <div className="layout-sidebar">
        <aside className="sidebar">
          <div className="sidebar-title">Navigation</div>
          <nav className="sidebar-nav">
            <button type="button" className="sidebar-link sidebar-link-active">
              Overview <span>Today</span>
            </button>
            <button type="button" className="sidebar-link">
              Appointments <span>32</span>
            </button>
            <button type="button" className="sidebar-link">
              Patients <span>128</span>
            </button>
            <button type="button" className="sidebar-link">
              Prescriptions <span>542</span>
            </button>
            <button type="button" className="sidebar-link">
              Settings <span>Profile</span>
            </button>
          </nav>
        </aside>

        <section className="doctor-main">
          <div className="grid-two">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Upcoming virtual appointments</h3>
                <span className="card-meta">Today&apos;s schedule</span>
              </div>
              <div className="card-body">
                <div className="appointments-list">
                  {upcomingAppointments.map((appt) => (
                    <div key={appt.id} className="appointment-card">
                      <div className="appointment-main">
                        <div className="appointment-name">{appt.patient}</div>
                        <div className="appointment-meta">
                          {appt.time} • {appt.type}
                        </div>
                      </div>
                      <span className={statusBadgeClass(appt.status)}>
                        {appt.status === 'confirmed' && 'Confirmed'}
                        {appt.status === 'pending' && 'Pending'}
                        {appt.status === 'in-progress' && 'In progress'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Quick e‑prescription</h3>
                <span className="card-meta">Static demo – no backend</span>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="patientName">
                      Patient name
                    </label>
                    <input
                      id="patientName"
                      name="patientName"
                      type="text"
                      className="form-input"
                      placeholder="Enter patient&apos;s full name"
                      value={prescription.patientName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="diagnosis">
                      Diagnosis
                    </label>
                    <input
                      id="diagnosis"
                      name="diagnosis"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Acute bronchitis"
                      value={prescription.diagnosis}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="medicines">
                      Medicines & instructions
                    </label>
                    <textarea
                      id="medicines"
                      name="medicines"
                      className="form-textarea"
                      placeholder="List medicines, dosage, and duration."
                      value={prescription.medicines}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-footer">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Create e‑prescription
                    </button>
                    <span className="form-helper">
                      Generated prescriptions are not stored – this is a UI demo only.
                      In a real system, they would be shared with patients and pharmacists.
                    </span>
                  </div>
                </form>

                {submittedMessage && (
                  <p className="form-helper" style={{ marginTop: '0.75rem' }}>
                    {submittedMessage}
                  </p>
                )}
              </div>
            </div>
          </div>

          <section className="card">
            <div className="card-header">
              <h3 className="card-title">Patient records snapshot (sample)</h3>
              <span className="card-meta">Recent patients</span>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Last visit</th>
                    <th>Primary diagnosis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rahul Sharma</td>
                    <td>12 Feb 2026</td>
                    <td>Viral fever</td>
                  </tr>
                  <tr>
                    <td>Ananya Verma</td>
                    <td>05 Feb 2026</td>
                    <td>Allergic rhinitis</td>
                  </tr>
                  <tr>
                    <td>Vikram Singh</td>
                    <td>28 Jan 2026</td>
                    <td>Hypertension follow‑up</td>
                  </tr>
                </tbody>
              </table>
              <p className="form-helper" style={{ marginTop: '0.5rem' }}>
                In production, this section would fetch real EMR data and allow you to open
                full patient charts.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default DoctorDashboard

