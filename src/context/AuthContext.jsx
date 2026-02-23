import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'authUser'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setUser(JSON.parse(stored))
      }
    } catch {
      setUser(null)
    }
  }, [])

  const login = ({ role, name, email }) => {
    const authUser = {
      role,
      name: name || '',
      email: email || '',
    }
    setUser(authUser)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser))
    } catch {
      // ignore storage failures in demo
    }
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore storage failures in demo
    }
  }

  const getDashboardPath = (role) => {
    if (role === 'doctor') return '/doctor'
    if (role === 'admin') return '/admin'
    if (role === 'pharmacist') return '/pharmacist'
    return '/patient'
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, getDashboardPath, notice, setNotice }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

