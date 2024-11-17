// src/components/Pagination.js

import React from 'react';
import '../styles/Pagination.css'; // Importing the styles

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination-controls">
      <button 
        className="btn pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button 
        className="btn pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
