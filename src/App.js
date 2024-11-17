// src/App.js

import React, { useState, useEffect, useCallback } from 'react';
import QuizSetupForm from './components/QuizSetupForm';
import FlashcardList from './components/FlashcardList';
import ProgressTracker from './components/ProgressTracker';
import QuestionNavigation from './components/QuestionNavigation';
import Pagination from './components/Pagination';
import './styles/App.css';
import axios from 'axios';

export default function App() {
  const [quizSettings, setQuizSettings] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchFlashcards = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: quizSettings.amount,
          category: quizSettings.category,
        }
      });
      const formattedFlashcards = response.data.results.map((item, index) => ({
        id: `${index}-${Date.now()}`,
        question: decodeString(item.question),
        answer: decodeString(item.correct_answer),
        options: [
          ...item.incorrect_answers.map((a) => decodeString(a)),
          decodeString(item.correct_answer),
        ].sort(() => Math.random() - 0.5),
      }));
      setFlashcards(formattedFlashcards);
      setCurrentQuestion(0);
      setUserAnswers(new Array(formattedFlashcards.length).fill(null));
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    } finally {
      setLoading(false);
    }
  }, [quizSettings]);

  useEffect(() => {
    if (quizSettings) {
      fetchFlashcards();
    }
  }, [quizSettings, fetchFlashcards]);

  const decodeString = (str) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  };

  const handleSetupSubmit = (category, amount) => {
    setQuizSettings({ category, amount });
  };

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestion(index);
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const calculateResults = () => {
    let correct = 0;
    flashcards.forEach((card, index) => {
      if (userAnswers[index] === card.answer) {
        correct++;
      }
    });
    return { correct, total: flashcards.length };
  };

  const results = calculateResults();

  return (
    <div className="App">
      {!quizSettings ? (
        <QuizSetupForm onSetupSubmit={handleSetupSubmit} />
      ) : loading ? (
        <p>Loading flashcards...</p>
      ) : flashcards.length > 0 ? ( // Ensure flashcards has data before rendering
        <>
          {showResults ? (
            <div className="results">
              <h2>Quiz Results</h2>
              <p>
                You got {results.correct} out of {results.total} correct.
              </p>
              <p>Review your answers:</p>
              <ul>
                {flashcards.map((card, index) => (
                  <li key={card.id} className="result-item">
                    <strong>Question {index + 1}:</strong> {card.question}
                    <br />
                    <strong>Your Answer:</strong> {userAnswers[index] || 'No answer'}
                    <br />
                    <strong>Correct Answer:</strong> {card.answer}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <ProgressTracker current={currentQuestion + 1} total={flashcards.length} />
              <FlashcardList
                flashcards={[flashcards[currentQuestion]]}
                onAnswerSelect={handleAnswerSelect}
                userAnswer={userAnswers[currentQuestion]}
              />
              <QuestionNavigation
                currentQuestion={currentQuestion}
                totalQuestions={flashcards.length}
                onQuestionChange={handleQuestionChange}
              />
              <Pagination
                currentPage={currentQuestion + 1}
                totalPages={flashcards.length}
                onPageChange={(page) => handleQuestionChange(page - 1)}
              />
              {currentQuestion === flashcards.length - 1 && (
                <button className="btn submit-btn" onClick={handleSubmitQuiz}>
                  Submit Quiz
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <p>No flashcards available. Please try again.</p>
      )}
    </div>
  );
}
