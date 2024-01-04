<template>
    <div tabindex="0" :class="$style.card" class="global-scale-animation">
        <slot />
    </div>
</template>

<script setup>
</script>

<style scoped module>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    gap: 4px;
    padding: 16px;

    border-radius: 20px;
    background: var(--colors-background-secondary);

}
</style>