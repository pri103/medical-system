import { createContext, useContext, useEffect, useState } from 'react'
import { appointmentService } from '../api/appointmentService'
import { useAuth } from './AuthContext'

const AppointmentsContext = createContext()

export function useAppointments() {
  return useContext(AppointmentsContext)
}

export function AppointmentsProvider({ children }) {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const fetchAppointments = async () => {
    if (!user || user.role !== 'patient') {
      setAppointments([])
      return
    }
    setLoading(true)
    setError('')
    try {
      const data = await appointmentService.list()
      setAppointments(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message || 'Could not load appointments')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [user])

  const createAppointment = async (payload) => {
    setError('')
    setSuccess('')
    const created = await appointmentService.create(payload)
    setAppointments((prev) => [created, ...prev])
    setSuccess('Appointment created successfully.')
    return created
  }

  const updateAppointment = async (id, payload) => {
    setError('')
    setSuccess('')
    const updated = await appointmentService.update(id, payload)
    setAppointments((prev) => prev.map((a) => (a.id === id ? updated : a)))
    setSuccess('Appointment updated successfully.')
    return updated
  }

  const deleteAppointment = async (id) => {
    setError('')
    setSuccess('')
    await appointmentService.remove(id)
    setAppointments((prev) => prev.filter((a) => a.id !== id))
    setSuccess('Appointment deleted successfully.')
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        setAppointments,
        loading,
        error,
        success,
        setError,
        setSuccess,
        fetchAppointments,
        createAppointment,
        updateAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}
