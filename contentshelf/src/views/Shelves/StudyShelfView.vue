<template>
  <div class="container">
		<!-- Nav -->
		<shelves-nav></shelves-nav>

		<!-- Shelf heading -->
    <ShelfHeading>
      <template v-slot:title>Study Shelf</template>
      <template v-slot:subtitle><strong>Resources</strong> I find useful as well as <strong>news articles</strong> that I find interesting</template>
    </ShelfHeading>

		<!-- Studies -->
		<div class="row p-4 d-flex" id="itemTable"  v-if="studies">
			<a :href="study.hyperlink" v-for="study in studies" :key="study" class="col p-3 text-wrap mr-4 mb-4 shadow-lg rounded" id="itemHolderStudy">
				<h6 class="" id="item-title">{{study.title}}</h6>
				<h6 class="mt-2 pt-0" id="item-subtitle" >{{study.author}}</h6>
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
#itemHolderStudy {
  background-color:rgb(108, 125, 170);
  color:white;
  font-style: bold;
}
#itemHolderStudy:hover {
  background-color:rgb(84, 102, 151);
}
#item-title{
	font-weight: bold;
}
#item-subtitle{
	font-size:13px;
	font-style: italic;
}
</style>