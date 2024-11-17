// src/components/ProgressTracker.js

import React from 'react';
import '../styles/ProgressTracker.css'; // Importing the styles

export default function ProgressTracker({ current, total }) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="progress-tracker">
      <h3>Progress</h3>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <p>{current} of {total} flashcards completed</p>
    </div>
  );
}
