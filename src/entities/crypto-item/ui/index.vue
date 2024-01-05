<template>
    <div :class="$style.item_wrapper" class="global-scale-animation">
        <img :class="$style.image" :src="props.crypto.image" alt="">
        <div :class="$style.content">
            <div :class="$style.item_left">
                <div :class="$style.name">{{props.crypto.name}}</div>
                <CommonText>
                    {{props.crypto.quantity}} {{props.crypto.ticker}}
                </CommonText>
            </div>

            <div :class="$style.item_right">
                <div :class="$style.price">{{formatCurrency(props.crypto.amount)}}$</div>
                <div :class="$style.percent">+{{props.crypto.percentChange}}%</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Crypto} from "@/shared/api/interface/crypto";
import {PropType} from "vue";
import {formatCurrency} from "@/shared/lib/utils/format/currency";
import {CommonText} from '@/shared/ui/text/ui/common/index.ts'

const props = defineProps({
    crypto: Object as PropType<Crypto>,
})


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

.price {
    display: flex;
    justify-content: flex-end;
}

.name, .price {
    color: var(--colors-primary, #2B2D33);

    /* Headline/SemiBold */
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 141.176% */
    letter-spacing: 0.37px;
}

.count {
    color: var(--colors-secondary, #9194A6);

    /* Subhedline/Regular */
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.44px;
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