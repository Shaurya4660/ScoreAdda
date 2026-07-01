import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';

const NewsCard = ({ news }) => {
  return (
    <div className="glass-card h-100 overflow-hidden hover-scale border-0">
      <div className="position-relative">
        <img src={news.image} alt={news.title} className="w-100 object-fit-cover" style={{ height: '200px' }} />
        <span className="badge bg-primary position-absolute bottom-0 start-0 m-3">{news.category}</span>
      </div>
      <div className="p-3">
        <h5 className="card-title mb-2 line-clamp-2">
          <Link to={`/news/${news.id}`} className="text-decoration-none text-body stretched-link">
            {news.title}
          </Link>
        </h5>
        <p className="text-secondary small d-flex align-items-center gap-2 mb-0 mt-3">
          <FiClock /> {news.time}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
