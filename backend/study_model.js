import mongoose from 'mongoose';

// Define the book schema
const studySchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  topic: String,
  description: String,
  hyperlink: String,
  imglink: String,
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false },
});

// Create model out of the book schema
const Study = mongoose.model('Study', studySchema);

// Exports the book model
export default Study