import {defineStore} from "pinia";
import {ref} from "vue";
import {StrategyCard} from "@/shared/api/interface/strategy";
import {UserControllersAPI} from "@/shared/api/request/user/userControllers";


export const useCardStrategy = defineStore('cardStrategy', () => {
    const cards = ref<StrategyCard[]>([])
    const loading = ref(true)

    async function getAllStrategyCard() {
        cards.value = await UserControllersAPI.getAllStrategyCards()

        loading.value = false
    }

    return {
        getAllStrategyCard,
        cards
    }
})