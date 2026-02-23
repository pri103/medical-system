import { useOutletContext } from 'react-router-dom'

const PharmacistDashboard = () => {
  const { prescriptions, orders } = useOutletContext()

  const totalToday = prescriptions.length
  const pendingVerification = prescriptions.filter((p) => p.status === 'To Verify').length
  const ordersReady = orders.filter((o) => o.status === 'Ready').length
  const ordersPreparing = orders.filter((o) => o.status === 'Preparing').length

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Pharmacist dashboard</h2>
          <p className="page-subtitle">
            Overview of prescriptions, order queues, and fulfilment activity for today.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Today&apos;s summary</h3>
        </div>
        <div className="card-body">
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-label">Total prescriptions today</div>
              <div className="summary-value">{totalToday}</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Pending verification</div>
              <div className="summary-value">{pendingVerification}</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Orders ready</div>
              <div className="summary-value">{ordersReady}</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">Orders preparing</div>
              <div className="summary-value">{ordersPreparing}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PharmacistDashboard

