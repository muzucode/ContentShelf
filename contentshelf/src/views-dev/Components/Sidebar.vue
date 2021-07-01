<template>
    <div class="container bg-dark pt-4" id="dev-sidebar" style="width: 300px">

        <h1 class="text-white">ContentShelf</h1>
        <h6 class="text-white font-italic">Dev Tools</h6>
        <hr color="white" class="mb-5"/>
        <div class="container rounded">
            <div class="row mb-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary w-100">Books</button>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary w-100">Study</button>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary w-100">Development</button>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <button type="button" class="btn btn-secondary w-100">Misc.</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>
#dev-sidebar{
    height: 100vh;
}
</style>