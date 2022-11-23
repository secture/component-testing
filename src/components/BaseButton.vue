<template>
  <button class="normal"
      :class="type"
      :disabled="disabled"
      @click="onClick"
      data-testid="button-id"
      >
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    onClick: {
      type: Function,
    },
  },
};
</script>


<style scoped>
  button {
    padding: 10px 20px;
    border: 1px solid transparent;
    background-color: hsla(160, 100%, 37%, 1);;
    border-radius: 5px;
    cursor: pointer;
  }

  button [disabled]{
    cursor: not-allowed;
  }

  button .danger {
    background-color: #ff4949;
    color: #fff;
  }

  button .success {
    background-color: #13ce66;
    color: #fff;
  }
  
  button .info {
    background-color: #50bfff;
    color: #fff;
  }
</style>
