import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const DoctorProfile = () => {
  const { profile, setProfile } = useOutletContext()
  const [form, setForm] = useState(profile)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProfile(form)
    setMessage('Doctor profile updated in local state (demo only).')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Doctor profile</h2>
          <p className="page-subtitle">
            Review and update your professional details. All updates remain in the
            browser.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Profile details</h3>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                className="form-input"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="specialization">
                Specialisation
              </label>
              <input
                id="specialization"
                name="specialization"
                className="form-input"
                value={form.specialization}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="experienceYears">
                Years of experience
              </label>
              <input
                id="experienceYears"
                name="experienceYears"
                type="number"
                className="form-input"
                value={form.experienceYears}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="clinic">
                Clinic or organisation
              </label>
              <input
                id="clinic"
                name="clinic"
                className="form-input"
                value={form.clinic}
                onChange={handleChange}
              />
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary">
                Save profile
              </button>
              <span className="form-helper">
                This profile is stored only in React state for demo purposes.
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
    </div>
  )
}

export default DoctorProfile

