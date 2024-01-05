<template>
    <Heading>Investing Strategies</Heading>

    <div class="grid">
        <template v-for="card in cardStrategyStore.cards">
            <SquareCardDiscovery :card="card" />
        </template>
    </div>

</template>

<script setup lang="ts">
import {Heading} from "@/shared/ui/title/ui/heading/index.ts";
import {SquareCardDiscovery} from "@/entities/square-card-discovery/ui/index.ts";
import {cardStrategyModel} from "@/widgets/strategy-list/model";
import {onMounted} from "vue";

const cardStrategyStore = cardStrategyModel()

onMounted(() => {
    cardStrategyStore.getAllStrategyCard()
})

</script>

<style scoped module>

</style>