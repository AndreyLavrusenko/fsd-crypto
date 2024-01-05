<template>
    <RectangleCard :linear-gradient="props.slide.background">
        <div :class="$style.wrapper">
            <div :class="$style.heading">
                <Heading style="color: white; padding: 0 0 8px;">{{props.slide.strategy}}</Heading>
                <CommonText style="color: white">{{props.slide.risk}}</CommonText>
                <CommonText style="color: white">{{formatCurrency(props.slide.participants_count)}} participants</CommonText>
            </div>
            <div :class="$style.footer">
                <div>
                    <Heading style="padding: 0; color: white;">{{props.slide.profitability_per_year}}%</Heading>
                    <CommonText style="color: white">per year</CommonText>
                </div>
                <div>
                    <DefaultButton style="width: 106px; color: black; background-color: white">View</DefaultButton>
                </div>
            </div>
        </div>
    </RectangleCard>
</template>

<script setup lang="ts">
import {RectangleCard} from "@/shared/ui/card/ui/rectangle-card/index.ts";
import {Heading} from "@/shared/ui/title/ui/heading/index.ts";
import {CommonText} from "@/shared/ui/text/ui/common/index.ts";
import {DefaultButton} from "@/shared/ui/button/ui/default-button/index.ts";
import {PropType} from "vue";
import {StrategySlide} from "@/shared/api/interface/strategy";
import {formatCurrency} from "@/shared/lib/utils/format/currency.ts";

const props = defineProps({
    slide: Object as PropType<StrategySlide>
})

</script>

<style scoped module>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 300px;

    gap: 20px;
}

.heading {
    display: flex;
    flex-direction: column;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>