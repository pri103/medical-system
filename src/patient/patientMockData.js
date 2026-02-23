export const initialAppointments = [
  {
    id: 1,
    doctor: 'Dr. Mehta',
    specialization: 'General Physician',
    date: '2026-02-25',
    time: '10:00',
    type: 'Video',
    symptoms: 'Fever and body ache for 2 days.',
    status: 'Confirmed',
  },
  {
    id: 2,
    doctor: 'Dr. Rao',
    specialization: 'Dermatologist',
    date: '2026-02-20',
    time: '16:30',
    type: 'Chat',
    symptoms: 'Mild skin rash on arms.',
    status: 'Completed',
  },
]

export const initialPrescriptions = [
  {
    id: 1,
    doctor: 'Dr. Mehta',
    date: '2026-02-20',
    medicines: ['Paracetamol 500mg – 3 times a day', 'ORS – after each loose stool'],
  },
  {
    id: 2,
    doctor: 'Dr. Rao',
    date: '2026-01-15',
    medicines: ['Cetirizine 10mg – at night', 'Moisturiser – twice daily'],
  },
]

export const initialRecords = [
  {
    id: 1,
    date: '2026-01-10',
    doctor: 'Dr. Kapoor',
    diagnosis: 'Seasonal flu',
    notes: 'Advised rest, hydration, and follow‑up if fever persists beyond 3 days.',
  },
  {
    id: 2,
    date: '2025-11-02',
    doctor: 'Dr. Iyer',
    diagnosis: 'Migraine',
    notes: 'Lifestyle modifications and trigger diary recommended.',
  },
]

export const initialLabReports = [
  {
    id: 1,
    testName: 'Complete Blood Count',
    date: '2026-02-18',
    status: 'Available',
  },
  {
    id: 2,
    testName: 'Liver Function Test',
    date: '2025-12-28',
    status: 'Pending',
  },
]

export const initialPatientProfile = {
  name: '',
  age: '',
  gender: 'Other',
  email: '',
  phone: '',
  address: '',
}

