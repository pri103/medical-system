import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, loading, getDashboardPath, setNotice } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      setNotice('Please log in to access that page.')
    }
  }, [loading, user, setNotice])

  if (loading) {
    return <div className="page"><p className="form-helper">Checking session...</p></div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const target = getDashboardPath(user.role)
    return <Navigate to={target} replace />
  }

  return children
}

export default ProtectedRoute

