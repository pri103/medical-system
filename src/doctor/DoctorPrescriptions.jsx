import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const DoctorPrescriptions = () => {
  const { prescriptions, setPrescriptions } = useOutletContext()
  const [form, setForm] = useState({
    patientName: '',
    diagnosis: '',
    medicines: '',
    instructions: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPrescription = {
      id: prescriptions.length + 1,
      ...form,
    }
    setPrescriptions([...prescriptions, newPrescription])
    setMessage(
      `E‑prescription created for ${form.patientName || 'patient'} (stored in state only).`,
    )
    setForm({
      patientName: '',
      diagnosis: '',
      medicines: '',
      instructions: '',
    })
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Create e‑prescription</h2>
          <p className="page-subtitle">
            Fill in patient, diagnosis, medicines, and instructions. Prescriptions are
            stored in local React state for this demo.
          </p>
        </div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">New prescription</h3>
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
                  className="form-input"
                  value={form.patientName}
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
                  className="form-input"
                  value={form.diagnosis}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="medicines">
                  Medicines &amp; dosage
                </label>
                <textarea
                  id="medicines"
                  name="medicines"
                  className="form-textarea"
                  value={form.medicines}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="instructions">
                  Instructions
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  className="form-textarea"
                  value={form.instructions}
                  onChange={handleChange}
                />
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  Submit prescription
                </button>
                <span className="form-helper">
                  No backend is used – this is purely a UI and state management example.
                </span>
              </div>
            </form>

            {message && (
              <p className="form-helper" style={{ marginTop: '0.8rem' }}>
                {message}
              </p>
            )}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Generated prescriptions</h3>
          </div>
          <div className="card-body">
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Diagnosis</th>
                    <th>Medicines</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptions.map((p) => (
                    <tr key={p.id}>
                      <td>{p.patientName}</td>
                      <td>{p.diagnosis}</td>
                      <td>{p.medicines}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DoctorPrescriptions

