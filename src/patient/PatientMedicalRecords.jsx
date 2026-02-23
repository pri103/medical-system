import { useOutletContext } from 'react-router-dom'

const PatientMedicalRecords = () => {
  const { records } = useOutletContext()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Medical records</h2>
          <p className="page-subtitle">
            Review your consultation history, diagnoses, and doctor notes. Reports are
            simulated as downloadable documents.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Consultation history</h3>
          <span className="card-meta">Sample data</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Diagnosis</th>
                  <th>Doctor notes</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id}>
                    <td>{r.date}</td>
                    <td>{r.doctor}</td>
                    <td>{r.diagnosis}</td>
                    <td>{r.notes}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={() => {
                          // eslint-disable-next-line no-alert
                          alert('Downloading report (demo only).')
                        }}
                      >
                        Download report
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

export default PatientMedicalRecords

