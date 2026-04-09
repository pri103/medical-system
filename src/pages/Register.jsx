import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const navigate = useNavigate()
  const { register, setNotice } = useAuth()
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    setError('')
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (form.name.trim().length < 2) nextErrors.name = 'Name must be at least 2 characters.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Invalid email format.'
    if (!form.role) nextErrors.role = 'Role is required.'
    if (!form.password.trim()) nextErrors.password = 'Password is required.'
    if (form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.'
    if (!form.confirmPassword.trim()) {
      nextErrors.confirmPassword = 'Confirm password is required.'
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }
    setFieldErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setError('')
    setSubmitting(true)
    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      })
      setNotice('Registration successful. Verify OTP sent to your email.')
      navigate('/verify-otp', { state: { email: form.email } })
    } catch (err) {
      setNotice('Registration failed. Please try again.')
      setError(err?.message || 'Could not register. Try a different email.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Create your account</h2>
          <p className="page-subtitle">
            Create an account and verify your email with OTP.
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
            />
            {fieldErrors.name && <span className="form-error">{fieldErrors.name}</span>}
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
            />
            {fieldErrors.email && <span className="form-error">{fieldErrors.email}</span>}
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
              <option value="">Select role</option>
              <option value="PATIENT">PATIENT</option>
              <option value="DOCTOR">DOCTOR</option>
              <option value="PHARMACIST">PHARMACIST</option>
              <option value="ADMIN">ADMIN</option>
            </select>
            {fieldErrors.role && <span className="form-error">{fieldErrors.role}</span>}
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
            />
            {fieldErrors.password && <span className="form-error">{fieldErrors.password}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {fieldErrors.confirmPassword && (
              <span className="form-error">{fieldErrors.confirmPassword}</span>
            )}
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Registering...' : 'Register'}
            </button>
            <span className="form-helper">Creates account via Spring Boot backend.</span>
          </div>
        </form>

        {error && (
          <p className="form-helper" style={{ marginTop: '0.75rem', color: '#b91c1c' }}>
            {error}
          </p>
        )}

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register

