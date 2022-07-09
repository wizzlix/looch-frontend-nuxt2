<template>
    <div id="PageNameH1">
        <h1 class="title"><center><i><strong>{{ pageName }}</strong></i></center></h1>

        <div class="container-fluid">
            <hr class="dropdown-divider">
        </div>
    </div>
</template>

<script>

export default {
    name: "PageNameH1",

    props: {
        pageName: {
            type: String,
            required: true
        }
    },
}
</script>


<style scoped>

.title {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

</style>
