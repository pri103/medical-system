import { useOutletContext } from 'react-router-dom'

const PharmacistPrescriptions = () => {
  const { prescriptions, setPrescriptions } = useOutletContext()

  const updateStatus = (id, status) => {
    setPrescriptions(prescriptions.map((p) => (p.id === id ? { ...p, status } : p)))
  }

  const badgeClass = (status) => {
    if (status === 'To Verify') return 'badge badge-warning'
    if (status === 'Ready') return 'badge badge-success'
    if (status === 'Dispensed') return 'badge badge-info'
    return 'badge'
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Incoming prescriptions</h2>
          <p className="page-subtitle">
            Queue of prescriptions awaiting verification, preparation, or dispensing.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Prescription queue</h3>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Medicines</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {prescriptions.map((p) => (
                  <tr key={p.id}>
                    <td>{p.patient}</td>
                    <td>{p.doctor}</td>
                    <td>{p.medicines.join(', ')}</td>
                    <td>
                      <span className={badgeClass(p.status)}>{p.status}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline"
                          onClick={() => updateStatus(p.id, 'Ready')}
                        >
                          Verify
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => updateStatus(p.id, 'Dispensed')}
                        >
                          Mark as ready
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

export default PharmacistPrescriptions

