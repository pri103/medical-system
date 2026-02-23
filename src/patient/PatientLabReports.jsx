import { useOutletContext } from 'react-router-dom'

const PatientLabReports = () => {
  const { labReports } = useOutletContext()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Lab reports</h2>
          <p className="page-subtitle">
            Track your diagnostic tests, see which reports are available, and open them
            in this simulated UI.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Lab report list</h3>
          <span className="card-meta">Mock data only</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Test name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {labReports.map((r) => (
                  <tr key={r.id}>
                    <td>{r.testName}</td>
                    <td>{r.date}</td>
                    <td>
                      <span
                        className={
                          r.status === 'Available' ? 'badge badge-success' : 'badge badge-warning'
                        }
                      >
                        {r.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={() => {
                          // eslint-disable-next-line no-alert
                          alert(
                            r.status === 'Available'
                              ? 'Opening lab report (demo only).'
                              : 'Report not yet available (demo only).',
                          )
                        }}
                      >
                        View report
                      </button>
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

export default PatientLabReports

