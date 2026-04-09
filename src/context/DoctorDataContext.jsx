import { createContext, useContext, useEffect, useState } from 'react'
import { doctorService } from '../api/doctorService'
import { useAuth } from './AuthContext'

const DoctorDataContext = createContext()

export function useDoctorData() {
  return useContext(DoctorDataContext)
}

export function DoctorDataProvider({ children }) {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])
  const [prescriptions, setPrescriptions] = useState([])
  const [profile, setProfile] = useState({
    name: '',
    specialization: '',
    experienceYears: 0,
    email: '',
    clinic: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchOverview = async () => {
    if (!user || user.role !== 'doctor') return
    setLoading(true)
    setError('')
    try {
      const data = await doctorService.getOverview()
      setAppointments(data.appointments || [])
      setPatients(data.patients || [])
      setPrescriptions(data.prescriptions || [])
      setProfile(data.profile || {})
    } catch (err) {
      setError(err.message || 'Failed to load doctor data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOverview()
  }, [user])

  const saveProfile = async (payload) => {
    const updated = await doctorService.updateProfile(payload)
    setProfile(updated)
    return updated
  }

  const addPrescription = async (payload) => {
    await doctorService.createPrescription(payload)
    await fetchOverview()
  }

  return (
    <DoctorDataContext.Provider
      value={{
        appointments,
        setAppointments,
        patients,
        setPatients,
        prescriptions,
        setPrescriptions,
        profile,
        setProfile,
        loading,
        error,
        fetchOverview,
        saveProfile,
        addPrescription,
      }}
    >
      {children}
    </DoctorDataContext.Provider>
  )
}
