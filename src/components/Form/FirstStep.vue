<template>
    <main>
        <div class='row'>
            <div class='column'>
                <BaseInput label="Name" :modelValue="firstStepData.name" @update:modelValue="changeName" />
            </div>
            <div class='column'>
                <BaseInput label="Surnames" :modelValue="firstStepData.surname" @update:modelValue="changeSurname" />
            </div>
        </div>
        <div class='row'>
            <div class='column'>
                <BaseInput label="Address" :modelValue="firstStepData.address" @update:modelValue="changeAddress" />
            </div>
            <div class='column'>
                <BaseInput label="Accept conditions" type="checkbox" :modelValue="firstStepData.conditions"
                    @update:modelValue="changeConditions" />
            </div>
        </div>
    </main>
</template>

<script>

import { defineComponent } from 'vue';
import BaseInput from '../BaseInput.vue';

export default defineComponent({
    props: ['firstStepData'],
    components: {
        BaseInput
    },
    emits: ['update:firstStepData'],
    setup(props, { emit }) {

        function changeName(name) {
            const result = {
                name: name,
                surname: props.firstStepData.surname,
                address: props.firstStepData.address,
                conditions: props.firstStepData.conditions
            }
            emit('update:firstStepData', result)
        }
        function changeSurname(surname) {
            const result = {
                name: props.firstStepData.name,
                surname: surname,
                address: props.firstStepData.address,
                conditions: props.firstStepData.conditions
            }

            emit('update:firstStepData', result)
        }
        function changeAddress(address) {
            const result = {
                name: props.firstStepData.name,
                surname: props.firstStepData.surname,
                address: address,
                conditions: props.firstStepData.conditions
            }

            emit('update:firstStepData', result)
        }
        function changeConditions(conditions) {
            const result = {
                name: props.firstStepData.name,
                surname: props.firstStepData.surname,
                address: props.firstStepData.address,
                conditions: conditions
            }

            emit('update:firstStepData', result)
        }
        return {
            changeName,
            changeSurname,
            changeAddress,
            changeConditions
        }
    }

})

</script>