import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
    },
    author: {
        require: true,
        type: String,
    },
});

const books = await mongoose.model('books', booksSchema);

modules.exports = books;