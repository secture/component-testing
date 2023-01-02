<template>
    <div class="form-group">
        <label v-if="label" :for="id" class="ccaaLabel">{{ label }}</label>
        <select :id="id">
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>

export default {
    props: {
        label: {
            type: String,
            default: "",
        },
        options: {
            type: Array,
            default: function () {
                return []
            }
        },

        modelValue: {
            type: [String, Number],
            default: ""
        },

        id: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>
.form-group {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.ccaaLabel {
    margin-bottom: 10px;
}
</style>