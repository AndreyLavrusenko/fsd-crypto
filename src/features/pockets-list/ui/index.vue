<template>
    <div :class="$style.container">
        <Heading>Pockets</Heading>
        <div :class="$style.wrapper">

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
import {pocketsListModel} from "@/features/pockets-list";
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

.wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    gap: 16px;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .wrapper {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
}
</style>