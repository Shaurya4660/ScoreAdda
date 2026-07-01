import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiSearch, FiUser } from 'react-icons/fi';
import { MdSportsCricket } from 'react-icons/md';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg sticky-top glass-card border-0 rounded-0 border-bottom`} style={{ zIndex: 1050 }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/">
          <MdSportsCricket className="text-primary me-2 fs-2" />
          <span className="text-gradient">ScoreAdda</span>
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/live">Live Scores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/schedule">IPL 2026</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/points-table">Points Table</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/ipl-teams">Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/news">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/fantasy">Fantasy Tips</NavLink>
            </li>
          </ul>
          
          <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0 gap-3">
            <Link to="/search" className="btn btn-link text-neon-blue p-0" aria-label="Search">
              <FiSearch className="fs-5" />
            </Link>
            <Link to="/auth" className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2">
              <FiUser /> <span className="d-none d-xl-inline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
