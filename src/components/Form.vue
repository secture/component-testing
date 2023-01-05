<template>
  <progress-bar :maxSteps="maxSteps" :step="stepNumber" />
  <div class="form">
    <header>
      <Explanation :title="title" :subtitle="subtitle" />
    </header>


    <keep-alive>
      <FirstStep v-model:firstStepData="firstStepData" v-if="stepNumber == 1" />
      <SecondStep v-model:secondStepData="secondStepData" v-else-if="stepNumber == 2" />
      <ThirdStep v-model:thirdStepData="thirdStepData" v-else-if="stepNumber == 3" />
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
import { ref } from 'vue';

const title = 'Testing Form';
const subtitle = 'This form is created with testable components.';

const firstStepData = ref({
  name: "",
  surname: "",
  address: "",
  conditions: ""
})

const secondStepData = ref({
  username: "",
  email: ""
})

const thirdStepData = ref({
  password: ""
})

const formData = ref({})


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
  //recoger todos los step en uno

  formData.value = {
    ...firstStepData.value,
    ...secondStepData.value,
    ...thirdStepData.value
  }

  console.log(formData.value);

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
