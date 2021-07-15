<template>
	<div class="container" id="dashboard-container">

		<shelves-nav></shelves-nav>
			<CenterMessage>
				<template v-slot:title>
					<h1 class="display-4 text-secondary ml-auto mr-auto">Check out the shelves!</h1>
				</template>

				<template v-slot:subtitle>
					<h6 class="text-secondary ml-auto mr-auto font-italic">Select a shelf above to see some of my favorite things!</h6>
				</template>
			</CenterMessage>


	</div>
</template>


<script>

import BookDataService from "../../services/BookDataService.js";
import ShelvesNav from '../Shelves/ShelvesNavView.vue';
import CenterMessage from '@/components/CenterMessage.vue';

export default {
  name: "Dashboard",
  components: {
	ShelvesNav,
	CenterMessage
  },
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
