import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import PatientLayout from './patient/PatientLayout'
import PatientDashboard from './patient/PatientDashboard'
import PatientBookAppointment from './patient/PatientBookAppointment'
import PatientAppointments from './patient/PatientAppointments'
import PatientPrescriptions from './patient/PatientPrescriptions'
import PatientMedicalRecords from './patient/PatientMedicalRecords'
import PatientLabReports from './patient/PatientLabReports'
import PatientProfile from './patient/PatientProfile'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/AdminDashboard'
import AdminUsers from './admin/AdminUsers'
import AdminAppointments from './admin/AdminAppointments'
import AdminSettings from './admin/AdminSettings'
import AdminSecurity from './admin/AdminSecurity'
import DoctorLayout from './doctor/DoctorLayout'
import DoctorDashboard from './doctor/DoctorDashboard'
import DoctorAppointments from './doctor/DoctorAppointments'
import DoctorPatients from './doctor/DoctorPatients'
import DoctorPrescriptions from './doctor/DoctorPrescriptions'
import DoctorProfile from './doctor/DoctorProfile'
import PharmacistLayout from './pharmacist/PharmacistLayout'
import PharmacistDashboard from './pharmacist/PharmacistDashboard'
import PharmacistPrescriptions from './pharmacist/PharmacistPrescriptions'
import PharmacistOrders from './pharmacist/PharmacistOrders'
import PharmacistMedications from './pharmacist/PharmacistMedications'
import PharmacistProfile from './pharmacist/PharmacistProfile'

function App() {
  return (
    <AuthProvider>
      <div className="app-root">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/doctor"
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <DoctorLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DoctorDashboard />} />
              <Route path="dashboard" element={<DoctorDashboard />} />
              <Route path="appointments" element={<DoctorAppointments />} />
              <Route path="patients" element={<DoctorPatients />} />
              <Route path="prescriptions" element={<DoctorPrescriptions />} />
              <Route path="profile" element={<DoctorProfile />} />
            </Route>
            <Route
              path="/patient"
              element={
                <ProtectedRoute allowedRoles={['patient']}>
                  <PatientLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<PatientDashboard />} />
              <Route path="dashboard" element={<PatientDashboard />} />
              <Route path="book-appointment" element={<PatientBookAppointment />} />
              <Route path="appointments" element={<PatientAppointments />} />
              <Route path="prescriptions" element={<PatientPrescriptions />} />
              <Route path="medical-records" element={<PatientMedicalRecords />} />
              <Route path="lab-reports" element={<PatientLabReports />} />
              <Route path="profile" element={<PatientProfile />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="appointments" element={<AdminAppointments />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="security" element={<AdminSecurity />} />
            </Route>
            <Route
              path="/pharmacist"
              element={
                <ProtectedRoute allowedRoles={['pharmacist']}>
                  <PharmacistLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<PharmacistDashboard />} />
              <Route path="dashboard" element={<PharmacistDashboard />} />
              <Route path="prescriptions" element={<PharmacistPrescriptions />} />
              <Route path="orders" element={<PharmacistOrders />} />
              <Route path="medications" element={<PharmacistMedications />} />
              <Route path="profile" element={<PharmacistProfile />} />
            </Route>
          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
