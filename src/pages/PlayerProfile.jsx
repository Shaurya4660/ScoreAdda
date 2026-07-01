import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerProfile = () => {
  const { id } = useParams();
  
  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold mb-4">Player Profile</h1>
      <p className="text-secondary">Stats and information for player ID: {id}</p>
      <div className="glass-card p-5 mt-4 d-inline-block">
        <h3 className="text-primary mb-3">Rohit Sharma</h3>
        <p className="lead">Right-Handed Batsman</p>
      </div>
    </div>
  );
};

export default PlayerProfile;
