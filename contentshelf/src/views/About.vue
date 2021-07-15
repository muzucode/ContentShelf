<template>
  	<CenterMessage>
		<template v-slot:title>
			<h1 class="display-4 text-secondary ml-auto mr-auto">Under construction!</h1>
		</template>

		<template v-slot:subtitle>
			<h6 class="text-secondary ml-auto mr-auto font-italic">It seems that this page is under construction!</h6>
		</template>
	</CenterMessage>
</template>

<script>
import CenterMessage from '@/components/CenterMessage.vue';

export default {
  name: "About",
	components: {
		CenterMessage
	}
}
</script>

<style>

</style>