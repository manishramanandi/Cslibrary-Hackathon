// import authorization for the middle ware
import express from 'express';
import { AddNewBook, GetallBooksController } from '../controllers/basicController.js';
import { protect } from '../middleswares/authMiddleware.js';
import { uploadFiles } from '../middleswares/uploads.js';
const route = express.Router();

// pass middleware authorization to these route
route.post('/book', protect, uploadFiles, AddNewBook);
route.get('/book', protect, GetallBooksController);

// export the protected routes
export default route;