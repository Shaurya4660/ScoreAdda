import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar } from 'react-icons/fi';

const MatchCard = ({ match }) => {
  const isLive = match.status === 'LIVE';

  return (
    <div className="glass-card p-3 p-md-4 h-100 d-flex flex-column position-relative overflow-hidden">
      {/* Top Bar: Status & Info */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          {isLive ? (
            <span className="live-badge">Live</span>
          ) : (
            <span className={`badge ${match.status === 'UPCOMING' ? 'bg-secondary' : 'bg-success'}`}>
              {match.status}
            </span>
          )}
        </div>
        <div className="text-secondary small d-flex align-items-center gap-2">
          {match.status === 'UPCOMING' ? (
            <><FiCalendar /> {match.date}</>
          ) : (
            <><FiClock /> {match.format} • {match.venue}</>
          )}
        </div>
      </div>

      {/* Teams Info */}
      <div className="flex-grow-1">
        {/* Team 1 */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-3">
            <img src={match.team1.logo} alt={match.team1.name} width="40" height="40" className="rounded-circle bg-light p-1" />
            <h5 className="mb-0 fw-bold">{match.team1.name}</h5>
          </div>
          {match.status !== 'UPCOMING' && (
            <div className="text-end">
              <h5 className="mb-0 fw-bold">{match.team1.score}</h5>
              <small className="text-secondary">{match.team1.overs} ov</small>
            </div>
          )}
        </div>

        {/* Team 2 */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-3">
            <img src={match.team2.logo} alt={match.team2.name} width="40" height="40" className="rounded-circle bg-light p-1" />
            <h5 className="mb-0 fw-bold">{match.team2.name}</h5>
          </div>
          {match.status !== 'UPCOMING' && (
            <div className="text-end">
              <h5 className="mb-0 fw-bold">{match.team2.score}</h5>
              <small className="text-secondary">{match.team2.overs} ov</small>
            </div>
          )}
        </div>
      </div>

      {/* Match Note */}
      <div className="mt-2 mb-3">
        <p className={`small mb-0 ${isLive ? 'text-warning fw-medium' : 'text-secondary'}`}>
          {match.note}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Link to={`/match/${match.id}`} className={`btn w-100 rounded-pill ${isLive ? 'btn-primary' : 'btn-outline-secondary'}`}>
          {isLive ? 'View Live Details' : 'Match Center'}
        </Link>
      </div>
      
      {/* Decoration */}
      {isLive && (
        <div className="position-absolute" style={{ top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(255,59,48,0.2) 0%, rgba(255,59,48,0) 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
      )}
    </div>
  );
};

export default MatchCard;
