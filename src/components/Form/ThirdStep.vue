<template>
    <main>
        <div class='row'>
            <div class='column'>
                <BaseInput label="password" type="password" :modelValue="thirdStepData.password"
                    @update:modelValue="updatePassword" />
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
    props: ['thirdStepData'],
    emits: ['update:thirdStepData'],
    components: {
        BaseInput
    },

    setup(props, { emit }) {
        function updatePassword(password) {
            emit("update:thirdStepData", {
                password: password
            })
        }
        return {
            updatePassword
        }
    }
})
</script>