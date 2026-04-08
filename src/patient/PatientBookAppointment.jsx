import { useMemo, useState } from 'react'
import { useAppointments } from '../context/AppointmentsContext'

const PatientBookAppointment = () => {
  const { createAppointment, error, success, setError, setSuccess } = useAppointments()
  const [form, setForm] = useState({
    doctor: 'Dr. Mehta',
    specialization: 'General Physician',
    date: '',
    time: '10:00',
    type: 'Video',
    symptoms: '',
  })
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const minDate = useMemo(() => new Date().toISOString().split('T')[0], [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    setError('')
    setSuccess('')
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.date) nextErrors.date = 'Date is required.'
    if (!form.time) nextErrors.time = 'Time is required.'
    if (!form.symptoms.trim()) nextErrors.symptoms = 'Symptoms are required.'
    if (form.symptoms.trim().length < 5) nextErrors.symptoms = 'Enter at least 5 characters.'
    setFieldErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    try {
      await createAppointment({
        doctor: form.doctor,
        specialization: form.specialization,
        appointmentDate: form.date,
        appointmentTime: form.time,
        type: form.type,
        symptoms: form.symptoms.trim(),
      })
      setForm((prev) => ({ ...prev, symptoms: '' }))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Book a virtual appointment</h2>
          <p className="page-subtitle">
            Choose doctor, date, time and consultation type to create appointments in MySQL.
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
                  min={minDate}
                  onChange={handleChange}
                />
                {fieldErrors.date && <span className="form-error">{fieldErrors.date}</span>}
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
              />
              {fieldErrors.symptoms && <span className="form-error">{fieldErrors.symptoms}</span>}
            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit request'}
              </button>
              <span className="form-helper">Data is saved via Spring Boot API.</span>
            </div>
          </form>

          {success && <p className="form-success">{success}</p>}
          {error && <p className="form-error">{error}</p>}
        </div>
      </section>
    </div>
  )
}

export default PatientBookAppointment

