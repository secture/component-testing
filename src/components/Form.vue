<template>
  <progress-bar :maxSteps="maxSteps" :step="stepNumber" />
  <div class="form">
    <header>
      <Explanation :title="title" :subtitle="subtitle" />
    </header>

    <main>
      <div class='row'>
        <div class='column'>
          <BaseInput label="Name" />
        </div>
        <div class='column'>
          <BaseInput label="Surnames" />
        </div>
      </div>

      <div class='row'>
        <div class='column'>
          <BaseInput label="Address" />
        </div>
        <div class='column'>
          <BaseInput label="Accept conditions" type="checkbox" />
        </div>
      </div>
    </main>

    <footer>
      <div class="button-group">
        <BaseButton v-if="stepNumber > 1" :onClick="back">Back</BaseButton>
        <BaseButton v-if="maxSteps > stepNumber" :onClick="next">Next</BaseButton>
        <BaseButton v-else :onClick="submit">Submit</BaseButton>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Explanation from './Explanation.vue';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';
import ProgressBar from './ProgressBar.vue';
import { ref } from 'vue';

const title = 'Testing Form';
const subtitle = 'This form is created with testable components.';

const stepNumber = ref(1)
const maxSteps = 3
const next = () => {
  if (stepNumber.value < maxSteps) {
    stepNumber.value++
  }
}

const back = () => {
  if (stepNumber.value > 1) {
    stepNumber.value--
  }
}

const submit = () => {
  alert("Form Submitted")
}
</script>

<style scoped>
.form {
  width: 700px;
}

.button-group * {
  margin-left: 23px;
}

header {
  line-height: 1.5;
}

main {
  margin: 20px 0 20px 0;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
