<template>
    <div class="container w-50 rounded p-4">
      
        <!-- Title -->
        <h3><strong>Module</strong>: All books</h3>
        <hr/>

        <!-- Rows of books -->
        <div id="book-row" v-for="item in bookList" :key="item" class="row text-black my-3" >
          <div class="col-lg font-weight-bold">
            <button class="btn w-100 h-100 font-italic bg-light border border-secondary" id="book-name">
              {{item.title}}
            </button>
            
          </div>

          <div class="col- mr-2 text-white">
            <button class="btn w-100 h-100 bg-light border border-secondary font-italic text-white">
              <img src="../../../../assets/open-iconic-master/svg/pencil.svg" width="20" height="20"/>
            </button>
          </div>

          <div class="col- text-white">
            <button class="btn w-100 h-100 bg-danger font-italic text-white border border-dark"  @click="deleteBook(item._id)">
              <img src="../../../../assets/open-iconic-master/svg/trash.svg" width="20" height="20"/>
            </button>
          </div>
        </div>
    </div>
</template>

<script>
import BookDataService from '../../../../services/BookDataService';

export default {
    name: 'Book List Module',
    data: () => {
        return {
            // Books in book list
            bookList: []
        }
    },
    methods: {
        getAllBooks: function(){
        // Get all books from DB
            const bookList = BookDataService.getAll()
                .then((res) => {
                console.log('This is the gotten booklist');
                console.log(res);
                this.bookList = res;
                });
        },
        deleteBook: function(bookId){
          // Remove book with Id given
          console.log('Sending request to remove book with the following ID:');
          console.log(bookId);

          BookDataService.deleteOne(bookId);
        }
    },

      // Lifecycle Hook
    created: function() {
        this.bookList = this.getAllBooks();
  }
};



</script>

<style>

#book-row{
  margin-left:0px;
  margin-right:0px;
  border: 0px solid #ffc118;
}
/* #book-name{
  background-color:rgb(235, 235, 235);
} */
</style>
