<template>
    <SquareCard :border-top="card.color">
        <div :class="$style.wrapper">
            <div :class="$style.top">
                <h4 :class="$style.title">{{card.title}}</h4>
                <div :class="$style.subtitle">
                    <Percent opacity="0" status="green" />
                    <SmallText>
                        per year
                    </SmallText>
                </div>
            </div>
            <div :class="$style.wrapper_bottom">

                <div :class="$style.icon">
                    <img :src="props.card.icon" alt=""> <SmallText>+{{props.card.coinCount}}</SmallText>
                </div>
            </div>
        </div>
    </SquareCard>
</template>

<script setup lang="ts">
import {SquareCard} from '@/shared/ui/card/ui/square-card/index.ts'
import {Percent} from "@/entities/percent/ui/index.ts";
import {PropType} from "vue";
import {Pockets} from "@/shared/api/interface/portfolio";
import {formatCurrency} from "@/shared/lib/utils/format/currency";
import {SmallText} from "@/shared/ui/text/ui/small/index.ts"
import {StrategyCard} from "@/shared/api/interface/strategy";

const props = defineProps({
    card: {
        type: Object as PropType<StrategyCard>
    }
})

</script>

<style scoped module>
.wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    height: calc(160px - 32px);
}

.top {
    display: flex;
    flex-direction: column;

    gap: 6px;
}

.title {
    color: var(--colors-primary, #2B2D33);

    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 141.176% */
    letter-spacing: 0.37px;
}

.subtitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 6px;
}

.description {
    color: var(--colors-secondary, #9194A6);
    font-feature-settings: 'clig' off, 'liga' off;

    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 138.462% */
    letter-spacing: 0.51px;
}

.wrapper_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    display: flex;
    align-items: center;

    gap: 8px;
}

.icon img {
    height: 28px;
}
</style>