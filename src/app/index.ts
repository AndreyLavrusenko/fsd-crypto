import {createApp} from "vue";
import App from  './index.vue'
import {router, store} from "@/app/providers";

export const app = createApp(App).use(router).use(store)