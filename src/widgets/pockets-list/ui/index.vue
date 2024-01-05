<template>
    <div :class="$style.container">
        <Heading>Pockets</Heading>
        <div class="grid">

            <template v-for="pocket in pocketsListStore.pockets">
                <SquareCardPortfolio :pocket="pocket" />
            </template>

            <SquareCardPlaceholderPocket />


        </div>
    </div>
</template>

<script setup lang="ts">
import {Heading} from '@/shared/ui/title/ui/heading/index.ts'
import {SquareCardPortfolio} from '@/entities/square-card-portfolio/ui/index.ts'
import {SquareCardPlaceholderPocket} from "@/entities/sqaure-card-placeholder-pocket/ui/index.ts"
import {pocketsListModel} from "@/widgets/pockets-list";
import {onMounted} from "vue";


const pocketsListStore = pocketsListModel()

onMounted(() => {
    pocketsListStore.getAllMyPockets()
})

</script>

<style scoped module>
.container {
    margin-top: 12px;
}
</style>