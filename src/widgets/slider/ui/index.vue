<template>
    <div :class="$style.header">
        <div :class="$style.padding">
            <SmallText>
                December 05
            </SmallText>
            <Heading style="padding: 0;">
                For You Today
            </Heading>
        </div>
        <DiscoverySlider />
    </div>
</template>

<script setup lang="ts">
import {SmallText} from "@/shared/ui/text/ui/small/index.ts";
import {Heading} from "@/shared/ui/title/ui/heading/index.ts";
import {DiscoverySlider} from "@/features/discovery-slider/ui/index.ts";
</script>

<style scoped module>
.header {
    padding-top: 32px;
    padding-bottom: 16px;
}

.padding {
    padding: 0 20px;
}
</style>