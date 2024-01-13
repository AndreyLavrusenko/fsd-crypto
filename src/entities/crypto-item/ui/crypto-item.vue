<template>
    <div
        :class="$style.item_wrapper"
        class="global-scale-animation"
        @click="popoverPurchaseStore.togglePopover(true)"
    >
        <img :class="$style.image" :src="props.crypto.image" alt="">
        <div :class="$style.content">
            <div :class="$style.item_left">
                <MiniHeader>{{props.crypto.name}}</MiniHeader>
                <CommonText>
                    {{props.crypto.quantity}} {{props.crypto.ticker}}
                </CommonText>
            </div>

            <div :class="$style.item_right">
                <MiniHeader>{{formatCurrency(props.crypto.amount)}}$</MiniHeader>
                <Percent :data="props.crypto.percentChange" opacity="none" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Crypto} from "@/shared/api/interface/crypto";
import {PropType} from "vue";
import {formatCurrency} from "@/shared/lib/utils/format/currency";
import {CommonText} from '@/shared/ui/text/ui/common/index.ts'
import Percent from "@/entities/percent/ui/percent.vue";
import {popoverPurchaseModel} from "@/entities/popover-purchase/model";
import MiniHeader from "@/shared/ui/title/ui/mini-header/mini-header.vue";

const props = defineProps({
    crypto: Object as PropType<Crypto>,
})


const popoverPurchaseStore = popoverPurchaseModel()


</script>

<style scoped module>
.item_wrapper {
    display: flex;
    align-items: center;

    width: 100%;

    gap: 16px;
    padding: 12px 0;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
}

.image {
    width: 48px;
    height: 48px;

    border-radius: 50%;
}

.item_left, .item_right {
    display: flex;
    flex-direction: column;
}


.percent {
    color: var(--colors-green, #32B153);

    /* Subhedline/Regular */
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.44px;

    text-align: right;
}
</style>