import { useOutletContext } from 'react-router-dom'

const PatientPrescriptions = () => {
  const { prescriptions } = useOutletContext()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">E‑prescriptions</h2>
          <p className="page-subtitle">
            View prescriptions issued during your virtual consultations. All actions here
            are for demonstration only.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Prescription list</h3>
          <span className="card-meta">Static mock data</span>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Medicines</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((p) => (
                  <tr key={p.id}>
                    <td>{p.date}</td>
                    <td>{p.doctor}</td>
                    <td>
                      <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                        {p.medicines.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          onClick={() => {
                            // eslint-disable-next-line no-alert
                            alert('Downloading PDF (demo only).')
                          }}
                        >
                          Download PDF
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            // eslint-disable-next-line no-alert
                            alert('Ordering from pharmacy (demo only).')
                          }}
                        >
                          Order from pharmacy
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

export default PatientPrescriptions

