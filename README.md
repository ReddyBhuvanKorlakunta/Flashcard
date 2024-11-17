Here’s an updated `README.md` file, including details about configuring the server, setting up a custom port, and running in production.

```markdown
# Flashcard Quiz Application

A React and Express-based Flashcard Quiz Application that allows users to set up quizzes by selecting a category and the number of questions, answer each question, track their progress, and view their results. The app fetches quiz data from the Open Trivia Database (OpenTDB) API.

## Features

- **Quiz Setup**: Users can select a category and the number of questions before starting the quiz.
- **Flashcard Display**: Each question is displayed as a flashcard with answer options.
- **Progress Tracking**: Tracks the user's progress through the quiz.
- **Question Navigation**: Allows users to navigate between questions directly.
- **Results Summary**: Shows the number of correct and incorrect answers at the end of the quiz.
- **Responsive Design**: Works well on both desktop and mobile screens.

## Installation

To get started with the Flashcard Quiz App, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ReddyBhuvanKorlakunta/Flashcard.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Flashcard
   ```

3. **Install dependencies for the client and server**:
   - Install client dependencies:
     ```bash
     cd client
     npm install
     ```
   - Install server dependencies:
     ```bash
     cd ../server
     npm install
     ```

4. **Run the application**:
   - To start the server, run:
     ```bash
     node server.js
     ```
   - To start the client, in the `client` folder, run:
     ```bash
     npm start
     ```

The server will run on `http://localhost:5000` by default, and the client on `http://localhost:3000`.

## Server Configuration

The backend server is set up using **Express.js** and runs on port `5000` by default. You can modify the port by setting a custom `PORT` environment variable.

### Running the Server

1. **Start the server**:
   - In the `server` directory, start the server by running:
     ```bash
     node server.js
     ```
   - By default, the server will be available at `http://localhost:5000`.

2. **Custom Port**:
   - To change the default port, set a `PORT` environment variable. This can be done directly from the command line:
     ```bash
     PORT=3001 node server.js
     ```

3. **Environment Variables**:
   - You can use a `.env` file in the `server` directory to manage environment variables such as `PORT`. To do this:
     - Create a `.env` file in the `server` directory and add:
       ```plaintext
       PORT=3001
       ```
     - Install the **dotenv** package to enable loading environment variables from `.env`:
       ```bash
       npm install dotenv
       ```
     - Add `require('dotenv').config();` at the top of `server.js`.

4. **Production Mode**:
   - In production mode, the server serves the built frontend React app. Set `NODE_ENV=production` to enable this, and ensure the `client` app is built by running `npm run build` in the `client` directory.

## Usage

1. **Setup the Quiz**: On the landing page, select a quiz category and the number of questions, then click on "Generate Quiz" to start.
2. **Answer Questions**: Click on answer options for each question displayed on a flashcard.
3. **Navigate Questions**: Use the pagination or question navigation buttons to move between questions.
4. **Submit Quiz**: On the final question, click "Submit Quiz" to see your results.
5. **View Results**: After submitting, a summary will display the number of correct and incorrect answers, along with a review of each question.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Express**: Backend framework for creating the server and API.
- **CSS**: Custom styling for responsive and user-friendly design.
- **Axios**: For making API requests to fetch quiz data from OpenTDB.
- **Open Trivia Database (OpenTDB)**: Provides the trivia questions and answers for the quiz.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. For any issues or feature requests, please open an issue.

## Acknowledgements

- [Open Trivia Database](https://opentdb.com/) for providing quiz questions.
- [React Documentation](https://reactjs.org/docs/getting-started.html) for helping build the project.
- [Axios Documentation](https://axios-http.com/) for API integration.
```

### Explanation of the Additions

- **Server Configuration**: Includes detailed instructions on running the server, changing the default port, and setting environment variables.
- **Production Mode**: Explains how the server serves the React frontend in production.
- **Technologies Used**: Lists both frontend and backend technologies.

This `README.md` should be a comprehensive guide to understanding, installing, and running the Flashcard Quiz App project. # Flashcard
