<template>
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