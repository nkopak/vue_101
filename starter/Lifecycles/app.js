let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})

vm.mount('#app') //Just looks cleaner

// setTimeout(()=>{
//   vm.mount('#app')
// },3000)