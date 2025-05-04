import React, { useState } from 'react';
import '../styles/AddIncidentForm.css';

const AddIncidentForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    const newIncident = {
      id: Date.now(),
      title,
      description,
      date: new Date().toISOString().split('T')[0]
    };

    onAdd(newIncident);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="add-incident-form" onSubmit={handleSubmit}>
      <h2>Report a New Incident</h2>
      <input
        type="text"
        placeholder="Incident Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Incident Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit Incident</button>
    </form>
  );
};

export default AddIncidentForm;
