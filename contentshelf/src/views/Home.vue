<template>
	<CenterMessage>
		<template v-slot:title>
			<h1 class="display-4 text-secondary ml-auto mr-auto">Welcome to Sean's site!</h1>
		</template>

		<template v-slot:subtitle>
			<h6 class="text-secondary ml-auto mr-auto font-italic">Try clicking some of the options in the top nav bar!</h6>
		</template>
	</CenterMessage>
</template>


  <!-- <div class="container w-100 d-flex" id="main-wrapper">
      <div class="container d-flex flex-column w-100 align-self-center">
				<h1 class="display-4 text-secondary ml-auto mr-auto">Welcome to Sean's site!</h1>
				<h6 class="text-secondary ml-auto mr-auto font-italic">Try clicking some of the options in the top nav bar!</h6>
      </div>
  </div> -->


<script>
// @ is an alias to /src
import CenterMessage from '@/components/CenterMessage.vue';

export default {
  name: "Home",
	components: {
		CenterMessage
	}
};
</script>

<style>
#main-wrapper{
    height:80vh
}

</style>