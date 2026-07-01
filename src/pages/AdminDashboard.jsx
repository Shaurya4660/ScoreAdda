import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSettings, FiUsers, FiActivity } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white" data-bs-theme="dark">
      {/* Sidebar */}
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark border-end border-secondary" style={{ width: '280px' }}>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 text-primary fw-bold">ScoreAdda Admin</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto gap-2">
          <li className="nav-item">
            <a href="#" className="nav-link active d-flex align-items-center gap-2" aria-current="page">
              <FiActivity /> Live Matches
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white d-flex align-items-center gap-2">
              <FiUsers /> Teams & Players
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white d-flex align-items-center gap-2">
              <FiSettings /> Settings
            </a>
          </li>
          <li>
            <Link to="/" className="nav-link text-white d-flex align-items-center gap-2">
              <FiHome /> Back to Site
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4 bg-black">
        <h2 className="mb-4">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-dark border-secondary">
              <div className="card-body">
                <h5 className="card-title">Live Matches</h5>
                <p className="display-4 fw-bold text-primary">1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark border-secondary">
              <div className="card-body">
                <h5 className="card-title">Active Users</h5>
                <p className="display-4 fw-bold text-success">12,543</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
