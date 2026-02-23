import { useOutletContext } from 'react-router-dom'

const AdminSecurity = () => {
  const { logs } = useOutletContext()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Security &amp; logs</h2>
          <p className="page-subtitle">
            UI‑only representation of login attempts, prescription events, and account
            updates for audit purposes.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Activity logs</h3>
          <span className="card-meta">Mock events</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.time}</td>
                    <td>{log.type}</td>
                    <td>{log.detail}</td>
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

export default AdminSecurity

