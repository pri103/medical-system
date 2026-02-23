import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { user, logout, getDashboardPath, notice, setNotice } = useAuth()

  const isLoggedIn = !!user

  const goDashboard = () => {
    if (!user) return
    navigate(getDashboardPath(user.role))
    setOpen(false)
  }

  const handleLogout = () => {
    logout()
    setNotice('')
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">MC</div>
          <div>
            <div className="navbar-title">MediConsult</div>
            <div className="navbar-subtitle">Virtual care for everyone</div>
          </div>
        </Link>

        <nav className="navbar-links">
          {!isLoggedIn ? (
            <>
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-link">
                About
              </NavLink>
              <NavLink to="/login" className="navbar-link">
                Login
              </NavLink>
              <NavLink to="/register" className="navbar-link navbar-link-primary">
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
              <button type="button" className="btn btn-ghost btn-sm" onClick={goDashboard}>
                Dashboard
              </button>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {notice && (
        <div className="notice-banner">
          <span>{notice}</span>
          <button
            type="button"
            className="notice-close"
            onClick={() => setNotice('')}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}

      {open && (
        <nav className="navbar-links-mobile">
          {!isLoggedIn ? (
            <>
              <NavLink to="/" className="navbar-link" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-link" onClick={() => setOpen(false)}>
                About
              </NavLink>
              <NavLink to="/login" className="navbar-link" onClick={() => setOpen(false)}>
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="navbar-link"
                onClick={() => setOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" className="navbar-link" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <button type="button" className="navbar-link" onClick={goDashboard}>
                Dashboard
              </button>
              <button type="button" className="navbar-link" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  )
}

export default Navbar

