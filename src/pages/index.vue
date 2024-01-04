<template>
    <RouterView v-slot="{Component}">
        <transition name="slide" mode="out-in">
            <Component :is="Component" />
        </transition>
    </RouterView>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router';


</script>

<style>
</style>