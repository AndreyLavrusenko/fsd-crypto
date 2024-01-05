<template>
    <main>
        <DiscoverySlider />
        <section>
            <StrategyList />
        </section>
        <CoinList />
    </main>
</template>

<script setup lang="ts">
import {DiscoverySlider} from "@/widgets/discovery-slider/ui/index.ts";
import {StrategyList} from "@/widgets/strategy-list/ui/index.ts";
import {CoinList} from "@/widgets/coin-list/ui/index.ts";
</script>

<style scoped>
section {
    padding: 0 20px;
}
</style>