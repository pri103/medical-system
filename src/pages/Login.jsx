import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login, getDashboardPath, setNotice } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
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
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Invalid email format.'
    if (!form.password.trim()) nextErrors.password = 'Password is required.'
    if (form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.'
    setFieldErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setError('')
    setSubmitting(true)
    try {
      const authUser = await login({ email: form.email, password: form.password })
      const target = getDashboardPath(authUser.role)
      navigate(target)
    } catch (err) {
      setNotice('Login failed. Please check your credentials.')
      setError(err?.message || 'Invalid email or password')
    } finally {
      setSubmitting(false)
    }
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
            />
            {fieldErrors.email && <span className="form-error">{fieldErrors.email}</span>}
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

          <div className="form-footer">
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Logging in...' : 'Login'}
            </button>
            <span className="form-helper">
              
            </span>
          </div>
        </form>

        {error && (
          <p className="form-helper" style={{ marginTop: '0.75rem', color: '#b91c1c' }}>
            {error}
          </p>
        )}

        <p className="auth-footer">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login

