<template>
    <p :class="$style.text">
        <slot />
    </p>
</template>

<style scoped module>
    .text {
        color: var(--colors-secondary, #9194A6);

        /* Subhedline/Regular */
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 133.333% */
        letter-spacing: 0.44px;
    }
</style>