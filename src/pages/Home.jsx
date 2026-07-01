import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyMatches, dummyNews, trendingPlayers } from '../utils/dummyData';
import { FiActivity, FiArrowRight, FiPlayCircle, FiTrendingUp, FiStar, FiClock } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Home = () => {
  const liveMatch = dummyMatches.find(m => m.status === 'LIVE');

  return (
    <div className="overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="position-relative d-flex align-items-center" style={{ minHeight: '90vh' }}>
        {/* Background Atmosphere */}
        <div 
          className="position-absolute w-100 h-100 top-0 start-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2500&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'screen'
          }}
        ></div>
        <div className="position-absolute w-100 h-100 top-0 start-0 opacity-75" style={{ backgroundColor: 'var(--bg-deep)' }}></div>
        <div className="gradient-overlay-bottom"></div>
        
        {/* Glow Effects */}
        <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0, 176, 255, 0.15) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }}></div>
        <div className="position-absolute top-0 end-0" style={{ width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0, 230, 118, 0.1) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }}></div>

        <div className="container position-relative z-1 py-5 mt-5">
          <div className="row align-items-center g-5">
            
            {/* Hero Content */}
            <motion.div 
              className="col-lg-6 text-center text-lg-start"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-glass border border-secondary border-opacity-25 mb-4">
                <span className="text-neon-blue"><FiStar /></span>
                <span className="small fw-bold tracking-wide">IPL 2026 EXCLUSIVE</span>
              </div>
              <h1 className="display-2 fw-bold mb-4 line-height-tight">
                International Cricket <br />
                <span className="text-gradient-blue">Like Never Before</span>
              </h1>
              <p className="lead text-secondary mb-5 max-w-2xl mx-auto mx-lg-0 fs-4">
                Lightning-fast live scores, immersive analytics, and hyper-personalized insights for the modern fan.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                <Link to="/live" className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2 hover-scale" style={{ background: 'var(--electric-blue)', border: 'none' }}>
                  <FiActivity className="fs-5" /> Live Match Center
                </Link>
                <Link to="/ipl-teams" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold bg-glass d-flex align-items-center justify-content-center gap-2 hover-scale">
                  Explore Teams
                </Link>
              </div>
            </motion.div>

            {/* Featured Live Match Card */}
            <motion.div 
              className="col-lg-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {liveMatch && (
                <div className="premium-card p-4 p-md-5 shadow-lg">
                  <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                    <span className="live-badge-premium">LIVE NOW</span>
                    <span className="text-secondary small fw-bold d-flex align-items-center gap-1"><FiPlayCircle /> {liveMatch.venue}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center position-relative mb-4">
                    <div className="text-center position-relative z-1">
                      <div className="bg-glass rounded-circle p-2 mb-3 shadow-lg mx-auto" style={{ width: '80px', height: '80px' }}>
                        <img src={liveMatch.team1.logo} alt={liveMatch.team1.shortName} className="w-100 h-100 object-fit-contain drop-shadow" />
                      </div>
                      <h3 className="fw-bold mb-0">{liveMatch.team1.shortName}</h3>
                      <h4 className="text-neon-blue fw-bold mb-0 mt-2">{liveMatch.team1.score}</h4>
                      <small className="text-secondary">({liveMatch.team1.overs} ov)</small>
                    </div>
                    
                    <div className="text-center position-absolute top-50 start-50 translate-middle w-100">
                      <div className="text-secondary fw-bold fst-italic display-6 opacity-25">VS</div>
                    </div>
                    
                    <div className="text-center position-relative z-1">
                      <div className="bg-glass rounded-circle p-2 mb-3 shadow-lg mx-auto" style={{ width: '80px', height: '80px' }}>
                        <img src={liveMatch.team2.logo} alt={liveMatch.team2.shortName} className="w-100 h-100 object-fit-contain drop-shadow" />
                      </div>
                      <h3 className="fw-bold mb-0">{liveMatch.team2.shortName}</h3>
                      <h4 className="text-neon-blue fw-bold mb-0 mt-2">Yet to bat</h4>
                      <small className="text-secondary">-</small>
                    </div>
                  </div>

                  <div className="bg-glass rounded-3 p-3 text-center mb-4">
                    <p className="text-warning fw-bold mb-0 d-flex align-items-center justify-content-center gap-2">
                      <FiActivity /> {liveMatch.note}
                    </p>
                    <div className="d-flex justify-content-between mt-3 pt-3 border-top border-secondary border-opacity-25 small text-secondary">
                      <span>CRR: <strong className="text-white">{liveMatch.runRate}</strong></span>
                      <span>Proj: <strong className="text-white">{liveMatch.projectedScore}</strong></span>
                    </div>
                  </div>

                  <Link to={`/match/${liveMatch.id}`} className="btn btn-outline-primary w-100 rounded-pill fw-bold border-2 d-flex align-items-center justify-content-center gap-2">
                    <FiPlayCircle className="fs-5" /> Watch Match Center
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Live Matches Slider */}
      <section className="py-5 position-relative z-1" style={{ marginTop: '-40px' }}>
        <div className="container">
          <div className="d-flex overflow-auto hide-scrollbar gap-4 pb-4 px-2" style={{ scrollSnapType: 'x mandatory' }}>
            {dummyMatches.map((match) => (
              <motion.div 
                key={match.id} 
                className="premium-card p-3 flex-shrink-0"
                style={{ width: '320px', scrollSnapAlign: 'start' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {match.status === 'LIVE' ? (
                    <span className="live-badge-premium" style={{ padding: '2px 8px', fontSize: '0.65rem' }}>LIVE</span>
                  ) : (
                    <span className="badge bg-secondary bg-opacity-25 text-white">{match.status}</span>
                  )}
                  <small className="text-secondary">{match.format}</small>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={match.team1.logo} width="24" className="rounded-circle bg-white p-1" alt="" />
                    <span className="fw-bold">{match.team1.shortName}</span>
                  </div>
                  <span className="fw-bold">{match.team1.score || '-'}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <img src={match.team2.logo} width="24" className="rounded-circle bg-white p-1" alt="" />
                    <span className="fw-bold">{match.team2.shortName}</span>
                  </div>
                  <span className="fw-bold">{match.team2.score || '-'}</span>
                </div>
                <div className="mt-auto pt-2 border-top border-secondary border-opacity-25 text-center">
                  <small className={match.status === 'LIVE' ? 'text-neon-orange' : 'text-secondary'}>{match.note}</small>
                </div>
                <Link to={`/match/${match.id}`} className="stretched-link"></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-5">
          {/* Trending Section */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-end mb-4">
              <h2 className="fw-bold mb-0 d-flex align-items-center gap-2">
                <FiTrendingUp className="text-neon-green" /> Trending Hub
              </h2>
            </div>
            
            <div className="row g-4 mb-5">
              {trendingPlayers.map((player, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <motion.div 
                    className="premium-card p-3 text-center h-100 d-flex flex-column justify-content-center"
                  >
                    <img src={player.img} alt={player.name} className="rounded-circle mx-auto mb-3 border border-2 border-secondary" width="60" />
                    <h6 className="fw-bold mb-1">{player.name}</h6>
                    <small className="text-neon-blue fw-bold">{player.stat}</small>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* News Section */}
            <div className="d-flex justify-content-between align-items-end mb-4">
              <h2 className="fw-bold mb-0">Latest Stories</h2>
              <Link to="/news" className="text-neon-blue text-decoration-none fw-bold d-flex align-items-center hover-scale">
                View All <FiArrowRight className="ms-1" />
              </Link>
            </div>
            <motion.div 
              className="row g-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {dummyNews.slice(0, 2).map(news => (
                <motion.div key={news.id} className="col-md-6" variants={itemVariants}>
                  <div className="premium-card h-100 overflow-hidden group border-0">
                    <div className="position-relative overflow-hidden">
                      <img src={news.image} alt={news.title} className="w-100 object-fit-cover" style={{ height: '220px', transition: 'transform 0.5s ease' }} />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"></div>
                      <span className="badge bg-neon-blue text-dark position-absolute top-0 start-0 m-3 fw-bold">{news.category}</span>
                    </div>
                    <div className="p-4 position-relative z-1 bg-surface" style={{ marginTop: '-20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                      <h4 className="fw-bold mb-3 line-clamp-2">
                        <Link to={`/news/${news.id}`} className="text-decoration-none text-white stretched-link hover-text-blue">
                          {news.title}
                        </Link>
                      </h4>
                      <div className="d-flex justify-content-between align-items-center text-secondary small fw-medium">
                        <span className="d-flex align-items-center gap-1"><FiClock /> {news.time}</span>
                        <span>{news.readTime} read</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar / Points Table Promo */}
          <div className="col-lg-4">
            <div className="premium-card p-4 glow-border h-100 d-flex flex-column">
              <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <FiStar className="text-neon-orange" /> Points Table
              </h4>
              <div className="flex-grow-1">
                {/* Mini Table */}
                <div className="d-flex justify-content-between text-secondary small fw-bold mb-2 px-2">
                  <span>TEAM</span>
                  <div className="d-flex gap-3">
                    <span style={{ width: '20px', textAlign: 'center' }}>P</span>
                    <span style={{ width: '20px', textAlign: 'center' }}>Pts</span>
                  </div>
                </div>
                {['CSK', 'RR', 'MI', 'GT'].map((team, idx) => (
                  <div key={team} className={`d-flex justify-content-between align-items-center p-2 mb-2 rounded ${idx < 4 ? 'bg-glass border-start border-3 border-neon-green' : ''}`}>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold text-secondary">{idx + 1}</span>
                      <span className="fw-bold">{team}</span>
                    </div>
                    <div className="d-flex gap-3 fw-bold">
                      <span style={{ width: '20px', textAlign: 'center' }}>10</span>
                      <span className="text-neon-blue" style={{ width: '20px', textAlign: 'center' }}>{16 - (idx * 2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/points-table" className="btn btn-primary w-100 rounded-pill mt-4 fw-bold" style={{ background: 'rgba(0, 176, 255, 0.1)', color: 'var(--electric-blue)', border: '1px solid var(--electric-blue)' }}>
                View Full Standings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
