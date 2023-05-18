let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            mode: 1
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
    }
}).mount('#app')