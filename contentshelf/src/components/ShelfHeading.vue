<template>
  <div class="container my-5">
    <!-- Accepts a title -->
    <h1 class="display-2 text-secondary">
      <slot name="title"></slot>
    </h1>

    <h6 class="text-secondary font-italic">
      <slot name="subtitle"></slot>
    </h6>
    <!-- Accepts a subtitle -->

  </div>
</template>

<script>
export default {
	name: "ShelfHeading"
}
</script>

<style>

</style>