export const initialAdminUsers = [
  { id: 1, name: 'Dr. Aditi Sharma', role: 'Doctor', status: 'Active' },
  { id: 2, name: 'Rahul Mehta', role: 'Patient', status: 'Active' },
  { id: 3, name: 'CityCare Pharmacy', role: 'Pharmacist', status: 'Inactive' },
  { id: 4, name: 'Clinic Admin', role: 'Admin', status: 'Active' },
]

export const initialAdminAppointments = [
  {
    id: 1,
    doctor: 'Dr. Mehta',
    patient: 'Rahul Mehta',
    date: '2026-02-25',
    time: '10:00',
    status: 'Confirmed',
  },
  {
    id: 2,
    doctor: 'Dr. Rao',
    patient: 'Ananya Verma',
    date: '2026-02-20',
    time: '16:30',
    status: 'Completed',
  },
  {
    id: 3,
    doctor: 'Dr. Kapoor',
    patient: 'Vikram Singh',
    date: '2026-02-26',
    time: '11:30',
    status: 'Pending',
  },
]

export const initialAdminSettings = {
  maintenanceMode: false,
  appointmentDuration: 20,
  maxDailyAppointments: 40,
}

export const initialAdminLogs = [
  { id: 1, type: 'Login', detail: 'Admin user logged in', time: '2026-02-23 09:10' },
  {
    id: 2,
    type: 'Prescription',
    detail: 'Doctor created e‑prescription for patient',
    time: '2026-02-23 09:30',
  },
  {
    id: 3,
    type: 'Account',
    detail: 'User status changed to Active',
    time: '2026-02-22 18:05',
  },
]

