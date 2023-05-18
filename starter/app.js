const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Nazar',
            lastName: 'Dev',
            url: 'https://leobit.com'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
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