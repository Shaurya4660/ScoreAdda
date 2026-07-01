import React from 'react';
import { motion } from 'framer-motion';
import { pointsTableData } from '../utils/dummyData';
import { FiTrendingUp, FiInfo } from 'react-icons/fi';

const IPLPointsTable = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-glass border border-secondary border-opacity-25 mb-3"
        >
          <span className="text-neon-green"><FiTrendingUp /></span>
          <span className="small fw-bold tracking-wide">ANALYTICS DASHBOARD</span>
        </motion.div>
        <h1 className="display-4 fw-bold mb-3">
          IPL 2026 <span className="text-gradient-green">Standings</span>
        </h1>
        <p className="lead text-secondary max-w-2xl mx-auto">
          Advanced analytics, net run rate progression, and playoff qualification probabilities.
        </p>
      </div>

      {/* Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="table-responsive hide-scrollbar pb-5"
      >
        <table className="table table-premium text-white w-100 mb-0" style={{ minWidth: '1000px' }}>
          <thead>
            <tr className="bg-transparent text-secondary small fw-bold">
              <th className="pb-3 px-4">POS</th>
              <th className="pb-3">TEAM</th>
              <th className="pb-3 text-center">P</th>
              <th className="pb-3 text-center">W</th>
              <th className="pb-3 text-center">L</th>
              <th className="pb-3 text-center">NRR</th>
              <th className="pb-3 text-center">PTS</th>
              <th className="pb-3 text-center">RECENT FORM</th>
              <th className="pb-3 text-center" style={{ width: '150px' }}>QUAL %</th>
            </tr>
          </thead>
          <tbody>
            {pointsTableData.map((row, index) => (
              <tr key={row.pos} className={index < 4 ? "border-start border-4 border-neon-green" : index > 7 ? "border-start border-4 border-neon-red" : ""}>
                {/* Position */}
                <td className="px-4">
                  <div className={`fw-bold fs-5 ${index < 4 ? 'text-neon-green' : index > 7 ? 'text-neon-red' : 'text-secondary'}`}>
                    {row.pos}
                  </div>
                </td>
                
                {/* Team Info */}
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-white rounded-circle p-1 shadow-sm" style={{ width: '40px', height: '40px' }}>
                      <img src={row.logo} alt={row.team} className="w-100 h-100 object-fit-contain rounded-circle" />
                    </div>
                    <div>
                      <div className="fw-bold fs-6">{row.team}</div>
                      <div className="small text-secondary d-none d-lg-block">{row.name}</div>
                    </div>
                  </div>
                </td>
                
                {/* Basic Stats */}
                <td className="text-center fw-medium text-secondary">{row.p}</td>
                <td className="text-center fw-bold text-neon-green">{row.w}</td>
                <td className="text-center fw-bold text-neon-red">{row.l}</td>
                
                {/* NRR */}
                <td className="text-center">
                  <div className="fw-bold">{row.nrr > 0 ? `+${row.nrr.toFixed(3)}` : row.nrr.toFixed(3)}</div>
                  {/* NRR Mini Bar */}
                  <div className="progress mt-1 bg-secondary bg-opacity-25" style={{ height: '3px' }}>
                    <div 
                      className={`progress-bar ${row.nrr > 0 ? 'bg-neon-green' : 'bg-neon-red'}`} 
                      style={{ width: `${Math.min(Math.abs(row.nrr) * 50, 100)}%`, marginLeft: row.nrr < 0 ? 'auto' : '0' }}
                    ></div>
                  </div>
                </td>
                
                {/* Points */}
                <td className="text-center">
                  <div className="fw-bold fs-5 text-neon-blue">{row.pts}</div>
                </td>
                
                {/* Recent Form */}
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-1">
                    {row.form.map((f, i) => (
                      <span key={i} className={`form-badge ${f === 'W' ? 'form-w' : 'form-l'}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </td>
                
                {/* Qualification Probability */}
                <td className="text-center">
                  <div className="d-flex align-items-center gap-2">
                    <div className="progress progress-premium flex-grow-1">
                      <div 
                        className="progress-bar progress-bar-gradient" 
                        style={{ width: `${row.prob}%`, opacity: row.prob === 0 ? 0.2 : 1 }}
                      ></div>
                    </div>
                    <span className={`small fw-bold ${row.prob >= 80 ? 'text-neon-green' : row.prob === 0 ? 'text-neon-red' : ''}`} style={{ minWidth: '40px' }}>
                      {row.prob}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Legend */}
      <div className="d-flex flex-wrap gap-4 mt-4 text-secondary small fw-medium justify-content-center">
        <div className="d-flex align-items-center gap-2">
          <span className="bg-neon-green rounded-circle" style={{ width: '12px', height: '12px' }}></span>
          <span>Top 4 Qualify for Playoffs</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="bg-neon-red rounded-circle" style={{ width: '12px', height: '12px' }}></span>
          <span>Elimination Danger Zone</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FiInfo />
          <span>Qual % based on AI simulations</span>
        </div>
      </div>
    </div>
  );
};

export default IPLPointsTable;
