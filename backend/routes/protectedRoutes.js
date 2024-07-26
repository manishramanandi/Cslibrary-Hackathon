// import authorization for the middle ware
import express from 'express';
import { AddNewBook, GetallBooksController } from '../controllers/basicController.js';
import { protect } from '../middleswares/authMiddleware.js';
import uploads from '../middleswares/uploads.js';
const route = express.Router();

// pass middleware authorization to these route
route.post('/book', uploads.fields([{ name: 'image', maxCount: 1 }, { name: 'file', maxCount: 1 }]), protect, AddNewBook);
route.get('/book', protect, GetallBooksController);

// export the protected routes
export default route;