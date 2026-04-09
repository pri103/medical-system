import { createContext, useContext, useEffect, useState } from 'react'
import { patientService } from '../api/patientService'
import { useAuth } from './AuthContext'

const PatientDataContext = createContext()

export function usePatientData() {
  return useContext(PatientDataContext)
}

export function PatientDataProvider({ children }) {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [prescriptions, setPrescriptions] = useState([])
  const [records, setRecords] = useState([])
  const [labReports, setLabReports] = useState([])
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: 'Other',
    email: '',
    phone: '',
    address: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchOverview = async () => {
    if (!user || user.role !== 'patient') return
    setLoading(true)
    setError('')
    try {
      const data = await patientService.getOverview()
      setAppointments(data.appointments || [])
      setPrescriptions(data.prescriptions || [])
      setRecords(data.records || [])
      setLabReports(data.labReports || [])
      setProfile(data.profile || {})
    } catch (err) {
      setError(err.message || 'Failed to load patient data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOverview()
  }, [user])

  const saveProfile = async (payload) => {
    const updated = await patientService.updateProfile(payload)
    setProfile(updated)
    return updated
  }

  const changePassword = async (payload) => patientService.changePassword(payload)

  return (
    <PatientDataContext.Provider
      value={{
        appointments,
        setAppointments,
        prescriptions,
        setPrescriptions,
        records,
        setRecords,
        labReports,
        setLabReports,
        profile,
        setProfile,
        loading,
        error,
        fetchOverview,
        saveProfile,
        changePassword,
      }}
    >
      {children}
    </PatientDataContext.Provider>
  )
}
