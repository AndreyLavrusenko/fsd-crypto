<template>
    <div :class="$style.tab_wrapper">
        <template v-for="(label, key) in tabStore.tabs" :key="key" @click="tabStore.selectActiveTab(key)">

            <Tab
                @click="tabStore.selectActiveTab(key)"
                :is-active="tabStore.activeTab === key"
            >
                {{label}}
            </Tab>

        </template>
    </div>
</template>

<script setup lang="ts">
import {Tab} from "@/shared/ui/tab/index.ts";
import {coinTabModel} from "@/features/coin-tab";

const tabStore = coinTabModel()

</script>

<style scoped module>
.tab_wrapper {
    display: flex;
    align-items: center;

    overflow-x: scroll;

    padding-left: 20px;
}

.tab_wrapper::-webkit-scrollbar {
    width: 0;
}

</style>