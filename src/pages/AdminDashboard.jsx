import { useState } from 'react'

const initialUsers = [
  { id: 1, name: 'Dr. Aditi Sharma', role: 'Doctor', status: 'active' },
  { id: 2, name: 'Rahul Mehta', role: 'Patient', status: 'active' },
  { id: 3, name: 'CityCare Pharmacy', role: 'Pharmacist', status: 'inactive' },
  { id: 4, name: 'Clinic Admin', role: 'Admin', status: 'active' },
]

const AdminDashboard = () => {
  const [users, setUsers] = useState(initialUsers)

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user,
      ),
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Admin user management</h2>
          <p className="page-subtitle">
            Manage platform settings, user accounts, and overall data access for secure
            virtual healthcare services.
          </p>
        </div>
        <div className="badge-pill">Admin console</div>
      </div>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <h3>Filters</h3>
          <p>
            This panel is static in the demo, but in a real app you could filter by role,
            status, and clinic.
          </p>
        </aside>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Users</h3>
            <span className="card-meta">{users.length} total</span>
          </div>

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
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className="status-text">
                        <span
                          className={`status-dot ${
                            user.status === 'active' ? 'status-active' : 'status-inactive'
                          }`}
                        />
                        {user.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={() => toggleStatus(user.id)}
                      >
                        {user.status === 'active' ? 'Deactivate' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="card" style={{ marginTop: '1.25rem' }}>
        <div className="card-header">
          <h3 className="card-title">Platform overview &amp; security (conceptual)</h3>
          <span className="card-meta">Static explanation</span>
        </div>
        <div className="card-body">
          <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem' }}>
            <li>
              In a real deployment, admins would configure password policies, audit logs,
              and data retention for medical records and lab reports.
            </li>
            <li>
              Role‑based access control ensures doctors, patients, and pharmacists only see
              the data they are allowed to access.
            </li>
            <li>
              All of this page is front‑end only in this demo – no real data or security
              settings are being changed.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard

