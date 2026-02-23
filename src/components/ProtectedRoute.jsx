import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, getDashboardPath, setNotice } = useAuth()

  if (!user) {
    setNotice('Please log in to access that page.')
    return <Navigate to="/" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const target = getDashboardPath(user.role)
    setNotice('You do not have permission to access that area. Redirected to your dashboard.')
    return <Navigate to={target} replace />
  }

  return children
}

export default ProtectedRoute

