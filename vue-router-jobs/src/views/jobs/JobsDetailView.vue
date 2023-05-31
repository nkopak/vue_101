<template>
    <h1>Job Details Page</h1>
    <p>The job id is: {{ id }}</p>
    <div v-if="job">
        <p>Title: {{ job.title }}</p>
        <p>Detail: {{ job.details }}</p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                job: null
            }
        },
        mounted() {
            fetch(`http://localhost:3000/jobs/${this.id}`)
            .then((res) => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
        }
        
    }
</script>

<style lang="scss" scoped>

</style>