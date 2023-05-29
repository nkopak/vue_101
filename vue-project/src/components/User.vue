<template>
    <button type="button" @click="onClickAge">Increase age</button>
    <button type="button" @click="ageChangeFn(3)">Increase age CB</button>
    <p>
        The user is {{ age }} years old
    </p>
    <p>
        Doubdle age: {{ ageDoubled }}
    </p>
</template>

<script>
 export default {
    name: 'User',
    props: {
        age: {
            type: Number,
            required: true
        },
        ageChangeFn: Function
    },
    emits: ['age-change'],
    methods: {
        onClickAge() {
            this.$emit('age-change', 3)
        }
    },
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    }
 }
</script>

<style lang="scss" scoped>

</style>