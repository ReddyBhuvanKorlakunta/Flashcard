// src/components/LandingPage.js

import React, { useState, useEffect, useRef } from 'react';
import '../styles/LandingPage.css'; // Importing the styles
import axios from 'axios';

export default function LandingPage({ onGenerateQuiz }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [loading, setLoading] = useState(false);

  const categoryEl = useRef();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        setCategories(response.data.trivia_categories);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    }
    fetchCategories();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    onGenerateQuiz(selectedCategory, numOfQuestions);

    setLoading(false);
  }

  return (
    <div className="landing-page">
      <h2 className="landing-page-title">Setup Your Quiz</h2>
      <form className="quiz-setup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            ref={categoryEl}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Loading...' : 'Generate Quiz'}
        </button>
      </form>
    </div>
  );
}
