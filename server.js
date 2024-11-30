const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
const bodyParser = require('body-parser');
const dataStoryRoutes = require('./ai-data-stories-backend/routes/dataStoryRoutes');
const authRoutes = require('./ai-data-stories-backend/routes/authRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // to parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

// Clerk authentication middleware
app.use(ClerkExpressWithAuth());

// Routes
app.use('/api/auth', authRoutes); // Auth routes for login/signup
app.use('/api/data-story', dataStoryRoutes); // Data story routes

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
