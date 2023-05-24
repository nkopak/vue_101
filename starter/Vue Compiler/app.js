let vm = Vue.createApp({
  // data() {
  //   return {
  //     message: "Hello world!"
  //   }
  // },
  // template: `{{message}}`
})

vm.component('hello', {
  template: `<h2>{{ message }}</h2>`,
  data() {
    return {
      message: 'Hello Vue component!'
    }
  }
})

vm.mount('#app')

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount('#app2')
