import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const VerifyOtp = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { verifyRegistrationOtp, resendRegistrationOtp, setNotice } = useAuth()
  const initialEmail = location.state?.email || ''

  const [email, setEmail] = useState(initialEmail)
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validate = () => {
    if (!email.trim()) return 'Email is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format.'
    if (!/^\d{6}$/.test(otp)) return 'OTP must be exactly 6 digits.'
    return ''
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const response = await verifyRegistrationOtp({ email, otp })
      setSuccess(response?.message || 'Account verified successfully')
      setNotice('Account verified. Please login.')
      setTimeout(() => navigate('/login'), 1000)
    } catch (err) {
      setError(err?.message || 'OTP verification failed')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (!email.trim()) {
      setError('Enter email to resend OTP.')
      return
    }
    setError('')
    setSuccess('')
    setResending(true)
    try {
      const response = await resendRegistrationOtp(email)
      setSuccess(response?.message || 'OTP resent successfully')
    } catch (err) {
      setError(err?.message || 'Could not resend OTP')
    } finally {
      setResending(false)
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Verify your account</h2>
          <p className="page-subtitle">
            Enter the 6-digit OTP sent to your email to activate login.
          </p>
        </div>
      </div>

      <div className="card auth-card">
        <form className="form" onSubmit={handleVerify}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="otp">
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              className="form-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              maxLength={6}
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              disabled={resending}
              onClick={handleResend}
            >
              {resending ? 'Resending...' : 'Resend OTP'}
            </button>
          </div>
        </form>

        {error && <p className="form-error" style={{ marginTop: '0.75rem' }}>{error}</p>}
        {success && <p className="form-success">{success}</p>}

        <p className="auth-footer">
          Back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default VerifyOtp
