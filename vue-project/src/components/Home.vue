<template>
    <h1>Home Page</h1>
</template>

<script>
    export default {
        unmounted() {
            console.log('Unmounted')
        },
        activated() {
            console.log('ACTIVATED')
        },
        deactivated() {
            console.log('Deactivated')
        }
    }
</script>