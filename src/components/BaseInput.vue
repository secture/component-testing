<template>
  <div class="input-container">
    <div v-if="type === 'checkbox'" class="checkbox-container">
      <label v-if="label" :for="id">
        {{ label }}
      </label>
      <input :id="id" :type="type" :value="modelValue" @input="updateCheckboxInput" class="border w-full p-1" />
    </div>
    <div v-else>
      <div class="row separated-label">
        <label v-if="label" :for="id">
          {{ label }}
        </label>
      </div>
      <div class="row separated-input">
        <input :id="id" :type="type" :value="modelValue" @input="updateInput" class="border w-full p-1" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
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
      type: [String, Number, Boolean],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    function updateInput(event) {
      emit("update:modelValue", event.target.value);
    }
    function updateCheckboxInput(event) {
      emit('update:modelValue', event.target.checked)
    }

    return {
      updateInput,
      updateCheckboxInput
    }
  }
});

</script>


<style scoped>
.checkbox-container {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
}

.checkbox-container label {
  margin-right: 20px;
}

.separated-label {
  width: 100%;
  margin-bottom: 10px;
}

.separated-input input {
  width: 80%;
}

input {
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
