<template>
    <div
        :class="props.active ? [$style.popover_active, $style.popover] : $style.popover"
        @click="props.closePopover(false)"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
    >
        <div
            :class="props.active ? [$style.popover_active, $style.popover_container] : $style.popover_container"
            @click.stop
        >

            <div :class="$style.close_line"></div>

            <slot/>

        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";


const props = defineProps({
    active: Boolean,
    closePopover: Function
})

const startY = ref(0)
const isSwipedDown = ref(false)

const handleTouchStart = (event: any) => {
    startY.value = event.touches[0].clientY;
    isSwipedDown.value = false;
}

const handleTouchEnd = (event: any) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = endY - startY.value;

    if (deltaY > 50) {
        isSwipedDown.value = true;
        if (props.closePopover) {
            props.closePopover(false);
        }
    }
}

</script>

<style scoped module>
.popover {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    background-color: rgba(0, 0, 0, .4);

    opacity: 0;
    pointer-events: none;
    transition: .4s;
}

.popover_active {
    opacity: 1;
    pointer-events: all;
}

.popover_container {
    width: 100%;
    height: 80%;

    margin-top: auto;
    padding: 12px;

    transform: scale(.9) translateY(600px);
    transition: .5s;

    border-radius: 20px 20px 0px 0px;
    background-color: #FFFF;
}

.close_line {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 40px;
    height: 4px;

    border-radius: 120px;
    background: var(--colors-neutral, #E9EAEF);
}

.popover_container.popover_active {
    transform: scale(1);
}

</style>