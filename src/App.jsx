import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import AddFaculty from './components/AddFaculty';
import FacultyAuth from './components/FacultyAuth';
import Navbar from './components/Navbar';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? (
    <>
      <Navbar />
      {children}
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

function App() {
  // return (
  //   <Router>
  //     <div className="min-h-screen bg-gray-100">
  //       <Routes>
  //         <Route path="/" element={<AdminLogin />} />
  //         <Route path="/dashboard" element={<Dashboard />} />
  //         <Route path="/add-faculty" element={<AddFaculty />} />
  //         <Route path="/faculty-auth" element={<FacultyAuth />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
  // }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<FacultyAuth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-faculty"
            element={
              <ProtectedRoute>
                <AddFaculty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              // <ProtectedRoute>
                <AdminLogin />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
