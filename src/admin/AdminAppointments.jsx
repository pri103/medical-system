import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminAppointments = () => {
  const { appointments } = useOutletContext()
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredAppointments =
    statusFilter === 'All'
      ? appointments
      : appointments.filter((a) => a.status === statusFilter)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Appointment oversight</h2>
          <p className="page-subtitle">
            View and conceptually monitor all appointments across the virtual consultation
            system.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Appointments</h3>
          <div>
            <label className="form-label" htmlFor="apptFilter">
              Filter by status
            </label>
            <select
              id="apptFilter"
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Doctor</th>
                  <th>Patient</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.doctor}</td>
                    <td>{a.patient}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.status}</td>
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

export default AdminAppointments

