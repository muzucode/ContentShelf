<template>
		<div class="container w-100 d-flex" id="main-wrapper">
			<div class="container d-flex flex-column w-100 align-self-center">

				<!-- Accepts a title -->
				<slot name="title"></slot>

				<!-- Accepts a subtitle -->
				<slot name="subtitle"></slot>

			</div>
		</div>
</template>

<script>
export default {
	name: "CenterMessage"
}
</script>

<style>

</style>