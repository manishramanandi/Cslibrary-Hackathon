import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from './config/db'
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// database connection
mongoose();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// root Route
app.get('/', (req, res) => {
  res.status(200).json({message:'Hello World!'});
});

// Authentication / Authorization routes

// Protected routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
