<template>
  <progress-bar :maxSteps="maxSteps" :step="stepNumber" />
  <div class="form">
    <header>
      <Explanation :title="title" :subtitle="subtitle" />
    </header>


    <keep-alive>
      <component :is="stepComponent" />
    </keep-alive>

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
import BaseButton from './BaseButton.vue';
import ProgressBar from './ProgressBar.vue';
import FirstStep from './Form/FirstStep.vue';
import SecondStep from "./Form/SecondStep.vue"
import ThirdStep from './Form/ThirdStep.vue';
import { computed, ref } from 'vue';

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

const stepComponent = computed(() => {
  switch (stepNumber.value) {
    case 1:
      return FirstStep
    case 2:
      return SecondStep
    case 3:
      return ThirdStep
    default:
      return new Error('COMPONENT_NOT_FOUND')
  }
})
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
