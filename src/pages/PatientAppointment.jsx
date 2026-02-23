import { useState } from 'react'

const PatientAppointment = () => {
  const [form, setForm] = useState({
    doctorName: 'Dr. Mehta – General Physician',
    date: '',
    time: '',
    symptoms: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Patient portal</h2>
          <p className="page-subtitle">
            Book virtual appointments, and preview how your medical records and lab
            reports could be shown in a full system. This page uses only local state (no
            real data storage).
          </p>
        </div>
        <div className="badge-pill">Patient</div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Book a virtual consultation</h3>
          <span className="card-meta">Front‑end only demo</span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="doctorName">
                Doctor name
              </label>
              <select
                id="doctorName"
                name="doctorName"
                className="form-select"
                value={form.doctorName}
                onChange={handleChange}
              >
                <option value="Dr. Mehta – General Physician">
                  Dr. Mehta – General Physician
                </option>
                <option value="Dr. Kapoor – Cardiologist">Dr. Kapoor – Cardiologist</option>
                <option value="Dr. Iyer – Pediatrician">Dr. Iyer – Pediatrician</option>
                <option value="Dr. Rao – Dermatologist">Dr. Rao – Dermatologist</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="date">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="form-input"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="time">
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                className="form-input"
                value={form.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="symptoms">
              Symptoms
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              className="form-textarea"
              placeholder="Briefly describe your symptoms..."
              value={form.symptoms}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Submit request
            </button>
            <span className="form-helper">
              Your data is not sent anywhere – this is a front‑end only demo.
            </span>
          </div>
        </form>

        {submitted && (
          <p className="form-helper" style={{ marginTop: '0.75rem' }}>
            Appointment request submitted for {form.doctorName} on {form.date || 'N/A'} at{' '}
            {form.time || 'N/A'} (static preview only).
          </p>
        )}
      </div>

      <div className="grid-two" style={{ marginTop: '1.25rem' }}>
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Medical records (sample)</h3>
            <span className="card-meta">Past consultations</span>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Feb 2026</td>
                  <td>Dr. Mehta</td>
                  <td>Fever &amp; cough – resolved</td>
                </tr>
                <tr>
                  <td>02 Jan 2026</td>
                  <td>Dr. Rao</td>
                  <td>Skin allergy – topical treatment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Lab reports (sample)</h3>
            <span className="card-meta">Attached documents</span>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Test</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>08 Feb 2026</td>
                  <td>Complete blood count</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>28 Dec 2025</td>
                  <td>Liver function test</td>
                  <td>Available</td>
                </tr>
              </tbody>
            </table>
            <p className="form-helper" style={{ marginTop: '0.5rem' }}>
              In a full system, each row would link to a PDF or inline report viewer.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PatientAppointment

