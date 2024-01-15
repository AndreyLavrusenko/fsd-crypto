<template>
    <Popover v-if="popover.isBought" :active="popover.isBought" :close-popover="popover.toggleBoughtPopover">
        <div :class="$style.wrapper">
           <div :class="$style.content">
               <div :class="$style.icon">
                   🎉
               </div>
               <MajorTitle>You've invested</MajorTitle>
               <CommonText :class="$style.text">3,021.00 DAI in the “Aggressive Growth” strategy, purchased coins you will find in a new pocket</CommonText>
           </div>
            <DefaultButton :class="$style.button">View Pocket</DefaultButton>
        </div>
        <Confetti/>
    </Popover>
</template>

<script setup lang="ts">
import Popover from "@/shared/ui/popover/popover.vue";
import {popoverPurchaseModel} from "@/entities/popover-purchase/model";
import Confetti from "@/shared/lib/utils/animation/confetti.vue";
import {MajorTitle} from "@/shared/ui/title/ui/title";
import CommonText from "@/shared/ui/text/ui/common/common-text.vue";
import DefaultButton from "@/shared/ui/button/ui/default-button/default-button.vue";

const popover = popoverPurchaseModel()

</script>

<style scoped module>
.wrapper {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.content {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.icon {
    width: 128px;
    height: 128px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 28px;

    background-color: var(--colors-background-secondary);
    border-radius: 50%;

    font-size: 80px;
}

.text {
    max-width: 340px;

    margin-top: 12px;

    text-align: center;
}

.button {
    margin-top: auto;
}

</style>