const About = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">About MediConsult</h2>
          <p className="page-subtitle">
            MediConsult is a virtual healthcare web application that simulates a complete
            online medical consultation platform, built entirely with front‑end logic.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">🌐 About MediConsult</h3>
          <span className="card-meta">Virtual healthcare demo</span>
        </div>
        <div className="card-body">
          <p style={{ fontSize: '0.9rem', color: '#4b5563', marginBottom: '0.6rem' }}>
            MediConsult is designed to simulate how a real online medical system works. It
            lets patients connect with doctors remotely, book appointments, receive
            e‑prescriptions, and conceptually access medical records and lab reports – all
            within a role‑aware, React‑based interface.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
            The project focuses on user experience, role‑based dashboards, and protected
            navigation flows, without relying on a backend server.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">🎯 Key features</h3>
        </div>
        <div className="card-body">
          <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem' }}>
            <li>Online appointment booking experience.</li>
            <li>Virtual consultation oriented dashboards.</li>
            <li>E‑prescription generation and basic management UI.</li>
            <li>Digital medical record and lab report previews.</li>
            <li>Role‑based dashboard access for each user type.</li>
            <li>Protected routes with simulated authentication.</li>
            <li>Responsive and user‑friendly interface.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">👥 User roles &amp; responsibilities</h3>
        </div>
        <div className="card-body" style={{ fontSize: '0.9rem', color: '#4b5563' }}>
          <h4 style={{ margin: '0 0 0.25rem', fontWeight: 600 }}>🧑‍⚕️ Admin</h4>
          <ul style={{ paddingLeft: '1.1rem', marginTop: 0, marginBottom: '0.6rem' }}>
            <li>Manage platform settings and high‑level configuration.</li>
            <li>Monitor and oversee user accounts and roles.</li>
            <li>Ensure role‑based access control rules are respected.</li>
            <li>Oversee overall system functionality and health.</li>
          </ul>

          <h4 style={{ margin: '0 0 0.25rem', fontWeight: 600 }}>👨‍⚕️ Doctor</h4>
          <ul style={{ paddingLeft: '1.1rem', marginTop: 0, marginBottom: '0.6rem' }}>
            <li>Conduct virtual consultations using the doctor dashboard.</li>
            <li>Review and conceptually manage patient records.</li>
            <li>Generate and issue e‑prescriptions from the UI.</li>
            <li>View appointment schedules and upcoming visits.</li>
          </ul>

          <h4 style={{ margin: '0 0 0.25rem', fontWeight: 600 }}>🧑 Patient</h4>
          <ul style={{ paddingLeft: '1.1rem', marginTop: 0, marginBottom: '0.6rem' }}>
            <li>Register and book appointments for virtual care.</li>
            <li>Attend consultations through the patient experience.</li>
            <li>Preview medical history and lab report examples.</li>
            <li>Receive e‑prescriptions issued by doctors.</li>
          </ul>

          <h4 style={{ margin: '0 0 0.25rem', fontWeight: 600 }}>💊 Pharmacist</h4>
          <ul style={{ paddingLeft: '1.1rem', marginTop: 0, marginBottom: 0 }}>
            <li>View and manage sample e‑prescription queues.</li>
            <li>Track medication orders and fulfilment status.</li>
            <li>Provide medication information within the UI concept.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">🔐 Role‑based access simulation</h3>
          <span className="card-meta">Frontend‑only auth</span>
        </div>
        <div className="card-body">
          <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.9rem' }}>
            <li>React Router is used to protect role‑specific routes.</li>
            <li>LocalStorage persists the selected role as a pseudo‑session.</li>
            <li>Dashboards are chosen via role‑based redirection logic.</li>
            <li>The navbar renders navigation items conditionally per role.</li>
            <li>
              Each user can only access their own dashboard; other dashboards redirect
              automatically.
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">🛠️ Technology stack &amp; objective</h3>
        </div>
        <div className="card-body" style={{ fontSize: '0.9rem', color: '#4b5563' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            Built with React, React Router DOM, the Context API, and localStorage for
            role simulation, along with custom CSS for the modern medical UI.
          </p>
          <p style={{ marginBottom: '0.75rem' }}>
            The goal of MediConsult is to demonstrate how virtual healthcare systems can
            implement role‑based access control, appointment workflows, and digital health
            record management concepts in a single‑page web application.
          </p>
          <h4 style={{ margin: '0 0 0.25rem', fontWeight: 600 }}>🔮 Future enhancements</h4>
          <ul style={{ paddingLeft: '1.1rem', marginTop: 0 }}>
            <li>Backend integration with Node.js/Express or similar.</li>
            <li>Database connectivity (for example MongoDB or PostgreSQL).</li>
            <li>Video call integration for real‑time consultations.</li>
            <li>Secure JWT authentication and real user management.</li>
            <li>Payment gateway integration for paid consultations.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

