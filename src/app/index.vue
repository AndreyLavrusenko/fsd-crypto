<script setup lang="ts">
import {Routing} from "@/pages/index.ts";
import {Header} from "@/widgets/header/ui/index.ts";
import PopoverPurchase from "@/entities/popover-purchase/ui/popover-purchase.vue";
import PopoverSuccess from "@/entities/popover-success/ui/popover-success.vue";
</script>

<template>
    <div class="app">
        <Header/>
        <Routing />
        <PopoverPurchase />
        <PopoverSuccess />
    </div>
</template>

<style>
@import "index.scss";
</style>