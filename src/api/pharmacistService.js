import { api } from './api'

export const pharmacistService = {
  async getOverview() {
    const { data } = await api.get('/api/pharmacist/overview')
    return data
  },
  async updateProfile(payload) {
    const { data } = await api.put('/api/pharmacist/profile', payload)
    return data
  },
  async updatePrescriptionStatus(id, status) {
    const { data } = await api.patch(`/api/pharmacist/prescriptions/${id}/status`, { status })
    return data
  },
  async updateOrderStatus(orderCode, status) {
    const { data } = await api.patch(`/api/pharmacist/orders/${orderCode}/status`, { status })
    return data
  },
}
