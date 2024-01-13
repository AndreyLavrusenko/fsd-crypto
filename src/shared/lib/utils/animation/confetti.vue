<template>
</template>

<script setup lang="ts">
import {onMounted, onBeforeUnmount} from 'vue';
import confetti from "canvas-confetti";

const animationDuration = 30 * 1000;
const animationEnd = Date.now() + animationDuration;

const defaults = {
    startVelocity: 20,
    spread: 50,
    ticks: 600,
    zIndex: 0,
    duration: animationDuration,
};

const randomInRange = (min, max) => Math.random() * (max - min) + min;

const startConfettiAnimation = () => {
    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        const particleCount = 10 * (timeLeft / animationDuration);

        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: randomInRange(0.1, 0.3),
                    y: Math.random() - 0.2,
                },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: {
                    x: randomInRange(0.7, 0.9),
                    y: Math.random() - 0.2,
                },
            })
        );
    }, 250);

    // Clean up the interval when the component is destroyed
    onBeforeUnmount(() => {
        clearInterval(interval);
    });
};

onMounted(() => {
    startConfettiAnimation();
});

</script>

<style scoped>
/* Ваши стили, если они нужны */
</style>
