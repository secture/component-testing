<template>
    <main>
        <div class='row'>
            <div class='column'>
                <BaseInput label="Username" />
            </div>
            <div class='column'>
                <BaseInput label="e-mail" />
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