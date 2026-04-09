import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const PatientProfile = () => {
  const { profile, saveProfile, changePassword } = useOutletContext()
  const [form, setForm] = useState(profile)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState('')

  useEffect(() => {
    setForm(profile)
  }, [profile])

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    await saveProfile(form)
    setMessage('Profile updated successfully.')
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    await changePassword(passwordForm)
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    })
    setMessage('Password change request submitted.')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Profile</h2>
          <p className="page-subtitle">
            Update your personal details and password with backend integration.
          </p>
        </div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Patient details</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={handleProfileSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  value={form.name}
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="age">
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    className="form-input"
                    value={form.age}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select"
                    value={form.gender}
                    onChange={handleProfileChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
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
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={form.phone}
                  onChange={handleProfileChange}
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
                  onChange={handleProfileChange}
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
                <span className="form-helper">
                  Saved in database via API.
                </span>
              </div>
            </form>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Change password</h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="currentPassword">
                  Current password
                </label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  className="form-input"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="newPassword">
                  New password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="form-input"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">
                  Confirm new password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="form-input"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-outline">
                  Change password
                </button>
                <span className="form-helper">
                  This is a basic backend-connected flow for demo.
                </span>
              </div>
            </form>
          </div>
        </section>
      </div>

      {message && (
        <p className="form-helper" style={{ marginTop: '0.8rem' }}>
          {message}
        </p>
      )}
    </div>
  )
}

export default PatientProfile

