import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const navigate = useNavigate()
  const { login, getDashboardPath } = useAuth()
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'patient',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ role: form.role, name: form.name, email: form.email })
    const target = getDashboardPath(form.role)
    navigate(target)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Create your account</h2>
          <p className="page-subtitle">
            Choose your role to get the right experience across the virtual clinic.
          </p>
        </div>
      </div>

      <div className="card auth-card">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Dr. Jane Doe"
              value={form.name}
              onChange={handleChange}
              required
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
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={form.role}
              onChange={handleChange}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <span className="form-helper">This is a static demo form.</span>
          </div>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register

