<template>
    <Heading>Assets</Heading>
    <CryptoItem :crypto="cryptoListStore.crypto" />
</template>

<script setup>
import {CryptoItem} from '@/entities/crypto-item/ui/index.ts'
import {Heading} from '@/shared/ui/title/ui/heading'
import {cryptoListModel} from "@/features/crypto-list/model";

const cryptoListStore = cryptoListModel()

console.log(cryptoListStore.crypto)

</script>

<style scoped>

</style>