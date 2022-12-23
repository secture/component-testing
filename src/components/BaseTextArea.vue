<template>
    <label :id="id">{{ label }}</label>
    <textarea :id="id" :cols="cols" :rows="rows" :maxlength="maxLength" :minlength="minLength"
        :placeholder="content"></textarea>
</template>

<script>

export default {
    props: {
        cols: Number,
        rows: Number,
        id: String,
        minLength: Number,
        maxLength: Number,
        content: String,
        label: String
    }
}
</script>