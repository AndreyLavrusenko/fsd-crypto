import {defineStore} from "pinia";
import {ref} from "vue";
import {Pockets} from "@/shared/api/interface/portfolio";
import {UserControllersAPI} from "@/shared/api/request/user/userControllers";


export const usePocketsListItem = defineStore('pocketsList', () => {
    const pockets = ref<Pockets[]>([])
    const loading = ref(true)

    async function getAllMyPockets() {
        pockets.value = await UserControllersAPI.getMyPockets()

        loading.value = false
    }

    return {getAllMyPockets, pockets, loading}

})