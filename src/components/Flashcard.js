// src/components/Flashcard.js

import React from 'react';
import '../styles/Flashcard.css';

export default function Flashcard({ flashcard, onAnswerSelect, userAnswer }) {
  return (
    <div className="card">
      <p className="question-text">{flashcard.question}</p>
      <div className="flashcard-options">
        {flashcard.options.map((option) => (
          <button
            key={option}
            className={`flashcard-option ${userAnswer === option ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
