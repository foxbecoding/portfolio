<script lang="ts" setup>

const props = defineProps({
    width: Number
})

</script>

<template>
    <div>
        <img src="/logo.png" :width="props.width ? props.width : 150" />
    </div>
</template>