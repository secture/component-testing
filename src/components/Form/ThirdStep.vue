<template>
    <main>
        <div class='row'>
            <div class='column'>
                <BaseInput label="password" type="password" />
            </div>
            <div class='column'>
                <BaseInput label="repeat password" type="password" />
            </div>
        </div>
    </main>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import BaseInput from '../BaseInput.vue';

export default defineComponent({
    components: {
        BaseInput
    }
})
</script>