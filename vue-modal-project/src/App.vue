<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal :header='header' :theme="theme" @close="toggleModal">
      <h2>Ninja giveaway :D</h2>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal :header='header' :theme="theme" @close="toggleModalTwo">
      <h2>Best site ever</h2>
      <template v-slot:links>
        <a href="#">Visit our store</a>
        <a href="#">About</a>
        <a href="#">Rayan Gosling</a>
      </template>
      <h4>You wont believe how good it is</h4>
    </Modal>
  </div>
  <button @click="toggleModal">Open modal</button>
  <button @click="toggleModalTwo">Open modal 2</button>
  <!-- <button @click.shift="toggleModal">Open modal</button> -->
  <!-- <button @click.right="toggleModal">Open modal</button> -->
  <!-- <button @click.alt="toggleModal">Open modal</button> -->
</template>

<script>

import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My first Vue app',
      header: 'Sign up for free :D',
      theme: 'sale',
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
