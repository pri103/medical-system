import { useOutletContext } from 'react-router-dom'

const AdminSettings = () => {
  const { settings, setSettings } = useOutletContext()

  const handleToggleMaintenance = () => {
    setSettings({ ...settings, maintenanceMode: !settings.maintenanceMode })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings({ ...settings, [name]: Number(value) })
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Platform settings</h2>
          <p className="page-subtitle">
            Simulated configuration panel for appointment behaviour and security
            guidelines.
          </p>
        </div>
      </div>

      <div className="grid-two">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">General settings</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label className="form-label">Maintenance mode</label>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleToggleMaintenance}
              >
                {settings.maintenanceMode ? 'Disable maintenance' : 'Enable maintenance'}
              </button>
              <span className="form-helper">
                Status:{' '}
                <strong>{settings.maintenanceMode ? 'On (simulated)' : 'Off (simulated)'}</strong>
              </span>
            </div>

            <div className="form-grid" style={{ marginTop: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="appointmentDuration">
                  Appointment duration (minutes)
                </label>
                <input
                  id="appointmentDuration"
                  name="appointmentDuration"
                  type="number"
                  className="form-input"
                  value={settings.appointmentDuration}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="maxDailyAppointments">
                  Max daily appointments
                </label>
                <input
                  id="maxDailyAppointments"
                  name="maxDailyAppointments"
                  type="number"
                  className="form-input"
                  value={settings.maxDailyAppointments}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Password policy (conceptual)</h3>
          </div>
          <div className="card-body">
            <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem' }}>
              <li>Minimum 8 characters, at least one uppercase letter and one number.</li>
              <li>Passwords should expire every 90 days (conceptual only).</li>
              <li>Multi‑factor authentication recommended for admin and doctor accounts.</li>
              <li>All policies here are informational and not enforced in this demo.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminSettings

