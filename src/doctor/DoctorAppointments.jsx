import { useOutletContext } from 'react-router-dom'

const DoctorAppointments = () => {
  const { appointments, setAppointments } = useOutletContext()

  const updateStatus = (id, status) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, status } : a)))
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
            completed. All state lives only in the browser.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Scheduled appointments</h3>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.patient}</td>
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
                            // eslint-disable-next-line no-alert
                            alert('Joining consultation (demo only).')
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

