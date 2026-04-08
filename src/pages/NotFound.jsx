import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="page">
      <section className="card auth-card">
        <h2 className="page-title">404 - Page not found</h2>
        <p className="page-subtitle">The page you requested does not exist.</p>
        <div className="form-footer">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound
