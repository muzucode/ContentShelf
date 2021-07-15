import express from 'express';
import cors from 'cors';
import BookController from './book_controller.js';
import StudyController from './study_controller.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Set config for dotenv
dotenv.config();

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

// Get mongoURI from .env file
const uri = process.env.mongoURI;

// Mongoose connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});









// ROUTES (BOOK)
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

// DELETE - Delete one book
app.delete('/book/deleteOne', function (req, res) {
    const bookId = req.body.id;
    console.log('Server.js: bookId received is:');
    console.log(bookId);
    BookController.deleteOne(bookId);
});

// ROUTES (STUDY)
// POST - Add study
app.post('/study/add', function (req, res) {
    const input = req.body;
    console.log(input);
    StudyController.addOne(input);
});

// GET - All studies
app.get('/study/getAll', async function (req, res) {
    // Set studies equal to the return of the gotten studies
    const studies = await StudyController.getAll();
    await console.log('(Express server.js) Studies gotten are:');
    await console.log(studies);
    // Send the studies as the response
    await res.send(studies);
});

// DELETE - Delete one study
app.delete('/study/deleteOne', function (req, res) {
    const studyId = req.body.id;
    console.log('Server.js: studyId received is:');
    console.log(studyId);
    StudyController.deleteOne(studyId);
});