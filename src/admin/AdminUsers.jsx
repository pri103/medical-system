import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminUsers = () => {
  const { users, setUsers } = useOutletContext()
  const [roleFilter, setRoleFilter] = useState('All')

  const filteredUsers = useMemo(
    () => (roleFilter === 'All' ? users : users.filter((u) => u.role === roleFilter)),
    [users, roleFilter],
  )

  const toggleStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u,
      ),
    )
  }

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id))
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">User management</h2>
          <p className="page-subtitle">
            Front‑end simulation of admin capabilities for managing doctors, patients,
            pharmacists, and admins.
          </p>
        </div>
        <div className="badge-pill">Accounts</div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Users</h3>
          <div>
            <label className="form-label" htmlFor="roleFilter">
              Filter by role
            </label>
            <select
              id="roleFilter"
              className="form-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
              <option value="Pharmacist">Pharmacist</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.role}</td>
                    <td>
                      <span className="status-text">
                        <span
                          className={`status-dot ${
                            u.status === 'Active' ? 'status-active' : 'status-inactive'
                          }`}
                        />
                        {u.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          onClick={() => toggleStatus(u.id)}
                        >
                          {u.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          onClick={() => deleteUser(u.id)}
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

export default AdminUsers

