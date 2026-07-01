import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchResults = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="fw-bold mb-4">Search ScoreAdda</h1>
          <div className="input-group mb-5 shadow-sm rounded-pill overflow-hidden border border-secondary border-opacity-25 glass-card p-1">
            <span className="input-group-text bg-transparent border-0 ps-4 text-secondary">
              <FiSearch className="fs-4" />
            </span>
            <input 
              type="text" 
              className="form-control bg-transparent border-0 shadow-none fs-5 py-3" 
              placeholder="Search for matches, teams, or players..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button className="btn btn-primary rounded-pill px-4 mx-1">Search</button>
          </div>
          
          {query ? (
            <div className="text-start mt-5">
              <h4 className="fw-bold mb-4">Results for "{query}"</h4>
              <div className="glass-card p-4 text-center text-secondary">
                No matching results found. Try another keyword.
              </div>
            </div>
          ) : (
            <div className="text-start mt-5">
              <h5 className="text-secondary mb-3">Trending Searches</h5>
              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                {['CSK vs MI', 'Virat Kohli Stats', 'IPL Points Table', 'Rohit Sharma', 'T20 World Cup'].map(term => (
                  <button key={term} className="btn btn-outline-secondary rounded-pill btn-sm hover-scale" onClick={() => setQuery(term)}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
