import { createContext, useContext, useState } from 'react'
import {
  initialAppointments,
  initialPrescriptions,
  initialRecords,
  initialLabReports,
  initialPatientProfile,
} from '../patient/patientMockData'

const PatientDataContext = createContext()

export function usePatientData() {
  return useContext(PatientDataContext)
}

export function PatientDataProvider({ children }) {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [prescriptions, setPrescriptions] = useState(initialPrescriptions)
  const [records, setRecords] = useState(initialRecords)
  const [labReports, setLabReports] = useState(initialLabReports)
  const [profile, setProfile] = useState(initialPatientProfile)

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
      }}
    >
      {children}
    </PatientDataContext.Provider>
  )
}
