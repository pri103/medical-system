import { api } from './api'

export const doctorService = {
  async getOverview() {
    const { data } = await api.get('/api/doctor/overview')
    return data
  },
  async updateProfile(payload) {
    const { data } = await api.put('/api/doctor/profile', payload)
    return data
  },
  async createPrescription(payload) {
    const { data } = await api.post('/api/doctor/prescriptions', payload)
    return data
  },
  async listAppointments() {
    console.log('[DEBUG] Doctor appointments fetch request')
    const { data } = await api.get('/api/doctor/appointments')
    console.log('[DEBUG] Doctor appointments fetch response', data)
    return data
  },
  async updateAppointmentStatus(id, status) {
    const { data } = await api.patch(`/api/doctor/appointments/${id}/status`, { status })
    return data
  },
}
