const PharmacistDashboard = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Pharmacist workspace</h2>
          <p className="page-subtitle">
            Manage e‑prescriptions, track fulfilment queues and orders, and provide
            accurate medication information.
          </p>
        </div>
        <div className="badge-pill">Pharmacist</div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Incoming prescriptions</h3>
            <span className="card-meta">Static sample data</span>
          </div>
          <div className="card-body">
            <ul className="appointments-list">
              <li className="appointment-card">
                <div className="appointment-main">
                  <div className="appointment-name">Rahul Sharma</div>
                  <div className="appointment-meta">
                    Amoxicillin 500mg • Dr. Aditi Sharma
                  </div>
                </div>
                <span className="badge badge-warning">To verify</span>
              </li>
              <li className="appointment-card">
                <div className="appointment-main">
                  <div className="appointment-name">Ananya Verma</div>
                  <div className="appointment-meta">
                    Cetirizine 10mg • Dr. Mehta
                  </div>
                </div>
                <span className="badge badge-success">Ready</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Order tracking &amp; queue summary</h3>
            <span className="card-meta">Today</span>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Status</th>
                  <th>ETA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD‑1023</td>
                  <td>Preparing</td>
                  <td>15 min</td>
                </tr>
                <tr>
                  <td>#ORD‑1018</td>
                  <td>Ready for pickup</td>
                  <td>Now</td>
                </tr>
              </tbody>
            </table>
            <p className="form-helper" style={{ marginTop: '0.5rem' }}>
              In a production system, this would integrate with inventory, delivery
              partners, and patient notifications.
            </p>
            <p className="form-helper" style={{ marginTop: '0.25rem' }}>
              Pharmacists would also surface medication information (interactions, dosage,
              counselling points) alongside each prescription.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PharmacistDashboard

