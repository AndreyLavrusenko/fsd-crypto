<template>
    <div :class="$style.container">
        <section>
            <Heading>Coin Lists</Heading>
        </section>
        <CoinTab/>
        <CoinList />
    </div>
</template>

<script setup lang="ts">
import {Heading} from "@/shared/ui/title/ui/heading/index.ts";
import {CoinTab} from "@/features/coin-tab/ui/index.ts";
import {CoinList} from "@/features/coin-list/ui/index.ts";
</script>

<style scoped module>
section {
    padding: 0 20px;
}

.container {
    padding-top: 20px;
    padding-bottom: 40px;
}
</style>