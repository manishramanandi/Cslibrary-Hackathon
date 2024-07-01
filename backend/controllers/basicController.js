import books from '../models/booksModel';

const GetallBooksController = async (req, res) => {
    try {
        const all_books = books.find();
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

module.exports = { GetallBooksController };