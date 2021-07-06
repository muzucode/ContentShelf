<template>
  	<div class="container">
		<!-- Nav -->
		<shelves-nav></shelves-nav>
		<!-- Title -->
		<h1 class="my-5 display-3">My study shelf</h1>
		<!-- Studies -->
		<div class="row p-4 d-flex justify-content-between" id="itemTable"  v-if="studies">
			<div v-for="study in studies" :key="study" class="col-4 pl-3 pr-3 text-wrap mb-4 border border-danger" id="itemHolder">
				<router-link :to="'/study/'+ study._id">
					Hello
				</router-link>
				<h6 class="mt-2 pt-0 mb-0 pb-0" id="item-title">{{study.title}}</h6>
				<h6 class="mt-1 pt-0 text-muted" id="item-subtitle" >{{study.author}}</h6>
			</div>
		</div>
	</div>
</template>

<script>
import ShelvesNav from '../../views/Shelves/ShelvesNavView.vue';
import StudyDataService from '../../services/StudyDataService';

export default {
	
	name: 'Study Shelf',
	data: () => {
		return{
			studies : [] // Books gotten from database
		}
  },
	components: {
		ShelvesNav
	},
	methods: {
		getStudiesFromDb: function(){
			// Get books from book db
			StudyDataService.getAll()
			.then((res) => {
			console.log('(Frontend getStudiesFromDb) Fetched items: ');
			console.log(res);
			this.studies = res;
			console.log('(Frontend getStudiesFromDb) The current items in the instance are: ');
			console.log(this.studies);
			});
		}
	},
		created: function(){
		this.getStudiesFromDb();
	}
}
</script>

<style>

</style>