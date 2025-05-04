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
  const [incidents, setIncidents] = useState([]); // Store incidents

  const addIncident = (incident) => {
    setIncidents([...incidents, incident]); // Add new incident to the list
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
                element={<Dashboard incidents={incidents} />} // Pass incidents to Dashboard
              />
              <Route
                path="/incidents"
                element={<IncidentList incidents={incidents} />} // Pass incidents to IncidentList
              />
              <Route
                path="/report"
                element={<ReportIncident addIncident={addIncident} />} // Pass addIncident function to ReportIncident
              />
              <Route
                path="/analytics"
                element={<Analytics incidents={incidents} />} // Pass incidents to Analytics
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
