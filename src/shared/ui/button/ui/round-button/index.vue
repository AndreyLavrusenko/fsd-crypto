<template>
    <button class="round-button">
        <slot />
    </button>
</template>

<style scoped lang="scss">
    .round-button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;

        border-radius: 40px;
        background: var(--colors-white, #FFF);

        /* S */
        box-shadow: 0 6px 16px 0 rgba(43, 45, 51, 0.08);
    }
</style>