import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teamsData } from '../utils/teamsData';
import { FiSearch, FiAward, FiMapPin } from 'react-icons/fi';

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeams = teamsData.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          <span className="text-gradient">IPL Franchises</span>
        </h1>
        <p className="lead text-secondary max-w-2xl mx-auto mb-4">
          Explore all the glitz, glamour, and power of the teams battling for ultimate glory in the world's biggest T20 league.
        </p>
        
        {/* Search Bar */}
        <div className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="input-group glass-card rounded-pill p-1 border-secondary border-opacity-25 shadow-sm">
            <span className="input-group-text bg-transparent border-0 text-secondary ps-3">
              <FiSearch />
            </span>
            <input 
              type="text" 
              className="form-control bg-transparent border-0 shadow-none text-body" 
              placeholder="Search teams by name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="row g-4">
        {filteredTeams.length > 0 ? (
          filteredTeams.map(team => (
            <div key={team.id} className="col-12 col-md-6 col-xl-4">
              <div 
                className="card h-100 border-0 overflow-hidden text-white hover-scale"
                style={{ 
                  background: `linear-gradient(135deg, ${team.color1}, ${team.color2})`,
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
              >
                {/* Banner Overlay */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100" 
                  style={{ 
                    backgroundImage: `url(${team.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    mixBlendMode: 'overlay'
                  }}
                ></div>
                
                <div className="card-body position-relative p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <img 
                      src={team.logo} 
                      alt={team.name} 
                      width="80" 
                      height="80" 
                      className="rounded-circle shadow bg-white p-1"
                    />
                    <div className="badge bg-black bg-opacity-50 fs-6 px-3 py-2 rounded-pill d-flex align-items-center gap-1">
                      <FiAward className="text-warning" /> {team.trophies} Titles
                    </div>
                  </div>
                  
                  <h3 className="card-title fw-bold mb-1">{team.name}</h3>
                  <p className="text-white text-opacity-75 mb-4 d-flex align-items-center gap-1 small">
                    <FiMapPin /> {team.stadium}
                  </p>
                  
                  <div className="mt-auto glass-card bg-black bg-opacity-25 border-0 p-3 mb-3">
                    <p className="mb-1 small text-white text-opacity-75">Captain</p>
                    <p className="mb-0 fw-bold">{team.captain}</p>
                  </div>
                  
                  <Link 
                    to={`/team/${team.id}`} 
                    className="btn btn-light w-100 rounded-pill fw-bold"
                    style={{ color: team.color2 }}
                  >
                    View Team Hub
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-secondary">No teams found matching "{searchTerm}"</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
