const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Nazar',
            middleName: '', 
            lastName: 'Dev',
            url: 'https://leobit.com',
            raw_url: '<a href="https://leobit.com" target="_blank">Leobit</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(()=>{
                this.age = 20
            },3000)
        }
    }
}).mount('#app')

setTimeout(()=>{
    vm.firstName = 'Bob'
}, 2000)

Vue.createApp({
    data(){
        return {
            firstName: 'Peter',
            lastName: 'Tester'
        }
    }
}).mount('#app2')