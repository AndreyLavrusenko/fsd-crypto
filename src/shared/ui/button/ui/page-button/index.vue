<template>
    <button :class="$style.page_button">
        <template v-for="item in 3">
            <div :class="item === props.activeTab ? [$style.pin_active, $style.pin] : [$style.pin_default, $style.pin]"></div>
        </template>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    activeTab: Number,
})
</script>

<style scoped  module>
.page_button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;
    padding: 12px;

    border-radius: 120px;
    background: var(--colors-background-secondary, #F4F5F8);
}

.pin {
    display: block;

    width: 8px;
    height: 8px;

    border-radius: 50%;
}

.pin_default {
    background-color: var(--colors-tertiary, #CFD1DB);
}

.pin_active {
    background-color: var(--colors-primary, #2B2D33);
}

</style>