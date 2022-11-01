<template>
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
        <BaseInput label="Postal code" />
      </div>
    </div>
  </main>

  <footer>
    <BaseButton>Submit</BaseButton>
  </footer>
</template>

<script setup>
import Explanation from './Explanation.vue';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

const title = 'Testing Form';
const subtitle = 'This form is created with testable components.';
</script>

<style scoped>
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

  .row {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
</style>
