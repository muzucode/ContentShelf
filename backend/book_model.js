import mongoose from 'mongoose';

// Define the book schema
const bookSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  genre: String,
  description:   String,
  imglink: String,  
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
});

// Create model out of the book schema
const Book = mongoose.model('Book', bookSchema);

// Exports the book model
export default Book