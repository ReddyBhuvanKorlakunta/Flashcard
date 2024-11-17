// src/components/FlashcardList.js

import React from 'react';
import Flashcard from './Flashcard';
import '../styles/FlashcardList.css';

export default function FlashcardList({ flashcards = [], onAnswerSelect, userAnswer }) {
  // Return null if flashcards array is empty
  if (!flashcards.length) return null;

  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => (
        <Flashcard
          flashcard={flashcard}
          key={flashcard.id}
          onAnswerSelect={onAnswerSelect}
          userAnswer={userAnswer}
        />
      ))}
    </div>
  );
}
