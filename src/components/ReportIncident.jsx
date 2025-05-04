// src/components/ReportIncident.js
import React, { useState } from 'react';
import '../styles/ReportIncident.css';

const ReportIncident = ({ addIncident }) => {
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    type: '',
  });

  const handleChange = (e) => {
    setIncident({
      ...incident,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncident(incident); // Add the new incident
    setIncident({ title: '', description: '', type: '' }); // Clear the form
  };

  return (
    <div className="report-incident">
      <h2>Report a New Incident</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={incident.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={incident.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="type"
          value={incident.type}
          onChange={handleChange}
          placeholder="Type"
          required
        />
        <button type="submit">Submit Incident</button>
      </form>
    </div>
  );
};

export default ReportIncident;
