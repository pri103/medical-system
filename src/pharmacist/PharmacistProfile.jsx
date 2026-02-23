import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const PharmacistProfile = () => {
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
    setMessage('Pharmacy profile updated in local state (demo only).')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Pharmacy profile</h2>
          <p className="page-subtitle">
            Update pharmacy details, contact information, and license number as part of
            this simulated module.
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
              <label className="form-label" htmlFor="pharmacyName">
                Pharmacy name
              </label>
              <input
                id="pharmacyName"
                name="pharmacyName"
                className="form-input"
                value={form.pharmacyName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                className="form-input"
                value={form.contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="licenseNumber">
                License number
              </label>
              <input
                id="licenseNumber"
                name="licenseNumber"
                className="form-input"
                value={form.licenseNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                name="address"
                className="form-input"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary">
                Save profile
              </button>
              <span className="form-helper">
                This is a front‑end only profile editor suitable for academic demos.
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

export default PharmacistProfile

