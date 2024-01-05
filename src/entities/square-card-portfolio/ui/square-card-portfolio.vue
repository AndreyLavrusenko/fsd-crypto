<template>
    <SquareCard :border-top="props.pocket.color">
        <div :class="$style.wrapper">
            <div>
                <h4 :class="$style.title">${{formatCurrency(props.pocket.amount)}}</h4>
                <SmallText>
                    {{props.pocket.description}}
                </SmallText>
            </div>
            <div :class="$style.wrapper_bottom">
                <Percent opacity="0" :data="props.pocket.percentChange" />
                <div :class="$style.icon">
                    {{props.pocket.icon}}
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

const props = defineProps({
    pocket: {
        type: Object as PropType<Pockets>
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

.title {
    color: var(--colors-primary, #2B2D33);

    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 141.176% */
    letter-spacing: 0.37px;
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
    font-size: 32px;
}
</style>