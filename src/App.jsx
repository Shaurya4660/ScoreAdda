import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const LiveMatches = lazy(() => import('./pages/LiveMatches'));
const MatchDetails = lazy(() => import('./pages/MatchDetails'));
const IPLSchedule = lazy(() => import('./pages/IPLSchedule'));
const IPLPointsTable = lazy(() => import('./pages/IPLPointsTable'));
const Teams = lazy(() => import('./pages/Teams'));
const TeamDetails = lazy(() => import('./pages/TeamDetails'));
const PlayerProfile = lazy(() => import('./pages/PlayerProfile'));
const News = lazy(() => import('./pages/News'));
const FantasyTips = lazy(() => import('./pages/FantasyTips'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Auth = lazy(() => import('./pages/Auth'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

// Loading component
const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="live" element={<LiveMatches />} />
            <Route path="match/:id" element={<MatchDetails />} />
            <Route path="schedule" element={<IPLSchedule />} />
            <Route path="points-table" element={<IPLPointsTable />} />
            <Route path="ipl-teams" element={<Teams />} />
            <Route path="team/:id" element={<TeamDetails />} />
            <Route path="player/:id" element={<PlayerProfile />} />
            <Route path="news" element={<News />} />
            <Route path="fantasy" element={<FantasyTips />} />
            <Route path="search" element={<SearchResults />} />
          </Route>
          
          {/* Routes without MainLayout */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
