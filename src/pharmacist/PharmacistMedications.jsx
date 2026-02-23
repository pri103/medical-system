import { useOutletContext } from 'react-router-dom'

const PharmacistMedications = () => {
  const { medications } = useOutletContext()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Medication information</h2>
          <p className="page-subtitle">
            Static examples of how a pharmacist could present usage, side effects, and
            interaction notes within the virtual consultation ecosystem.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Medicines</h3>
        </div>
        <div className="card-body">
          <div className="appointments-list">
            {medications.map((m) => (
              <div key={m.name} className="appointment-card">
                <div className="appointment-main">
                  <div className="appointment-name">{m.name}</div>
                  <div className="appointment-meta">
                    <strong>Usage:</strong> {m.usage}
                  </div>
                  <div className="appointment-meta">
                    <strong>Side effects:</strong> {m.sideEffects}
                  </div>
                  <div className="appointment-meta">
                    <strong>Interaction note:</strong> {m.interactionNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PharmacistMedications

