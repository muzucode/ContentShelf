<template>
<div class="container" id="dashboard-container">


	<div id="nav-2" class="mb-4">
		<a @click="setCategory('book'), getBooksFromDb()">Books</a> | 
		<a @click="setCategory('study')">Study</a> | 
		<a @click="setCategory('dev./GitHub')">Development / GitHub</a> | 
		<a @click="setCategory('miscellaneous')">Misc.</a>
	</div>


	<h1 class="mb-5 display-3">My {{category}} shelf</h1>

	<div class="row p-4 justify-content-center" id="itemTable"  v-if="items">
			<div v-for="item in items" :key="item" class="col-2 pl-3 pr-3 text-wrap mb-4" id="itemHolder">
				<img class="img-fluid rounded shadow-lg" :src="item.imglink"/>
				<h6 class="mt-2 pt-0 mb-0 pb-0" id="item-title">{{item.title}}</h6>
				<h6 class="mt-1 pt-0 text-muted" id="item-subtitle" >{{item.author}}</h6>
			</div>
	</div>

	</div>
</template>


<script>

import BookDataService from "../services/BookDataService.js"

export default {
  name: "Dashboard",
  data: () => {
		return{
			category: '', // Name of selected category
			items : [] // Items gotten from database
		}
  },
  methods:{
		setCategory: function(selection) {
			// Set selection equal to whatever the selected category is
			this.category = selection;
			// this.items = getItemsFromDB(selection)
		},
		getBooksFromDb: function(){
			// Get books from book db
			BookDataService.getAll()
			.then((res) => {
			console.log('(Frontend getBooksFromDb) Fetched items: ');
			console.log(res);
			this.items = res;
			console.log('(Frontend getBooksFromDb) The current items in the instance are: ');
			console.log(this.items);
			});


			
		}
	}
};



// CONTINUE WORKING ON THIS, ADD A BUTTON THAT ALLOWS ME TO ADD BOOKS TO THE DATABASE AND SUCH.


</script>



<style>
#item-title{
	font-weight: bold;
}
#item-subtitle{
	font-size:13px;
	font-style: italic;
}

#itemHolder {
	border: 0px solid red;

	/* background-color:greenyellow; */
}

#itemTable {
	border: 0px solid black;
}

#dashboard-container{
	border: solid 0px black;
}

#nav-2 a:hover{
	cursor:pointer;
	text-decoration: underline;
}

#nav-2 a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
