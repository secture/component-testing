<template>
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
      <BaseButton :onClick="click">Submit</BaseButton>
    </footer>
  </div>
</template>

<script setup>
import Explanation from './Explanation.vue';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

const title = 'Testing Form';
const subtitle = 'This form is created with testable components.';

const click = () => {
  return console.log('button clicked!');
}
</script>

<style scoped>
  .form {
    width: 700px;
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
