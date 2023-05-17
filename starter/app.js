Vue.createApp({
    data(){
        return {
            firstName: 'Nazar',
            lastName: 'Dev'
        }
    }
}).mount('#app')

Vue.createApp({
    data(){
        return {
            firstName: 'Peter',
            lastName: 'Tester'
        }
    }
}).mount('#app2')