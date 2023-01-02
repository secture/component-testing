<template>
    <div>
        <progress class="progress-bar" :max="maxSteps" :value="step"></progress>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: {
        step: {
            type: Number,
            default: 1
        },
        maxSteps: {
            type: Number,
            default: 100
        }
    }
})
</script>

<style>
.progress-bar {
    width: 100%;
}
</style>