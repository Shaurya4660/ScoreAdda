import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { teamsData } from '../utils/teamsData';
import { dummyMatches } from '../utils/dummyData';
import MatchCard from '../components/MatchCard';
import { FiArrowLeft, FiAward, FiMapPin, FiUsers, FiTrendingUp, FiImage, FiClock, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const TeamDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const team = teamsData.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!team) {
    return (
      <div className="container py-5 text-center">
        <h2>Team not found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/ipl-teams')}>Back to Teams</button>
      </div>
    );
  }

  return (
    <div className="pb-5">
      {/* Banner Section */}
      <div 
        className="position-relative text-white"
        style={{ 
          background: `linear-gradient(135deg, ${team.color1}, ${team.color2})`,
          minHeight: '400px',
          paddingTop: '80px'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundImage: `url(${team.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            mixBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="container position-relative z-1">
          <button 
            onClick={() => navigate('/ipl-teams')} 
            className="btn btn-link text-white text-decoration-none p-0 mb-4 d-flex align-items-center gap-2 hover-scale"
          >
            <FiArrowLeft /> Back to Teams
          </button>
          
          <div className="row align-items-center mb-4">
            <div className="col-md-auto text-center text-md-start mb-4 mb-md-0">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="img-fluid rounded-circle shadow-lg bg-white p-2"
                style={{ width: '180px', height: '180px', objectFit: 'contain' }}
              />
            </div>
            <div className="col-md text-center text-md-start">
              <h1 className="display-3 fw-bold mb-2 text-shadow">{team.name}</h1>
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-3 fs-5">
                <span className="badge bg-black bg-opacity-50 rounded-pill px-3 py-2"><FiAward className="text-warning mb-1" /> {team.trophies} IPL Titles</span>
                <span className="text-white text-opacity-75"><FiMapPin className="mb-1" /> {team.stadium}</span>
                <span className="text-white text-opacity-75"><FiUsers className="mb-1" /> Captain: <strong>{team.captain}</strong></span>
              </div>
            </div>
            <div className="col-md-auto mt-4 mt-md-0 d-flex gap-3 justify-content-center">
              <a href="#" className="btn btn-light rounded-circle p-3 shadow-sm hover-scale" style={{ color: team.color1 }}><FiInstagram size={20} /></a>
              <a href="#" className="btn btn-light rounded-circle p-3 shadow-sm hover-scale" style={{ color: team.color1 }}><FiTwitter size={20} /></a>
              <a href="#" className="btn btn-light rounded-circle p-3 shadow-sm hover-scale" style={{ color: team.color1 }}><FiFacebook size={20} /></a>
            </div>
          </div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden" style={{ height: '40px' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-100 h-100" style={{ fill: 'var(--bg-color)' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,155.65,119.53,248.5,95.8,272.76,89.65,297.2,81.18,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-5">
          {/* Main Content Column */}
          <div className="col-lg-8">
            
            {/* Squad Section */}
            <section className="mb-5">
              <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <FiUsers className="text-primary" /> Current Squad
              </h3>
              <div className="row g-3">
                {team.squad.map((player, idx) => (
                  <div className="col-6 col-md-4" key={idx}>
                    <div className="glass-card text-center p-4 hover-scale h-100 d-flex flex-column align-items-center justify-content-center">
                      <div className="rounded-circle overflow-hidden mb-3 border border-3" style={{ width: '80px', height: '80px', borderColor: team.color1 }}>
                        <img src={`https://placehold.co/100x100/${team.color1.replace('#','')}/FFF?text=${player.split(' ')[0]}`} alt={player} className="w-100 h-100 object-fit-cover" />
                      </div>
                      <h6 className="fw-bold mb-0">{player}</h6>
                      <small className="text-secondary">Player</small>
                    </div>
                  </div>
                ))}
                {/* Placeholders for rest of squad */}
                {[...Array(2)].map((_, idx) => (
                  <div className="col-6 col-md-4" key={`ph-${idx}`}>
                    <div className="glass-card text-center p-4 h-100 d-flex flex-column align-items-center justify-content-center bg-body-tertiary opacity-50">
                      <div className="rounded-circle bg-secondary bg-opacity-25 mb-3" style={{ width: '80px', height: '80px' }}></div>
                      <h6 className="fw-bold mb-0 text-secondary">More Players</h6>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team History */}
            <section className="mb-5">
              <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <FiClock className="text-primary" /> Franchise History
              </h3>
              <div className="glass-card p-4 p-md-5">
                <p className="lead">
                  The {team.name} is one of the most prominent franchises in the Indian Premier League. 
                  Playing their home matches at the iconic {team.stadium}, they have built a massive fan base 
                  and a legacy of competitive cricket.
                </p>
                <p className="text-secondary mb-0">
                  Under the leadership of {team.captain}, the team aims to dominate the upcoming season 
                  and add more silverware to their cabinet which currently holds {team.trophies} IPL championships. 
                  Their squad blends international superstars with phenomenal domestic talent.
                </p>
              </div>
            </section>

            {/* Recent Matches */}
            <section>
              <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <FiAward className="text-primary" /> Recent Matches
              </h3>
              <div className="row g-4">
                {dummyMatches.slice(0, 2).map(match => (
                  <div key={match.id} className="col-12 col-md-6">
                    <MatchCard match={match} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="col-lg-4">
            
            {/* Stats Chart Placeholder */}
            <div className="glass-card p-4 mb-5">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <FiTrendingUp className="text-primary" /> Performance Chart
              </h5>
              <div className="bg-body-tertiary rounded-3 p-3 text-center d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <div className="text-secondary">
                  <FiTrendingUp className="display-4 mb-2 opacity-50" />
                  <p className="mb-0">Chart API Integration Pending</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                  <span className="text-secondary">Matches Played</span>
                  <span className="fw-bold">250</span>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                  <span className="text-secondary">Wins</span>
                  <span className="fw-bold text-success">145</span>
                </div>
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                  <span className="text-secondary">Losses</span>
                  <span className="fw-bold text-danger">102</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-secondary">Win Percentage</span>
                  <span className="fw-bold">58.0%</span>
                </div>
              </div>
            </div>

            {/* Jersey Gallery */}
            <div className="glass-card p-4">
              <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <FiImage className="text-primary" /> Team Gallery
              </h5>
              <div className="row g-2">
                {[1, 2, 3, 4].map(num => (
                  <div className="col-6" key={num}>
                    <img 
                      src={`https://placehold.co/300x300/${team.color1.replace('#','')}/FFF?text=Jersey+${num}`} 
                      alt="Jersey" 
                      className="img-fluid rounded hover-scale cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <button className="btn btn-outline-primary w-100 mt-4 rounded-pill">View Full Gallery</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
