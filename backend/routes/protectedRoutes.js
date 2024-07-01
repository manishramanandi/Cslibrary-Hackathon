// import authorization for the middle ware
import express from 'express'
import { GetallBooksController } from '../controllers/basicController'
const route = express.Router();

// pass middleware authorization to these route
route.get('/books', GetallBooksController);

// export the protected routes