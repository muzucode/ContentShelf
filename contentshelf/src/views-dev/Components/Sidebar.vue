<template>
    <div class="container bg-dark pt-4" id="dev-sidebar" style="width: 300px">

        <h1 class="text-white">ContentShelf</h1>
        <h6 class="text-white font-italic">Developer Tools</h6>
        <hr color="white" class="mb-5"/>
        <div class="container rounded">
            <div class="row mb-3">
                <div class="col">
                    <router-link to="/dev-tools/books"><button type="button" class="btn btn-secondary w-100">Books</button></router-link>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <router-link to="/dev-tools/study"><button type="button" class="btn btn-secondary w-100">Study</button></router-link>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <router-link to="/dev-tools/development"><button type="button" class="btn btn-secondary w-100">Development</button></router-link>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <router-link to="/dev-tools/music"><button type="button" class="btn btn-secondary w-100">Music</button></router-link>
                </div>
            </div>
						<div class="row mb-3">
                <div class="col">
                    <router-link to="/dev-tools/misc."><button type="button" class="btn btn-secondary w-100">Misc.</button></router-link>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: ['activeMods']
}
</script>

<style>
#dev-sidebar{
    height: 100vh;
}
</style>