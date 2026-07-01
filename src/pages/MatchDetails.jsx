import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyMatches } from '../utils/dummyData';
import { FiActivity, FiUsers, FiClock, FiMapPin, FiBarChart2 } from 'react-icons/fi';

const MatchDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('commentary');
  
  // In real app, fetch by id
  const match = dummyMatches[0]; // Just use first for demo

  return (
    <div>
      {/* Match Header */}
      <div className="bg-gradient-dark py-4 border-bottom border-secondary border-opacity-25">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <span className="live-badge"><FiActivity className="me-1" /> LIVE</span>
            <span className="text-secondary small">Match 34 • {match.format} • {match.venue}</span>
          </div>
          
          <div className="row align-items-center text-center text-md-start">
            {/* Team 1 */}
            <div className="col-md-5 d-flex flex-column flex-md-row align-items-center justify-content-md-end gap-3 mb-3 mb-md-0">
              <h2 className="display-5 fw-bold mb-0 text-white">{match.team1.score} <span className="fs-5 text-secondary">({match.team1.overs})</span></h2>
              <div className="d-flex align-items-center gap-3 flex-row-reverse">
                <img src={match.team1.logo} alt={match.team1.name} width="60" height="60" className="rounded-circle bg-light p-1" />
                <h3 className="mb-0 text-white fw-bold d-none d-md-block">{match.team1.name}</h3>
              </div>
            </div>
            
            {/* VS */}
            <div className="col-md-2 text-center my-3 my-md-0">
              <span className="badge bg-secondary p-2 rounded-circle">VS</span>
            </div>
            
            {/* Team 2 */}
            <div className="col-md-5 d-flex flex-column flex-md-row align-items-center gap-3">
              <div className="d-flex align-items-center gap-3">
                <img src={match.team2.logo} alt={match.team2.name} width="60" height="60" className="rounded-circle bg-light p-1" />
                <h3 className="mb-0 text-white fw-bold d-none d-md-block">{match.team2.name}</h3>
              </div>
              <h2 className="display-5 fw-bold mb-0 text-white">{match.team2.score} <span className="fs-5 text-secondary">({match.team2.overs})</span></h2>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-warning fw-medium mb-0">{match.note} • Current RR: 10.15</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mt-4">
        <ul className="nav nav-tabs border-bottom-0 gap-2 mb-4 overflow-auto flex-nowrap" role="tablist">
          {['commentary', 'scorecard', 'squads', 'stats'].map(tab => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link text-capitalize fw-medium rounded-top-3 ${activeTab === tab ? 'active bg-primary text-white border-primary' : 'text-body border-0'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="glass-card p-4">
              {activeTab === 'commentary' && (
                <div>
                  <h4 className="fw-bold mb-4">Ball by Ball Commentary</h4>
                  <div className="d-flex flex-column gap-3">
                    {/* Dummy Commentary */}
                    <div className="d-flex gap-3 border-bottom pb-3">
                      <div className="flex-shrink-0">
                        <span className="badge bg-primary rounded-pill p-2 fs-6">18.2</span>
                      </div>
                      <div>
                        <p className="mb-1"><span className="fw-bold">Pathirana to Tim David, FOUR!</span> Short and wide, slapped through point for a cracking boundary.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3 border-bottom pb-3">
                      <div className="flex-shrink-0">
                        <span className="badge bg-secondary rounded-pill p-2 fs-6">18.1</span>
                      </div>
                      <div>
                        <p className="mb-1"><span className="fw-bold">Pathirana to Hardik, 1 run.</span> Yorker length, dug out to long on.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'scorecard' && (
                <div>
                  <h4 className="fw-bold mb-4">Scorecard</h4>
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Batter</th>
                          <th></th>
                          <th className="text-center">R</th>
                          <th className="text-center">B</th>
                          <th className="text-center">4s</th>
                          <th className="text-center">6s</th>
                          <th className="text-center">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-medium text-primary">Rohit Sharma</td>
                          <td className="text-secondary small">not out</td>
                          <td className="text-center fw-bold">105</td>
                          <td className="text-center">62</td>
                          <td className="text-center">10</td>
                          <td className="text-center">6</td>
                          <td className="text-center">169.35</td>
                        </tr>
                        <tr>
                          <td className="fw-medium">Tim David</td>
                          <td className="text-secondary small">batting</td>
                          <td className="text-center fw-bold">14</td>
                          <td className="text-center">8</td>
                          <td className="text-center">2</td>
                          <td className="text-center">0</td>
                          <td className="text-center">175.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {(activeTab === 'squads' || activeTab === 'stats') && (
                <div className="text-center py-5">
                  <FiBarChart2 className="display-1 text-secondary mb-3 opacity-50" />
                  <h4 className="fw-bold">Content Coming Soon</h4>
                  <p className="text-secondary">This section is currently under development.</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="glass-card p-4 mb-4">
              <h5 className="fw-bold mb-3">Key Stats</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Projected Score</span>
                <span className="fw-bold text-body">215</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary">Partnership</span>
                <span className="fw-bold text-body">42 (21)</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-secondary">Last 5 overs</span>
                <span className="fw-bold text-body">58/1</span>
              </div>
            </div>

            <div className="glass-card p-4">
              <h5 className="fw-bold mb-3">Win Probability</h5>
              <div className="progress" style={{ height: '24px' }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '65%' }}>MI 65%</div>
                <div className="progress-bar bg-warning text-dark fw-bold" role="progressbar" style={{ width: '35%' }}>CSK 35%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
