// server/server.js
const express = require('express');
const cors = require('cors');
const flashcardRoutes = require('./routes/flashcards'); // Import flashcard routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests from frontend
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/flashcards', flashcardRoutes);

// Serve frontend (React build folder) in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
