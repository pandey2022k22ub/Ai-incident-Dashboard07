import React from 'react';
import '../styles/FilterBar.css';

const FilterBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search incidents..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
