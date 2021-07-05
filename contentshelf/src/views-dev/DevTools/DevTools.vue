<template>
  <div class="container">
    <h1 class="p-4 display-3">Dev Tools</h1>
    <hr class="mb-5"/>

    <!-- Modules container -->
    <div class="container d-flex" id="modules-container">
    <!-- If there is no sub route then display warning -->
      <h1 v-if="!$route.params.shelf" class="display-5 text-secondary">Select a shelf from the side menu to display modules.</h1>

      <!-- Modules - Books -->
      <div v-if="$route.params.shelf=='books'" class="container d-flex" id="modules-books" >
        <!-- Add book module -->
        <add-book-module></add-book-module>
        <!-- Book list module -->
        <book-list-module class="w-25 shadow-lg"></book-list-module>
      </div>

      <!-- Modules - Study -->
      <div v-if="$route.params.shelf=='study'" class="container d-flex" id="modules-study">
        <!-- Add study module -->
        <add-study-module></add-study-module>
        <!-- Study list module -->
        <study-list-module class="w-25 shadow-lg"></study-list-module>
      </div>


    </div>
  </div>
</template>


<script>
import BookListModule from './Shelves/Books/BookList.vue';
import AddBookModule from './Shelves/Books/AddBookModule.vue';
import AddStudyModule from './Shelves/Study/AddStudyModule.vue';
import StudyListModule from './Shelves/Study/StudyListModule.vue';


export default {
  name: "Dev Tools",
  data: () => {
    return {

    }

  },
  methods: {

  },
  components: {
    BookListModule,
    AddBookModule,
    AddStudyModule,
    StudyListModule
  }
}

</script>





<style>
.form-group{
  margin:0px;
}

</style>