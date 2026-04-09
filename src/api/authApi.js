import { api } from './api'

export const registerUser = async (payload) => {
  const { data } = await api.post('/api/auth/register', payload)
  return data
}

export const verifyOtp = async (payload) => {
  const { data } = await api.post('/api/auth/verify-otp', payload)
  return data
}

export const resendOtp = async (email) => {
  const { data } = await api.post('/api/auth/resend-otp', { email })
  return data
}

export const loginUser = async (payload) => {
  const { data } = await api.post('/api/auth/login', payload)
  return data
}
