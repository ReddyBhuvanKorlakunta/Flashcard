// src/components/QuizSetupForm.js

import React, { useState, useEffect } from 'react';
import '../styles/QuizSetupForm.css';
import axios from 'axios';

export default function QuizSetupForm({ onSetupSubmit }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        setCategories(response.data.trivia_categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedCategory) {
      setLoading(true);
      onSetupSubmit(selectedCategory, numOfQuestions);
      setLoading(false);
    }
  }

  return (
    <div className="quiz-setup-container">
      <div className="header">
        <h1 className="heading">Welcome to the Quiz</h1>
      </div>
      <form className="quiz-setup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            max="50"
            value={numOfQuestions}
            onChange={(e) => setNumOfQuestions(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" disabled={!selectedCategory || loading}>
          {loading ? 'Loading...' : 'Generate Quiz'}
        </button>
      </form>
    </div>
  );
}
