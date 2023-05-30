<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h2>{{ header }}</h2>
            <p>Modal content</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal-element',
  props: ['header', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .modal.sale {
        background-color: crimson;
        color: wheat;
    }
</style>
