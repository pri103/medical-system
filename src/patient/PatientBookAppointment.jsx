import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const PatientBookAppointment = () => {
  const { appointments, setAppointments } = useOutletContext()
  const [form, setForm] = useState({
    doctor: 'Dr. Mehta',
    specialization: 'General Physician',
    date: '',
    time: '10:00',
    type: 'Video',
    symptoms: '',
  })
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAppointment = {
      id: appointments.length + 1,
      ...form,
      status: 'Pending',
    }
    setAppointments([...appointments, newAppointment])
    setConfirmation(
      `Appointment request created with ${form.doctor} on ${form.date || 'N/A'} at ${
        form.time
      } (demo only).`,
    )
    setForm((prev) => ({ ...prev, symptoms: '' }))
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Book a virtual appointment</h2>
          <p className="page-subtitle">
            Choose your doctor, specialisation, time slot, and consultation type. This
            form updates only local state.
          </p>
        </div>
        <div className="badge-pill">Patient • Booking</div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Appointment details</h3>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="doctor">
                  Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  className="form-select"
                  value={form.doctor}
                  onChange={handleChange}
                >
                  <option value="Dr. Mehta">Dr. Mehta</option>
                  <option value="Dr. Kapoor">Dr. Kapoor</option>
                  <option value="Dr. Iyer">Dr. Iyer</option>
                  <option value="Dr. Rao">Dr. Rao</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="specialization">
                  Specialisation
                </label>
                <select
                  id="specialization"
                  name="specialization"
                  className="form-select"
                  value={form.specialization}
                  onChange={handleChange}
                >
                  <option value="General Physician">General Physician</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Dermatologist">Dermatologist</option>
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
                  Time slot
                </label>
                <select
                  id="time"
                  name="time"
                  className="form-select"
                  value={form.time}
                  onChange={handleChange}
                >
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="type">
                  Consultation type
                </label>
                <select
                  id="type"
                  name="type"
                  className="form-select"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option value="Video">Video</option>
                  <option value="Chat">Chat</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="symptoms">
                Symptoms / reason for visit
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
                This is a front‑end demo. The appointment is stored only in React state.
              </span>
            </div>
          </form>

          {confirmation && (
            <p className="form-helper" style={{ marginTop: '0.8rem' }}>
              {confirmation}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default PatientBookAppointment

