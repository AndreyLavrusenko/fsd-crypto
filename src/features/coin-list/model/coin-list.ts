import {defineStore} from "pinia";
import {ref} from "vue";
import {UserControllersAPI} from "@/shared/api/request/user/userControllers";
import {Crypto} from "@/shared/api/interface/crypto";


export const useCoinList = defineStore('coinList', () => {
    const cryptoList = ref<Crypto[]>([])

    async function getSortedByTypeCryptos(sortBy: string) {
        cryptoList.value = await UserControllersAPI.getSortingCrypto(sortBy)
    }

    return {
        cryptoList,
        getSortedByTypeCryptos
    }

})