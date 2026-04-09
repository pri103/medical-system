import { useEffect, useState } from 'react'
import { doctorService } from '../api/doctorService'

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchAppointments = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await doctorService.listAppointments()
      setAppointments(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message || 'Failed to load doctor appointments')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const updateStatus = async (id, status) => {
    setError('')
    try {
      const updated = await doctorService.updateAppointmentStatus(id, status)
      setAppointments((prev) => prev.map((a) => (a.id === id ? updated : a)))
    } catch (err) {
      setError(err.message || 'Failed to update appointment status')
    }
  }

  const badgeClass = (status) => {
    if (status === 'Pending') return 'badge badge-warning'
    if (status === 'Confirmed') return 'badge badge-success'
    if (status === 'In Progress') return 'badge badge-info'
    if (status === 'Completed') return 'badge'
    return 'badge'
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Appointments</h2>
          <p className="page-subtitle">
            Manage your scheduled consultations, join calls, and mark visits as
            completed.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Scheduled appointments</h3>
        </div>
        <div className="card-body">
          {loading && <p className="form-helper">Loading appointments...</p>}
          {error && <p className="form-error">{error}</p>}
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.patientName}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.type}</td>
                    <td>
                      <span className={badgeClass(a.status)}>{a.status}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            updateStatus(a.id, 'In Progress')
                          }}
                        >
                          Join
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          onClick={() => updateStatus(a.id, 'Completed')}
                        >
                          Mark completed
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorAppointments

