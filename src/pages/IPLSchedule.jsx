import React from 'react';
import { dummyMatches } from '../utils/dummyData';
import MatchCard from '../components/MatchCard';

const IPLSchedule = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3 display-5">IPL 2026 Schedule</h1>
        <p className="text-secondary lead max-w-2xl mx-auto">Complete fixtures, dates, venues, and timings for the upcoming Indian Premier League season.</p>
      </div>

      <div className="row g-4">
        {dummyMatches.map(match => (
          <div key={match.id} className="col-12 col-lg-6">
            <MatchCard match={match} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPLSchedule;
