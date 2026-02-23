import { useOutletContext } from 'react-router-dom'

const PharmacistOrders = () => {
  const { orders, setOrders } = useOutletContext()

  const cycleStatus = (status) => {
    if (status === 'Preparing') return 'Ready'
    if (status === 'Ready') return 'Completed'
    return 'Completed'
  }

  const updateStatus = (id) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status: cycleStatus(o.status) } : o)),
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Orders tracking</h2>
          <p className="page-subtitle">
            Track each order&apos;s status and estimated time to readiness. This
            implementation is front‑end only.
          </p>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Orders</h3>
        </div>
        <div className="card-body">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Status</th>
                  <th>ETA</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.status}</td>
                    <td>{o.eta}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={() => updateStatus(o.id)}
                      >
                        Update status
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

export default PharmacistOrders

