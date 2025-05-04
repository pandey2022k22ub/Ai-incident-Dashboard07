import React from 'react';
import '../styles/IncidentCard.css';

const IncidentCard = ({ title, description, date }) => {
  return (
    <div className="incident-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
    </div>
  );
};

export default IncidentCard;
