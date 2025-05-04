// src/components/IncidentList.js
import React from 'react';
import '../styles/IncidentList.css';

const IncidentList = ({ incidents }) => {
  return (
    <div className="incident-list">
      <h2>Incident List</h2>
      {incidents.length > 0 ? (
        <ul>
          {incidents.map((incident, index) => (
            <li key={index}>
              <h3>{incident.title}</h3>
              <p>{incident.description}</p>
              <span>{incident.type}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No incidents reported yet.</p>
      )}
    </div>
  );
};

export default IncidentList;
