import { useOutletContext } from 'react-router-dom'

const PatientAppointments = () => {
  const { appointments, setAppointments } = useOutletContext()

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.map((appt) =>
        appt.id === id ? { ...appt, status: 'Cancelled' } : appt,
      ),
    )
  }

  const statusBadgeClass = (status) => {
    if (status === 'Confirmed') return 'badge badge-success'
    if (status === 'Pending') return 'badge badge-warning'
    if (status === 'Cancelled') return 'badge badge-info'
    return 'badge'
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
          <span className="card-meta">Frontend mock data</span>
        </div>
        <div className="card-body">
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
                          onClick={() => {
                            // UI only – no real video/chat integration
                            // eslint-disable-next-line no-alert
                            alert('Joining consultation (demo only).')
                          }}
                        >
                          Join
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          disabled={appt.status === 'Cancelled' || appt.status === 'Completed'}
                          onClick={() => cancelAppointment(appt.id)}
                        >
                          Cancel
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

