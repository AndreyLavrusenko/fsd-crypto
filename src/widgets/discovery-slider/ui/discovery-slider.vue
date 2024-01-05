<template>
    <div :class="$style.header">
        <div :class="$style.padding">
            <SmallText>
                December 05
            </SmallText>
            <Heading style="padding-top: 0;">
                For You Today
            </Heading>
        </div>
        <div :class="$style.slider">
            <template v-for="slide in sliderListStore.slides">
                <RectangleCardDiscovery :slide="slide" />
            </template>
        </div>
    </div>

</template>

<script setup>
import {RectangleCardDiscovery} from "@/entities/rectangle-card-discovery/ui/index.ts";
import {Heading} from "@/shared/ui/title/ui/heading/index.ts";
import {SmallText} from "@/shared/ui/text/ui/small/index.ts";
import {sliderItemsModel} from "@/widgets/discovery-slider/model/index.ts";
import {onMounted} from "vue";

const sliderListStore = sliderItemsModel()

onMounted(() => {
    sliderListStore.getAllSliderItems()
})

</script>

<style scoped module>
.slider {
    display: flex;
    align-items: center;

    overflow-x: scroll;

    padding-left: 20px;
    padding-bottom: 20px;
}

.slider::-webkit-scrollbar {
    width: 0;
}

.header {
    padding-top: 32px;
}

.padding {
    padding: 0 20px;
}
</style>