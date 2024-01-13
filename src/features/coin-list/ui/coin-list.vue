<template>
    <section>
        <template v-for="crypto in coinListStore.cryptoList">
            <CryptoItem :crypto="crypto" />
        </template>
    </section>
</template>

<script setup>
import {CryptoItem} from "@/entities/crypto-item/ui/index.ts";
import {coinListModel} from "@/features/coin-list/model/index.ts";
import {onMounted, watch} from "vue";
import {coinTabModel} from "@/features/coin-tab/index.ts";

const coinListStore = coinListModel()
const coinTabStore = coinTabModel()

onMounted(() => {
    coinListStore.getSortedByTypeCryptos(coinTabStore.activeTab)
})

watch(() => coinTabStore.activeTab, (newTab) => {
    coinListStore.getSortedByTypeCryptos(newTab)
})

</script>

<style scoped module>

</style>