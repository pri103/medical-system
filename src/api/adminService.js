import { api } from './api'

export const adminService = {
  async getOverview() {
    const { data } = await api.get('/api/admin/overview')
    return data
  },
  async toggleUserStatus(id) {
    const { data } = await api.patch(`/api/admin/users/${id}/status`)
    return data
  },
  async deleteUser(id) {
    const { data } = await api.delete(`/api/admin/users/${id}`)
    return data
  },
  async updateSettings(payload) {
    const { data } = await api.put('/api/admin/settings', payload)
    return data
  },
}
