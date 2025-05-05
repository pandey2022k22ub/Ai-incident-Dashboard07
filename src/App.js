// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import IncidentList from './components/IncidentList';
import ReportIncident from './components/ReportIncident';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Footer from './components/Footer';

function App() {
  const [incidents, setIncidents] = useState([]); 

  const addIncident = (incident) => {
    setIncidents([...incidents, incident]); 
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<Dashboard incidents={incidents} />} 
              />
              <Route
                path="/incidents"
                element={<IncidentList incidents={incidents} />} 
              />
              <Route
                path="/report"
                element={<ReportIncident addIncident={addIncident} />} 
              />
              <Route
                path="/analytics"
                element={<Analytics incidents={incidents} />} 
              />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
