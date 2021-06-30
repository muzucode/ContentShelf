import express from 'express';
import cors from 'cors';
import BookController from './book_controller.js';
import mongoose from 'mongoose';

// Express configuration
var app = express();

// BodyParser is deprecated, the below is the same as 'using' bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set dev port to listen for axios requests on
const port = 8090;

// Listen on the port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});


// Mongoose connection
mongoose.connect('mongodb://localhost:27017/ContentShelf', {useNewUrlParser: true, useUnifiedTopology: true});









// ROUTES (FOR NOW)
// POST - Add book
app.post('/book/add', function (req, res) {
    const input = req.body;
    console.log(input);
    BookController.addBook(input);
});

// GET - All books
app.get('/book/getAll', async function (req, res) {
    // Set books equal to the return of the gotten books
    const books = await BookController.getAll();
    await console.log('(Express server.js) Books gotten are:');
    await console.log(books);
    // Send the books as the response
    await res.send(books);
});
