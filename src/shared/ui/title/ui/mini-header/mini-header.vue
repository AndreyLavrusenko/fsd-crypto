<template>
    <h4 :class="$style.title">
        <slot />
    </h4>
</template>

<script setup>

</script>

<style scoped module>
.title {
    color: var(--colors-primary, #2B2D33);

    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 141.176% */
    letter-spacing: 0.37px;
}
</style>