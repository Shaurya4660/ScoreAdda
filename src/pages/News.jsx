import React from 'react';
import NewsCard from '../components/NewsCard';
import { dummyNews } from '../utils/dummyData';

const News = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Cricket News</h1>
      <div className="row g-4">
        {dummyNews.map(news => (
          <div key={news.id} className="col-12 col-md-6 col-lg-4">
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
