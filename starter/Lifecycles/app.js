let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('Before create function called!', this.message)
  },
  created() {
    console.log('Created function called!', this.message)
  },
  beforeMount() {
    console.log('beforeMount function called!', this.$el)
    // $el - element Vue is mounted to
  },
  mounted() {
    console.log('Mounted function called!', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate() called')
  },
  updated() {
    console.log('Updated() called')
  },
  beforeUnmount() {
    console.log('beforeUnmount() called')
  },
  unmounted() {
    console.log('unmounted() called')
  }
})

vm.mount('#app') //Just looks cleaner

// setTimeout(()=>{
//   vm.mount('#app')
// },3000)