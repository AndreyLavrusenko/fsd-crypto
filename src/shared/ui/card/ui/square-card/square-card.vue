<template>
    <div
        tabindex="0"
        :class="$style.card"
        class="global-scale-animation"
        :style="{borderTop: `3px solid ${props.borderTop}`}"
    >
        <slot/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    borderTop: String
})
</script>

<style scoped module>
.card {
    width: 100%;

    padding: 16px;

    border-radius: 20px;
    background: var(--colors-white, #FFF);

    /* M */
    box-shadow: var(--shadow-m);
}

</style>