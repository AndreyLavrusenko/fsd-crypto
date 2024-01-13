<template>
    <SquareCard :border-top="card.color">
        <div :class="$style.wrapper">
            <div :class="$style.top">
                <MiniHeader>{{card.title}}</MiniHeader>
                <div :class="$style.subtitle">
                    <Percent opacity="0" :data="props.card.percentChange" />
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
import {SmallText} from "@/shared/ui/text/ui/small/index.ts"
import {StrategyCard} from "@/shared/api/interface/strategy";
import MiniHeader from "@/shared/ui/title/ui/mini-header/mini-header.vue";

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

.subtitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 6px;
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