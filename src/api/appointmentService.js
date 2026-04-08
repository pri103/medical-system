import { api } from './api'

export const appointmentService = {
  async list() {
    const { data } = await api.get('/api/patient/appointments')
    return data
  },

  async create(payload) {
    const { data } = await api.post('/api/patient/appointments', payload)
    return data
  },

  async update(id, payload) {
    const { data } = await api.put(`/api/patient/appointments/${id}`, payload)
    return data
  },

  async remove(id) {
    const { data } = await api.delete(`/api/patient/appointments/${id}`)
    return data
  },
}
