<template>
    <button :class="$style.button" class="global-lift-animation">
        <slot></slot>
    </button>
</template>

<style scoped module>
.button  {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 0;
    gap: 8px;

    width: 100%;

    border-radius: 120px;
    background: var(--colors-primary, #2B2D33);

    box-shadow: 0 10px 24px 0 rgba(43, 45, 51, 0.20);

    color: var(--colors-white, #FFF);

    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.37px;
}
</style>