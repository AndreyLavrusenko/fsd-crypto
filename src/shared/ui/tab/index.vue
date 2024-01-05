<template>
    <div :class="[$style.tab, props.isActive ? $style['active-tab'] : '']">
        <slot/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isActive: Boolean
})
</script>

<style scoped module>
.tab {
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 16px;
    margin-right: 12px;

    white-space: nowrap;

    color: var(--colors-primary);
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.44px;

    border-radius: 120px;
    background: var(--colors-background-secondary, #F4F5F8);
}

.active-tab {
    background-color: var(--colors-primary);
    color: var(--colors-white)
}
</style>