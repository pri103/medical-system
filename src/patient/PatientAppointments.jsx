import { useState } from 'react'
import { useAppointments } from '../context/AppointmentsContext'

const defaultEditForm = {
  doctor: '',
  specialization: '',
  date: '',
  time: '',
  type: '',
  symptoms: '',
}

const PatientAppointments = () => {
  const {
    appointments,
    loading,
    error,
    success,
    updateAppointment,
    deleteAppointment,
    setError,
    setSuccess,
  } = useAppointments()
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(defaultEditForm)
  const [submitting, setSubmitting] = useState(false)

  const statusBadgeClass = (status) => {
    if (status === 'Confirmed') return 'badge badge-success'
    if (status === 'Pending') return 'badge badge-warning'
    if (status === 'Cancelled') return 'badge badge-info'
    return 'badge'
  }

  const startEdit = (appt) => {
    setEditingId(appt.id)
    setEditForm({
      doctor: appt.doctor,
      specialization: appt.specialization,
      date: appt.date,
      time: appt.time.slice(0, 5),
      type: appt.type,
      symptoms: appt.symptoms,
    })
    setError('')
    setSuccess('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm(defaultEditForm)
  }

  const saveEdit = async () => {
    if (!editingId) return
    if (!editForm.date || !editForm.time || !editForm.symptoms.trim()) {
      setError('Date, time and symptoms are required for update.')
      return
    }
    setSubmitting(true)
    try {
      await updateAppointment(editingId, {
        doctor: editForm.doctor,
        specialization: editForm.specialization,
        appointmentDate: editForm.date,
        appointmentTime: editForm.time,
        type: editForm.type,
        symptoms: editForm.symptoms.trim(),
      })
      cancelEdit()
    } finally {
      setSubmitting(false)
    }
  }

  const remove = async (id) => {
    const ok = window.confirm('Delete this appointment?')
    if (!ok) return
    await deleteAppointment(id)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">My appointments</h2>
          <p className="page-subtitle">
            View all your pending, confirmed, completed, and cancelled appointments in one
            place.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Appointments list</h3>
          <span className="card-meta">Connected to backend API</span>
        </div>
        <div className="card-body">
          {loading && <p className="form-helper">Loading appointments...</p>}
          {success && <p className="form-success">{success}</p>}
          {error && <p className="form-error">{error}</p>}

          {editingId && (
            <div className="card" style={{ marginBottom: '0.8rem' }}>
              <h4 className="card-title" style={{ marginBottom: '0.7rem' }}>
                Edit appointment
              </h4>
              <div className="form-grid">
                <input
                  className="form-input"
                  value={editForm.doctor}
                  onChange={(e) => setEditForm((p) => ({ ...p, doctor: e.target.value }))}
                />
                <input
                  className="form-input"
                  value={editForm.specialization}
                  onChange={(e) =>
                    setEditForm((p) => ({ ...p, specialization: e.target.value }))
                  }
                />
                <input
                  className="form-input"
                  type="date"
                  value={editForm.date}
                  onChange={(e) => setEditForm((p) => ({ ...p, date: e.target.value }))}
                />
                <input
                  className="form-input"
                  type="time"
                  value={editForm.time}
                  onChange={(e) => setEditForm((p) => ({ ...p, time: e.target.value }))}
                />
                <select
                  className="form-select"
                  value={editForm.type}
                  onChange={(e) => setEditForm((p) => ({ ...p, type: e.target.value }))}
                >
                  <option value="Video">Video</option>
                  <option value="Chat">Chat</option>
                </select>
              </div>
              <textarea
                className="form-textarea"
                style={{ marginTop: '0.6rem' }}
                value={editForm.symptoms}
                onChange={(e) => setEditForm((p) => ({ ...p, symptoms: e.target.value }))}
              />
              <div className="form-footer">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={saveEdit}
                  disabled={submitting}
                >
                  {submitting ? 'Saving...' : 'Save changes'}
                </button>
                <button type="button" className="btn btn-outline btn-sm" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Specialisation</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.doctor}</td>
                    <td>{appt.specialization}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>{appt.type}</td>
                    <td>
                      <span className={statusBadgeClass(appt.status)}>{appt.status}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => startEdit(appt)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          onClick={() => remove(appt.id)}
                        >
                          Delete
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

export default PatientAppointments

