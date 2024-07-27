import Book from '../models/booksModel.js';
import path from 'path';

const AddNewBook = async (req, res) => {
    try {
        console.log("add book endpoint called");


         // Log the body and files to understand what's being received
         console.log("add book endpoint called");
        console.log('Request headers:', req.headers);
        console.log('Request body:', req.body);
        console.log('Request files:', req.files);

         const { bookName, author, title, year } = req.body;

         console.log('Received data:', { bookName, author, title, year });

        if (!req.files) {
            return res.status(400).json({ error: "No files were uploaded." });
        }

        const imagePath = req.files['image'] ? req.files['image'][0].path : ''; 
        const filePath = req.files['file'] ? req.files['file'][0].path : '';

        // add book to the database
        const newBook = new Book({ bookName, author, title, year, file: filePath, image: imagePath });
        await newBook.save();

        res.status(201).json({ newBook });
    } catch (error) {
        console.log('error creating new book', error);
        res.status(500).json({ error: error.message });
    }
};

const GetallBooksController = async (req, res) => {
    try {
        console.log("get all books endpoint called");
        const all_books = await Book.find();
        const number_of_books = all_books.length;
        res.status(200).json({
            message: 'the list of all books',
            all_books,
            number_of_books
        });
    } catch (error) {
        res.status(400).send('Error retrieving books from the db');
    }
};

export { AddNewBook, GetallBooksController };
