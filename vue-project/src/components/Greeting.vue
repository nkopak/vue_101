<template>
    <p v-if="age > 18">{{ msg }}</p>
    <p v-else>You must be 18 years old to see this</p>
</template>

<script>
    export default {
        name: 'Greeting',
            data() {
                return {
                    msg: 'Hello vueJS'
                }
        },
        props: ["age"]
  }
</script>

<style scoped lang="scss">
/* Scoped styles will only apply to current component */
    p:hover {
        color: darken(#cc4444, 15%);
    }
</style>
