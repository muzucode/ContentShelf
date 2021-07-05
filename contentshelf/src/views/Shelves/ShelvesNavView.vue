<template>
  <div id="nav">
		<router-link to="/shelves/books">Books</router-link> | 
		<router-link to="/shelves/study">Study</router-link> | 
		<router-link to="/shelves/development">Development</router-link> | 
		<router-link to="/shelves/development">Music</router-link> | 
		<router-link to="/shelves/miscellaneous">Misc.</router-link> 
	</div>
</template>

<script>
export default {
	name: 'Shelves Nav'
}
</script>

<style>

</style>