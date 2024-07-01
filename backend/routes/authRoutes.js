import express from 'express';
const route = express.Router();
import { RegisterController, LoginController } from "./controllers/authController";

// registration route
route.post('/register', RegisterController);
// login route
route.post('/login', LoginController);

module.exports = route;