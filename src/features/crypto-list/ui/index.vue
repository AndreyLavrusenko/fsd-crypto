<template>
    <Heading>Assets</Heading>
    <CryptoItem :crypto="cryptoListStore.crypto" />
</template>

<script setup lang="ts">
import {CryptoItem} from '@/entities/crypto-item/ui/index.ts'
import {Heading} from '@/shared/ui/title/ui/heading/index.ts'
import {cryptoListModel} from "@/features/crypto-list/model/index.ts";


const cryptoListStore = cryptoListModel()

</script>

<style scoped>

</style>