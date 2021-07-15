<template>
  <div class="container">
		<!-- Nav -->
		<shelves-nav></shelves-nav>

		<!-- Shelf heading -->
    <ShelfHeading>
      <template v-slot:title>Study Shelf</template>
      <template v-slot:subtitle>My favorite <strong>study resources</strong> as well as any <strong>news articles</strong> that I've come across over time</template>
    </ShelfHeading>

		<!-- Studies -->
		<div class="row p-4 d-flex justify-content-between" id="itemTable"  v-if="studies">
			<a :href="study.hyperlink" v-for="study in studies" :key="study" class="col-4 p-3 text-wrap mb-4 shadow-lg rounded border border-secondary" id="itemHolder">
				<h6 class="" id="item-title">{{study.title}}</h6>
				<h6 class="mt-2 pt-0 text-muted" id="item-subtitle" >{{study.author}}</h6>
			</a>
		</div>
	</div>
</template>

<script>
import ShelvesNav from '../../views/Shelves/ShelvesNavView.vue';
import StudyDataService from '../../services/StudyDataService';
import ShelfHeading from '@/components/ShelfHeading';

export default {
	
	name: 'Study Shelf',
	data: () => {
		return{
			studies : [] // Books gotten from database
		}
  },
	components: {
		ShelvesNav,
    ShelfHeading
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
#itemHolder {

}
</style>