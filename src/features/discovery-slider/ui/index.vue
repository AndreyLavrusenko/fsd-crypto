<template>
    <div :class="$style.slider">
        <template v-for="slide in sliderListStore.slides">
            <RectangleCardDiscovery :slide="slide" />
        </template>
    </div>
</template>

<script setup>
import {RectangleCardDiscovery} from "@/entities/rectangle-card-discovery/ui/index.ts";
import {sliderItemsModel} from "@/features/discovery-slider/model/index.ts";
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
    padding-top: 20px;
    padding-bottom: 20px;
}

.slider::-webkit-scrollbar {
    width: 0;
}
</style>