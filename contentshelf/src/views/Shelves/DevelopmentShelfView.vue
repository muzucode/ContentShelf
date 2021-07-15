<template>
	<div class="container">
		<!-- Nav -->
		<shelves-nav></shelves-nav>
		<!-- Shelf heading -->
    <ShelfHeading>
      <template v-slot:title>Development Shelf</template>
      <template v-slot:subtitle>Check out my GitHub to see what I've been up to!</template>
    </ShelfHeading>

    <a target="_blank" href="https://github.com/muzucode"><img class="img-fluid w-50 mt-5" src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"/></a>
    <h6 class="mt-3 text-secondary">(Click me!)</h6>
	</div>
</template>

<script>
import ShelvesNav from '../../views/Shelves/ShelvesNavView.vue';
import ShelfHeading from '@/components/ShelfHeading';


export default {
	name: 'Development Shelf',
	data: () => {
		return{
		}
  },
	components: {
		ShelvesNav,
    ShelfHeading
	}
}
</script>