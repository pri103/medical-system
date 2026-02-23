import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { user, getDashboardPath } = useAuth()

  const goToEntryPoint = () => {
    if (user) {
      navigate(getDashboardPath(user.role))
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="page">
      <section className="hero">
        <div>
          <h1 className="hero-title">
            Online medical system for{' '}
            <span className="hero-highlight">virtual consultations</span>.
          </h1>
          <p className="hero-description">
            Connect patients, doctors, pharmacists, and admins in one secure platform.
            Book remote appointments, receive e‑prescriptions, and access medical records
            and lab reports from anywhere.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={goToEntryPoint}>
              Book an appointment
            </button>
            <button type="button" className="btn btn-outline" onClick={goToEntryPoint}>
              Doctor dashboard
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-label">Today&apos;s virtual appointments</div>
            <div className="stat-value">32</div>
            <div className="stat-meta">Video & voice consultations</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Doctors online</div>
            <div className="stat-value">12</div>
            <div className="stat-meta">Issuing e‑prescriptions in minutes</div>
          </div>
        </div>
      </section>

      <div className="grid-two" style={{ marginTop: '1.5rem' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">For patients & doctors</h3>
          </div>
          <div className="card-body">
            <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem' }}>
              <li>Book and conduct secure virtual consultations.</li>
              <li>Receive and issue structured e‑prescriptions.</li>
              <li>Review past visits, medical history, and lab reports.</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">For admins & pharmacists</h3>
          </div>
          <div className="card-body">
            <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem' }}>
              <li>Manage platform users, roles, and data access.</li>
              <li>Track e‑prescription queues and fulfilment.</li>
              <li>Ensure data security and compliance (demo‑only here).</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="features-grid">
        <div className="feature-card">
          <h3 className="feature-title">End‑to‑end appointment flow</h3>
          <p className="feature-text">
            From booking to virtual consultation and e‑prescription preview, the app
            walks through a realistic appointment journey.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Digital records &amp; labs</h3>
          <p className="feature-text">
            Sample medical records and lab reports show how a digital health record
            portal can be organised for patients and doctors.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Role‑aware navigation</h3>
          <p className="feature-text">
            Role‑based dashboards, protected routes, and a smart navbar simulate how
            modern healthcare platforms keep data secure.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2 className="section-title">How MediConsult works</h2>
        <p className="section-subtitle">
          A simple, step‑by‑step virtual care journey that matches the project
          requirements.
        </p>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-badge">1</span>
            <h3 className="step-title">Patient registers &amp; logs in</h3>
            <p className="step-text">
              The patient creates an account, chooses a role, and signs in to the portal.
            </p>
          </div>
          <div className="step-card">
            <span className="step-badge">2</span>
            <h3 className="step-title">Patient books an appointment</h3>
            <p className="step-text">
              Appointment details such as doctor, date, time, and symptoms are captured
              through the booking form.
            </p>
          </div>
          <div className="step-card">
            <span className="step-badge">3</span>
            <h3 className="step-title">Doctor conducts virtual consultation</h3>
            <p className="step-text">
              The doctor uses the dashboard to review upcoming visits and conduct
              consultations.
            </p>
          </div>
          <div className="step-card">
            <span className="step-badge">4</span>
            <h3 className="step-title">Doctor issues e‑prescription</h3>
            <p className="step-text">
              Using the e‑prescription form, the doctor records diagnosis and medicines
              for the patient.
            </p>
          </div>
          <div className="step-card">
            <span className="step-badge">5</span>
            <h3 className="step-title">Pharmacist processes prescription</h3>
            <p className="step-text">
              The pharmacist workspace simulates reviewing incoming prescriptions and
              order queues.
            </p>
          </div>
          <div className="step-card">
            <span className="step-badge">6</span>
            <h3 className="step-title">Patient accesses records &amp; reports</h3>
            <p className="step-text">
              Sample medical records and lab reports show how a digital history could be
              presented to patients.
            </p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2 className="section-title">Core system modules</h2>
        <p className="section-subtitle">
          A breakdown of the main virtual healthcare modules implemented or simulated in
          this project.
        </p>
        <div className="modules-grid">
          <div className="module-card">
            <h3 className="module-title">Authentication &amp; role management</h3>
            <p className="module-text">
              Front‑end role selection, localStorage‑based session, and role‑aware
              dashboards.
            </p>
          </div>
          <div className="module-card">
            <h3 className="module-title">Appointment booking system</h3>
            <p className="module-text">
              Patient appointment form with doctor selection, date, time, and symptoms.
            </p>
          </div>
          <div className="module-card">
            <h3 className="module-title">Virtual consultation interface</h3>
            <p className="module-text">
              Doctor dashboard that surfaces upcoming visits and patient snapshots.
            </p>
          </div>
          <div className="module-card">
            <h3 className="module-title">E‑prescription management</h3>
            <p className="module-text">
              Quick e‑prescription UI for diagnosis and medicines, viewable by patients
              and pharmacists in the concept flow.
            </p>
          </div>
          <div className="module-card">
            <h3 className="module-title">Digital medical records</h3>
            <p className="module-text">
              Sample visit history and lab results to represent a digital health record
              system.
            </p>
          </div>
          <div className="module-card">
            <h3 className="module-title">Pharmacy fulfilment &amp; admin</h3>
            <p className="module-text">
              Pharmacist queue and admin monitoring dashboards for a complete flow.
            </p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2 className="section-title">Secure &amp; role‑aware design</h2>
        <p className="section-subtitle">
          Even without a backend, the app simulates security concepts via protected
          routing and role‑based navigation.
        </p>
        <div className="card security-card">
          <ul className="security-list">
            <li>Protected routes for each role using React Router.</li>
            <li>Role‑based dashboard redirection after login or registration.</li>
            <li>Conditional navbar links based on the current user role.</li>
            <li>localStorage used to simulate a lightweight session.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home

