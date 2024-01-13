import Routing from './index.vue';


export const routes = [
    {path: '/', component: () => import("@/pages/home/index.ts"), name: 'Home'},
    {path: '/discovery', component: () => import("@/pages/discovery/discovery.vue"), name: 'Discovery'},
];

export {Routing}