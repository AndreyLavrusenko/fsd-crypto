<template>
    <SquareCard :border-top="props.pocket.color">
        <div :class="$style.wrapper">
            <div>
                <MiniHeader>${{formatCurrency(props.pocket.amount)}}</MiniHeader>
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
import MiniHeader from "@/shared/ui/title/ui/mini-header/mini-header.vue";

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

.wrapper_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    font-size: 32px;
}
</style>