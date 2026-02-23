export const initialDoctorAppointments = [
  {
    id: 1,
    patient: 'Rahul Mehta',
    time: '10:00',
    type: 'Video',
    status: 'Pending',
  },
  {
    id: 2,
    patient: 'Ananya Verma',
    time: '10:45',
    type: 'Video',
    status: 'Confirmed',
  },
  {
    id: 3,
    patient: 'Vikram Singh',
    time: '11:30',
    type: 'Chat',
    status: 'In Progress',
  },
]

export const initialDoctorPatients = [
  {
    id: 1,
    name: 'Rahul Mehta',
    lastVisit: '2026-02-20',
    diagnosisHistory: ['Seasonal flu'],
  },
  {
    id: 2,
    name: 'Ananya Verma',
    lastVisit: '2026-02-10',
    diagnosisHistory: ['Allergic rhinitis'],
  },
]

export const initialDoctorPrescriptions = [
  {
    id: 1,
    patientName: 'Rahul Mehta',
    diagnosis: 'Viral fever',
    medicines: 'Paracetamol 500mg, ORS',
    instructions: '3 days, rest and hydration',
  },
]

export const initialDoctorProfile = {
  name: 'Dr. Aditi Sharma',
  specialization: 'General Physician',
  experienceYears: 8,
  email: 'aditi.sharma@example.com',
  clinic: 'MediConsult Virtual Clinic',
}

