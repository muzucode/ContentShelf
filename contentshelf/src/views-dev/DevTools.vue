<template>
  <div class="container">
    <h1 class="p-5 display-3">Dev Tools Dashboard</h1>

    <!-- Add book module -->
    <div class="container w-50 p-4 bg-dark rounded">
      <h3 class=" text-warning"><strong>Module</strong>: Add book to DB</h3>
      <!-- Add book form -->
      <form class="text-white">

        <div class="form-group">
          <label for="titleInput">Title</label>
          <input  class="form-control" id="titleInput" aria-describedby="emailHelp" placeholder="Title" v-model="book.title">
        </div>

        <div class="form-group">
          <label for="authorInput">Author</label>
          <input  class="form-control" id="authorInput" placeholder="Author" v-model="book.author"> 
        </div>

        <div class="form-group">
          <label for="genreInput">Genre</label>
          <input  class="form-control" id="genreInput" placeholder="Genre" v-model="book.genre">
        </div>

        <div class="form-group">
          <label for="descriptionInput">Description</label>
          <textarea class="form-control" id="descriptionInput" placeholder="Description" v-model="book.description"></textarea>
        </div>

        <div class="form-group">
          <label for="descriptionInput">Image Link</label>
          <input  class="form-control" id="imglinkInput" placeholder="Image Link" v-model="book.imglink">
        </div>

        <button @click="addBookToDb()" type="button" class="btn btn-secondary w-100">Submit</button>
      </form>
      <h3 class=" text-warning mt-4"><strong>Module</strong>: Books list</h3>
    </div>

  </div>
</template>

<script>
import BookDataService from "../services/BookDataService.js"

export default {
  name: "Dev Tools",
  data: () => {
    return {
      book: {
          title:  '',
          author: '',
          genre: '',
          description: '',
          imglink: 'https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg',
          date: Date.now,
          hidden: false,
      }
    }

  },
  methods: {
      addBookToDb: function(){
			// Book is modeled through inputs and 'book' data object
			const book = {
				title:  this.book.title,
				author: this.book.author,
				genre: this.book.genre,
				description:   this.book.description,
        imglink: this.book.imglink,
				date: Date.now,
				hidden: false,
			};

      console.log('Frontend addBookToDb Method Message: Attempting to add following book to DB...');
      console.log(book);

			// Add a book to db
			BookDataService.addBook(book);
		}

  }
}



// BEGIN HERE WITH FIGURING OUT HOW TO MODEL THE INPUT IN THE MODULE ACCORDING TO THE METHOD







</script>
