<template>
    <Popover :active="popover.active" :close-popover="popover.togglePopover">

        <div :class="$style.header">
            <div :class="$style.back">
                <RoundButton @click="popover.togglePopover(false)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 5.5L8 12L14.5 18.5" stroke="#2B2D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </RoundButton>
            </div>

            <div :class="$style.title">
                <MiniHeader>Invest to Strategy</MiniHeader>
            </div>

        </div>


    </Popover>
</template>

<script setup lang="ts">
import Popover from "@/shared/ui/popover/popover.vue";
import {popoverPurchaseModel} from "@/entities/popover-purchase/model";
import RoundButton from "@/shared/ui/button/ui/round-button/round-button.vue";
import MiniHeader from "@/shared/ui/title/ui/mini-header/mini-header.vue";

const popover = popoverPurchaseModel()

</script>

<style scoped module>
.header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 12px;
}

.back {
    align-self: flex-start;
}

.title {
    margin: auto;
    position: relative;
    left: -20px;
}
</style>