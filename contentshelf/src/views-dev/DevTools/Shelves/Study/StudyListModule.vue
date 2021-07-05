<template>
    <div class="container w-50 rounded p-4">
      
        <!-- Title -->
        <h3><strong>Module</strong>: All studies</h3>
        <hr/>

        <!-- Rows of books -->
        <div id="study-row" v-for="study in studyList" :key="study" class="row text-black my-3" >
          <div class="col-lg font-weight-bold">
            <button class="btn w-100 h-100 font-italic bg-light border border-secondary" id="study-name">
              {{study.title}}
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
import StudyDataService from '../../../../services/StudyDataService';

export default {
    name: 'Study List Module',
    data: () => {
        return {
            // Books in book list
            studyList: []
        }
    },
    methods: {
        getAllStudies: function(){
        // Get all books from DB
            const studyList = StudyDataService.getAll()
                .then((res) => {
                console.log('This is the gotten booklist');
                console.log(res);
                this.studyList = res;
                });
        },
        deleteBook: function(studyId){
          // Remove book with Id given
          console.log('Sending request to remove book with the following ID:');
          console.log(studyId);

          StudyDataService.deleteOne(studyId);
        }
    },

      // Lifecycle Hook
    created: function() {
        this.studyList = this.getAllStudies();
  }
};



</script>

<style>

#study-row{
  margin-left:0px;
  margin-right:0px;
  border: 0px solid #ffc118;
}
/* #book-name{
  background-color:rgb(235, 235, 235);
} */
</style>
