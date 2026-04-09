import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api, authStorage } from '../api/api'
import { loginUser, registerUser, resendOtp, verifyOtp } from '../api/authApi'

const AuthContext = createContext(null)

const USER_KEY = 'authUser'

const normalizeRole = (role) => {
  if (!role) return null
  return String(role).toLowerCase()
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [notice, setNotice] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const bootstrap = async () => {
      setLoading(true)
      setError('')
      try {
        const storedUser = localStorage.getItem(USER_KEY)
        const token = authStorage.getToken()

        if (storedUser && token) {
          const parsed = JSON.parse(storedUser)
          // optimistic render while we verify token
          setUser({
            email: parsed.email || '',
            name: parsed.name || '',
            role: normalizeRole(parsed.role),
          })

          // verify session with backend
          const { data } = await api.get('/api/auth/me')
          setUser({
            email: data.email || '',
            name: data.name || '',
            role: normalizeRole(data.role),
          })
          localStorage.setItem(
            USER_KEY,
            JSON.stringify({
              email: data.email || '',
              name: data.name || '',
              role: normalizeRole(data.role),
            }),
          )
        } else {
          setUser(null)
        }
      } catch {
        // token invalid/expired or backend down
        authStorage.clearToken()
        localStorage.removeItem(USER_KEY)
        setUser(null)
        setError('Session expired. Please log in again.')
      } finally {
        setLoading(false)
      }
    }

    bootstrap()
  }, [])

  useEffect(() => {
    if (!notice) return
    const timer = setTimeout(() => setNotice(''), 4000)
    return () => clearTimeout(timer)
  }, [notice])

  const login = async ({ email, password, role }) => {
    setError('')
    const data = await loginUser({ email, password, role: String(role || '').toUpperCase() })

    if (!data?.token) {
      throw new Error('Token missing from server response')
    }

    authStorage.setToken(data.token)
    const authUser = {
      email: data.email || email,
      name: data.name || '',
      role: normalizeRole(data.role),
    }
    localStorage.setItem(USER_KEY, JSON.stringify(authUser))
    setUser(authUser)
    return authUser
  }

  const register = async ({ name, email, password, role }) => {
    setError('')
    const data = await registerUser({
      name,
      email,
      password,
      role: String(role || 'PATIENT').toUpperCase(),
    })
    return data
  }

  const verifyRegistrationOtp = async ({ email, otp }) => verifyOtp({ email, otp })

  const resendRegistrationOtp = async (email) => resendOtp(email)

  const logout = () => {
    setUser(null)
    authStorage.clearToken()
    localStorage.removeItem(USER_KEY)
    setError('')
    setNotice('')
  }

  const getDashboardPath = (role) => {
    const r = normalizeRole(role)
    if (r === 'doctor') return '/doctor'
    if (r === 'admin') return '/admin'
    if (r === 'pharmacist') return '/pharmacist'
    return '/patient'
  }

  const value = useMemo(
    () => ({
      user,
      token: authStorage.getToken(),
      loading,
      error,
      setError,
      notice,
      setNotice,
      login,
      register,
      verifyRegistrationOtp,
      resendRegistrationOtp,
      logout,
      getDashboardPath,
    }),
    [user, loading, error, notice],
  )

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

