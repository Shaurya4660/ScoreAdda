import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { dummyMatches } from '../utils/dummyData';
import { FiFilter } from 'react-icons/fi';

const LiveMatches = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredMatches = dummyMatches.filter(match => {
    if (filter === 'ALL') return true;
    if (filter === 'LIVE') return match.status === 'LIVE';
    if (filter === 'UPCOMING') return match.status === 'UPCOMING';
    if (filter === 'COMPLETED') return match.status === 'COMPLETED';
    return true;
  });

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <div>
          <h1 className="fw-bold mb-2">Cricket Scoreboard</h1>
          <p className="text-secondary mb-0">Follow live ball-by-ball updates, commentary, and match center.</p>
        </div>
        
        <div className="d-flex align-items-center gap-2 overflow-auto pb-2 pb-md-0">
          <FiFilter className="text-secondary" />
          <div className="btn-group" role="group">
            {['ALL', 'LIVE', 'UPCOMING', 'COMPLETED'].map(f => (
              <button
                key={f}
                type="button"
                className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setFilter(f)}
              >
                {f === 'ALL' ? 'All Matches' : f.charAt(0) + f.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <div key={match.id} className="col-12 col-md-6 col-xl-4">
              <MatchCard match={match} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <div className="text-secondary mb-3">No matches found for this filter.</div>
            <button className="btn btn-primary btn-sm" onClick={() => setFilter('ALL')}>Clear Filter</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveMatches;
