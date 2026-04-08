import { createContext, useContext, useState } from 'react'
import {
  initialDoctorAppointments,
  initialDoctorPatients,
  initialDoctorPrescriptions,
  initialDoctorProfile,
} from '../doctor/doctorMockData'

const DoctorDataContext = createContext()

export function useDoctorData() {
  return useContext(DoctorDataContext)
}

export function DoctorDataProvider({ children }) {
  const [appointments, setAppointments] = useState(initialDoctorAppointments)
  const [patients, setPatients] = useState(initialDoctorPatients)
  const [prescriptions, setPrescriptions] = useState(initialDoctorPrescriptions)
  const [profile, setProfile] = useState(initialDoctorProfile)

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
      }}
    >
      {children}
    </DoctorDataContext.Provider>
  )
}
