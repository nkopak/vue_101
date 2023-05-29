<template>
   <form>
      <slot>No form to render</slot>
      <div class="help">
        <slot name="help"></slot>
      </div>
      <div class="fields">
        <slot name="fields"></slot>
      </div>
      <slot></slot>
      <div class="buttons">
        <slot name="buttons"></slot>
      </div>
    </form> 
</template>