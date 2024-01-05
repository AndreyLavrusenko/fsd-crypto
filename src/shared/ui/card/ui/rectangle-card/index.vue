<template>
    <div :class="$style.rectangle" :style="{background: props.linearGradient}"><slot /></div>
</template>

<script setup>
const props = defineProps(['linearGradient']);
</script>

<style scoped module>
.rectangle {
    padding: 20px;
    margin-right: 16px;

    border-radius: 24px;
    box-shadow: var(--shadow-m);
}
</style>