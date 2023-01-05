<template>
    <main>
        <div class='row'>
            <div class='column'>
                <BaseInput label="Username" :modelValue="secondStepData.username" @update:modelValue="updateUsername" />
            </div>
            <div class='column'>
                <BaseInput label="e-mail" :modelValue="secondStepData.email" @update:modelValue="updateEmail" />
            </div>
        </div>
    </main>
</template>

<script>

import { defineComponent } from '@vue/runtime-core';
import BaseInput from '../BaseInput.vue';

export default defineComponent({
    props: ['secondStepData'],
    emits: ['update:secondStepData'],
    components: {
        BaseInput
    },
    setup(props, { emit }) {
        function updateUsername(username) {
            emit("update:secondStepData", {
                username: username,
                email: props.secondStepData.email
            })
        }

        function updateEmail(email) {
            emit("update:secondStepData", {
                username: props.secondStepData.username,
                email: email
            })
        }
        return {
            updateUsername,
            updateEmail
        }
    }
})
</script>