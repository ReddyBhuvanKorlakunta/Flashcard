// src/components/QuestionNavigation.js

import React from 'react';
import '../styles/QuestionNavigation.css'; // Importing the styles

export default function QuestionNavigation({ currentQuestion, totalQuestions, onQuestionChange }) {
  return (
    <div className="question-navigation">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <button
          key={index}
          className={`question-number ${currentQuestion === index ? 'active' : ''}`}
          onClick={() => onQuestionChange(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
