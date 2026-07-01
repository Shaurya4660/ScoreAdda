import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSportsCricket } from 'react-icons/md';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center py-5 position-relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2500&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to ensure background is not too distracting */}
      <div className="position-absolute w-100 h-100 top-0 start-0 bg-black opacity-50"></div>

      {/* Premium Login Card */}
      <div 
        className="card border-0 shadow-lg position-relative z-1 p-4 p-md-5 rounded-4" 
        style={{ 
          maxWidth: '450px', 
          width: '100%', 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="text-center mb-4">
          <Link to="/" className="text-decoration-none d-inline-flex align-items-center mb-3">
            <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2 d-flex">
              <MdSportsCricket className="text-primary fs-3" />
            </div>
            <span className="fs-2 fw-bold text-dark">ScoreAdda</span>
          </Link>
          <h2 className="fw-bold text-dark mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-secondary mb-0">{isLogin ? 'Login to your account' : 'Join the ultimate cricket community'}</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label text-dark fw-medium small">Full Name</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light border-0 shadow-none fs-6" 
                placeholder="John Doe" 
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label text-dark fw-medium small">Email address</label>
            <input 
              type="email" 
              className="form-control form-control-lg bg-light border-0 shadow-none fs-6" 
              placeholder="name@example.com" 
            />
          </div>
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label text-dark fw-medium small mb-0">Password</label>
              {isLogin && <a href="#" className="text-primary text-decoration-none small fw-medium">Forgot?</a>}
            </div>
            <input 
              type="password" 
              className="form-control form-control-lg bg-light border-0 shadow-none fs-6 mt-2" 
              placeholder="••••••••" 
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100 py-3 mb-4 rounded-pill fw-bold shadow-sm">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-2">
          <p className="text-secondary small mb-0">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="btn btn-link text-primary fw-bold p-0 text-decoration-none align-baseline" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
