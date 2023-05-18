const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Nazar',
            lastName: 'Dev',
            url: 'https://leobit.com',
            raw_url: '<a href="https://leobit.com" target="_blank">Leobit</a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        increment() {
            this.age++
        },
        updateLastName(msg, event) {
            event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
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