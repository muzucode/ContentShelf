<template>
		<div class="container w-25 p-4 bg-teal rounded shadow-lg ">
		<h3><strong>Module</strong>: Add study</h3>
		<hr/>
		<form>

			<div class="form-group my-3 font-italic">
				<label for="titleInput">Title</label>
				<input  class="form-control" id="titleInput" aria-describedby="emailHelp" placeholder="Title" v-model="study.title">
			</div>

			<div class="form-group my-3 font-italic">
				<label for="authorInput">Author</label>
				<input  class="form-control" id="authorInput" placeholder="Author" v-model="study.author"> 
			</div>

			<div class="form-group my-3 font-italic">
				<label for="topicInput">Topic</label>
				<input  class="form-control" id="topicInput" placeholder="Topic" v-model="study.topic">
			</div>

			<div class="form-group my-3 font-italic">
				<label for="descriptionInput">Description</label>
				<textarea class="form-control" id="descriptionInput" placeholder="Description" v-model="study.description"></textarea>
			</div>

			<div class="form-group my-3 font-italic">
				<label for="reslinkInput">Study Resource Link</label>
				<input  class="form-control" id="reslinkInput" placeholder="Study Resource Link" v-model="study.imglink">
			</div>

			<div class="form-group my-3 font-italic">
				<label for="imglinkInput">Image Link</label>
				<input  class="form-control" id="imglinkInput" placeholder="Image Link" v-model="study.imglink">
			</div>

			<button @click="addStudyToDb()" type="button" class="btn btn-info w-100 mt-3">Submit</button>
		</form>
	</div>
</template>

<script>
import StudyDataService from '../../../../services/StudyDataService'



export default {
  name: "Add Study Module",
  data: () => {
    return {
      // Book to be added
      study: {
				title:  '',
				author: '',
				topic: '',
				description: '',
				imglink: 'https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg',
				hyperlink: '',
				date: Date.now,
				hidden: false,
      }
    }

  },
  methods: {
    addStudyToDb: function(){
			// Study is modeled through inputs and 'study' data object
			const study = {
				title: this.study.title,
				author: this.study.author,
				topic: this.study.topic,
				description: this.study.description,
				imglink: this.study.imglink,
				hyperlink: this.study.hyperlink,
				date: Date.now,
				hidden: false,
			};

      console.log('Frontend addBookToDb Method Message: Attempting to add following study to DB...');
      console.log(study);

			// Add a study to db
			StudyDataService.addOne(study);

      // Reset form values to empty
      this.study = {
          title:  '',
          author: '',
          topic: '',
          description: '',
          imglink: 'https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg',
          hyperlink: '',
					date: Date.now,
          hidden: false,
      };
		}
  }
}
</script>

<style>
.form-group{
  margin:0px;
}
</style>