<template>
    <main>
        <Balance />
        <CryptoList />
        <PocketsList />
        <PopoverBought />
    </main>
</template>

<script setup lang="ts">
import {Balance} from '@/widgets/balance/ui/index.ts'
import {CryptoList} from '@/widgets/crypto-list/ui/index.ts'
import {PocketsList} from '@/widgets/pockets-list/ui/index.ts'
import PopoverBought from "@/entities/popover-purchase/ui/popover-purchase.vue";

</script>

<style scoped>
    main {
        padding: 20px;
    }
</style>