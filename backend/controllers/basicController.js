import Book from '../models/booksModel.js';
import path from 'path';


const AddNewBook = async (req, res) => {
    try {
        const { bookName, author, title, year } = req.body;

        const imagePath = req.files['image'] ? req.files['image'][0].path : ''; 
        const filePath = req.files['file'] ? req.files['file'][0].path : '';

        // add book to the database
        const newBook = Book({ bookName, author, title, year, file: filepath, image: imagepath })
        await newBook.save();

        res.status(201).json({newBook});

    } catch (error) {
        console.log('error creating new book', error);
        res.status(500).json({ error: err.message });
    }
}

const GetallBooksController = async (req, res) => {
    try {
        const all_books = Book.find();
        const number_of_books = allBooks.length;
        res.status(200).json({
            message: 'the list of all books',
            all_books,
            number_of_books
        })
    } catch (error) {
        res.status(400).send('Error retriving books from the db');
    }
}

export { AddNewBook, GetallBooksController };