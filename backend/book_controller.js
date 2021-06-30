import Book from './book_model.js'

export default class BookController {
    // Add book with the content that is designated
    static addBook(content){
        // Create new document
        const book = new Book(content);

        // Save the document to MongoDB, return error if there is one
        book.save(function (err, book) {
            if (err) return console.error(err);
            console.log("Book has been added to DB!")
          });
    };

    // Get all the books in the Book collection
    static async getAll(){
        const query = await Book.find({});
        console.log('Query: getAll')
        console.log('Query Results:')
        console.log(query)
        return query;
    }

}

// static async getAll(){
//     const query = await Book.find(function (err, books) {
//         if (err) return console.error(err);
//         console.log("Backend message: Books found:")
//         console.log(books);
//         // Return all the found books
//         return books;
//     });
// }