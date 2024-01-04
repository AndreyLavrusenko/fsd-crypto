<template>
    <div :class="$style.header">
        <SmallText>
            December 05
        </SmallText>
        <Heading style="padding: 0;">
            For You Today
        </Heading>
    </div>
</template>

<script setup lang="ts">
import {SmallText} from "@/shared/ui/text/ui/small/index.ts";
import {Heading} from "@/shared/ui/title/ui/heading/index.ts";
</script>

<style scoped module>
.header {
    padding-top: 32px;
    padding-bottom: 16px;
}
</style>