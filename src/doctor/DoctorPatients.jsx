import { useOutletContext } from 'react-router-dom'

const DoctorPatients = () => {
  const { patients } = useOutletContext()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Patient records</h2>
          <p className="page-subtitle">
            Explore your patient panel, their diagnosis history, and notes in a
            read‑only, front‑end simulation.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Patients</h3>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last visit</th>
                  <th>Diagnosis history</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.lastVisit}</td>
                    <td>{p.diagnosisHistory.join(', ')}</td>
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

export default DoctorPatients

