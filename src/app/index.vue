<script setup lang="ts">
import {Routing} from "@/pages/index.ts";
import {Header} from "@/widgets/header/ui/index.ts";
</script>

<template>
    <div class="app">
        <Header/>
        <Routing />
    </div>
</template>

<style>
@import "index.scss";
</style>