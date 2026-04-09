import { api } from './api'

export const patientService = {
  async getOverview() {
    const { data } = await api.get('/api/patient/overview')
    return data
  },
  async updateProfile(payload) {
    const { data } = await api.put('/api/patient/profile', payload)
    return data
  },
  async changePassword(payload) {
    const { data } = await api.post('/api/patient/password-change', payload)
    return data
  },
}
