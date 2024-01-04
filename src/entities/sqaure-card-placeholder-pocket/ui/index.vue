<template>
    <SquareCardPlaceholder>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 12.25H19.75M12.75 5.25L12.75 19.25" stroke="#9194A6" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p :class="$style.text">Add Pocket</p>
    </SquareCardPlaceholder>
</template>

<script setup lang="ts">
import {SquareCardPlaceholder} from '@/shared/ui/card/ui/square-card-placeholder/index.ts'
</script>

<style scoped module>
.text {
    color: var(--colors-secondary, #9194A6);
    font-feature-settings: 'clig' off, 'liga' off;

    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 138.462% */
    letter-spacing: 0.51px;
}
</style>