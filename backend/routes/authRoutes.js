import express from 'express';
const route = express.Router();

// registration route
route.post('/register', RegisterController);
// login route
route.post('/login', LoginController);