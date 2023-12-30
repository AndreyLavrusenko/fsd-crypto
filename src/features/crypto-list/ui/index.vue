<template>
    <Heading>Assets</Heading>

    <slot v-for="crypto in cryptoListStore.crypto">
        <CryptoItem :crypto="crypto"/>
    </slot>

</template>

<script setup lang="ts">
import {CryptoItem} from '@/entities/crypto-item/ui/index.ts'
import {Heading} from '@/shared/ui/title/ui/heading/index.ts'
import {cryptoListModel} from "@/features/crypto-list/model/index.ts";
import {onMounted} from "vue";


const cryptoListStore = cryptoListModel()

onMounted( () => {
    cryptoListStore.getBoughtCrypto()
})


</script>

<style scoped>

</style>