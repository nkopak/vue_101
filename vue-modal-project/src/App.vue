<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <h1>{{ title }}</h1>
  <Modal :header='header' :theme="theme"/>
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
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
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
