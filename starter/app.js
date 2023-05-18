const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Nazar',
            lastName: 'Dev',
            url: 'https://leobit.com',
            raw_url: '<a href="https://leobit.com" target="_blank">Leobit</a>'
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