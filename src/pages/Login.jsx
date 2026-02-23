import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login, getDashboardPath } = useAuth()
  const [form, setForm] = useState({ email: '', password: '', role: 'patient' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ role: form.role, email: form.email })
    const target = getDashboardPath(form.role)
    navigate(target)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Welcome back</h2>
          <p className="page-subtitle">
            Sign in to access your virtual consultation workspace.
          </p>
        </div>
      </div>

      <div className="card auth-card">
        <form className="form" onSubmit={handleSubmit}>
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
              Login
            </button>
            <span className="form-helper">Demo-only login. No backend calls.</span>
          </div>
        </form>

        <p className="auth-footer">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login

