import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">AI Safety</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-item">
            <span className="icon">🏠</span>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/incidents" className="sidebar-item">
            <span className="icon">📋</span>
            <span className="text">Incidents</span>
          </Link>
        </li>
        <li>
          <Link to="/report" className="sidebar-item">
            <span className="icon">➕</span>
            <span className="text">Report</span>
          </Link>
        </li>
        <li>
          <Link to="/analytics" className="sidebar-item">
            <span className="icon">📊</span>
            <span className="text">Analytics</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-item">
            <span className="icon">⚙️</span>
            <span className="text">Settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
