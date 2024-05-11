<template>
    <h1 :class="$style.title"><slot/></h1>
</template>

<script setup lang="ts">
</script>


<style module scoped>
.title {
    color: var(--colors-primary, #2B2D33);

    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px; /* 119.444% */
    letter-spacing: 0.39px;
}
</style>