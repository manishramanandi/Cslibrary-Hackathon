import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    bookName: {
        required: true, 
        type: String,
    },
    author: {
        required: true, 
        type: String,
    },
    file: {
        type: String, 
    },
    image: {
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    year: {
        required: true,
        type: String, 
    },
}, { timestamps: true });

const Book = mongoose.model('Book', booksSchema); 

export default Book;
