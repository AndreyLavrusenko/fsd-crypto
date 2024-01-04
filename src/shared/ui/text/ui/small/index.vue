<template>
    <p :class="$style.text">
        <slot />
    </p>
</template>

<style scoped module>
    .text {
        color: var(--colors-secondary, #9194A6);

        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 138.462% */
        letter-spacing: 0.51px;
    }
</style>