<template>
  <div class="input-container">
    <label v-if="label" :for="id" >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="border w-full p-1"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>


<style scoped>
label {
  width: 100%;
}

input {
  width: 100%;
  line-height: 25px;
  border-radius: 5px;
}

input:focus-visible {
  outline: auto;
}
.input-container {
  padding: 10px;
}
</style>
