export const initialPharmacistPrescriptions = [
  {
    id: 1,
    patient: 'Rahul Mehta',
    doctor: 'Dr. Mehta',
    medicines: ['Paracetamol 500mg', 'ORS'],
    status: 'To Verify',
  },
  {
    id: 2,
    patient: 'Ananya Verma',
    doctor: 'Dr. Rao',
    medicines: ['Cetirizine 10mg'],
    status: 'Ready',
  },
]

export const initialPharmacistOrders = [
  { id: 'ORD-1023', status: 'Preparing', eta: '15 min' },
  { id: 'ORD-1018', status: 'Ready', eta: 'Now' },
  { id: 'ORD-1001', status: 'Completed', eta: '-' },
]

export const initialPharmacistProfile = {
  pharmacyName: 'CityCare Pharmacy',
  contact: '+91 98765 00000',
  licenseNumber: 'LIC-12345-2026',
  address: 'MG Road, Bangalore',
}

export const medicationInfo = [
  {
    name: 'Paracetamol 500mg',
    usage: 'Used to treat mild to moderate pain and fever.',
    sideEffects: 'Nausea, rash (rare), liver issues in overdose.',
    interactionNote: 'Use with caution with other paracetamol‑containing medications.',
  },
  {
    name: 'Cetirizine 10mg',
    usage: 'Antihistamine used for allergy symptoms.',
    sideEffects: 'Drowsiness, dry mouth in some patients.',
    interactionNote: 'Avoid combining with other sedating antihistamines.',
  },
]

