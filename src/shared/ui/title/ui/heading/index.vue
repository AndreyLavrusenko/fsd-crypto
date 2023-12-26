<template>
    <h2 :class="$style.title"><slot /></h2>
</template>

<script setup >
</script>

<style scoped module>
.title {
    padding: 12px 0;

    color: var(--colors-primary, #2B2D33);

    /* Title-2/Bold */
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 127.273% */
    letter-spacing: 0.34px;
}
</style>