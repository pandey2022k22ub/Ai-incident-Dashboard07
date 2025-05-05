
import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ incidents }) => {
  const incidentCount = incidents.length;
  const typeCount = incidents.reduce((acc, incident) => {
    acc[incident.type] = (acc[incident.type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="summary">
        <div className="total-incidents">
          <h3>Total Incidents: {incidentCount}</h3>
        </div>
        <div className="incident-type">
          <h3>Incident Types</h3>
          {Object.keys(typeCount).map((type) => (
            <p key={type}>
              {type}: {typeCount[type]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
