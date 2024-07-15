// import authorization for the middle ware
import express from 'express'
import { GetallBooksController } from '../controllers/basicController'
import { protect } from '../middlewares/authMiddleware'
const route = express.Router();

// pass middleware authorization to these route
route.get('/books', protect, GetallBooksController);

// export the protected routes