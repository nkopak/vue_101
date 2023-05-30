<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal :header='header' :theme="theme" @close="toggleModal"/>
  </div>
  <button @click.shift="toggleModal">Open modal</button>
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
