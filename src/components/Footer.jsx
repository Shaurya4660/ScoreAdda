import React from 'react';
import { Link } from 'react-router-dom';
import { MdSportsCricket } from 'react-icons/md';
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="glass-card mt-5 pt-5 pb-3 border-0 border-top rounded-0">
      <div className="container">
        <div className="row gy-4 mb-4">
          <div className="col-lg-4 col-md-6">
            <Link className="d-flex align-items-center fw-bold fs-3 mb-3" to="/">
              <MdSportsCricket className="text-primary me-2" />
              <span className="text-gradient">ScoreAdda</span>
            </Link>
            <p className="text-secondary mb-4 pe-lg-5">
              Your ultimate destination for lightning-fast live cricket scores, breaking news, detailed stats, and expert fantasy tips. Built for the modern cricket fan.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex hover-scale"><FiTwitter /></a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex hover-scale"><FiFacebook /></a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex hover-scale"><FiInstagram /></a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex hover-scale"><FiYoutube /></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-4 fw-bold">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/live" className="text-secondary text-decoration-none hover-scale d-inline-block">Live Scores</Link></li>
              <li><Link to="/schedule" className="text-secondary text-decoration-none hover-scale d-inline-block">IPL Schedule</Link></li>
              <li><Link to="/points-table" className="text-secondary text-decoration-none hover-scale d-inline-block">Points Table</Link></li>
              <li><Link to="/ipl-teams" className="text-secondary text-decoration-none hover-scale d-inline-block">Teams</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-4 fw-bold">Coverage</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/news" className="text-secondary text-decoration-none hover-scale d-inline-block">Cricket News</Link></li>
              <li><Link to="/fantasy" className="text-secondary text-decoration-none hover-scale d-inline-block">Fantasy Tips</Link></li>
              <li><Link to="/players" className="text-secondary text-decoration-none hover-scale d-inline-block">Player Profiles</Link></li>
              <li><Link to="/admin" className="text-secondary text-decoration-none hover-scale d-inline-block">Dashboard</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-4 fw-bold">Subscribe to Newsletter</h5>
            <p className="text-secondary">Get the latest cricket updates directly in your inbox.</p>
            <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-control bg-transparent border-secondary text-body" placeholder="Email address" required />
              <button type="submit" className="btn btn-primary px-4">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="border-top border-secondary opacity-25 my-4"></div>
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary small">
          <p className="mb-2 mb-md-0">&copy; 2026 ScoreAdda. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-secondary text-decoration-none">Terms of Service</a>
            <a href="#" className="text-secondary text-decoration-none">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
