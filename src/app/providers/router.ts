import {createRouter, createWebHashHistory} from 'vue-router';
import {routes} from "@/pages/index.ts";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})