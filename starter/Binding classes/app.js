let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            mode: 1,
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
            {
                name: 'John',
                message: 'Hello world!'
            },
            {
                name: 'Rick',
                message: 'I like pie.'
            },
            {
                name: 'Amy',
                message: 'Skydiving is fun!'
            }
        ]
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        },
        circle_size() {
            return { width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px' }
        },
        circle_rotation() {
            return {transform: `rotate(30deg)`}
        }
    },
    methods: {
        move() {
        const first = this.people.shift()

        this.people.push(first)
        }
    } 
}).mount('#app')