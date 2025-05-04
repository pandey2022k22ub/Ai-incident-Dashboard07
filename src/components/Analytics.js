// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/Analytics.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = ({ incidents }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'], // Different colors for different incident types
      },
    ],
  });

  // Update chart data whenever the incidents change
  useEffect(() => {
    const typeCount = incidents.reduce((acc, incident) => {
      acc[incident.type] = (acc[incident.type] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(typeCount);
    const data = Object.values(typeCount);

    setChartData({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'], // Color for each type
        },
      ],
    });
  }, [incidents]); // Re-run this effect whenever incidents change

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <div className="analytics-summary">
        <p>Total Incidents: {incidents.length}</p>
        <h3>Incidents by Type:</h3>
        <div className="pie-chart">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
