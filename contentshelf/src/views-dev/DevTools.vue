<template>
  <div class="container">
    <h1 class="p-4 display-3">Dev Tools</h1>
    <hr class="mb-5"/>

    <!-- Modules container -->
    <div class="container d-flex" id="modules-container">
      <!-- Add book module -->
      <div class="container w-25 p-4 bg-teal rounded shadow-lg ">

        <h3><strong>Module</strong>: Add book to DB</h3>
        <hr/>
        <form>

          <div class="form-group my-3 font-italic">
            <label for="titleInput">Title</label>
            <input  class="form-control" id="titleInput" aria-describedby="emailHelp" placeholder="Title" v-model="book.title">
          </div>

          <div class="form-group my-3 font-italic">
            <label for="authorInput">Author</label>
            <input  class="form-control" id="authorInput" placeholder="Author" v-model="book.author"> 
          </div>

          <div class="form-group my-3 font-italic">
            <label for="genreInput">Genre</label>
            <input  class="form-control" id="genreInput" placeholder="Genre" v-model="book.genre">
          </div>

          <div class="form-group my-3 font-italic">
            <label for="descriptionInput">Description</label>
            <textarea class="form-control" id="descriptionInput" placeholder="Description" v-model="book.description"></textarea>
          </div>

          <div class="form-group my-3 font-italic">
            <label for="descriptionInput">Image Link</label>
            <input  class="form-control" id="imglinkInput" placeholder="Image Link" v-model="book.imglink">
          </div>

          <button @click="addBookToDb()" type="button" class="btn btn-info w-100 mt-3">Submit</button>
        </form>
      </div>

      <!-- Book list module -->
      <book-list class="w-25 shadow-lg"></book-list>

    </div>
  </div>
</template>




<style>
.form-group{
  margin:0px;
}

</style>

<script>
import BookDataService from "../services/BookDataService";
import BookList from './Modules/Books/BookList.vue';

export default {
  name: "Dev Tools",
  data: () => {
    return {
      // Book to be added
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

      // Reset form values to empty
      this.book = {
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
  components: {
    BookList,
  },
}



// BEGIN HERE WITH FIGURING OUT HOW TO MODEL THE INPUT IN THE MODULE ACCORDING TO THE METHOD







</script>
