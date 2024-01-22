import {defineStore} from "pinia";
import {ref} from "vue";
import {Crypto} from "@/shared/api/interface/crypto";


export const useCryptoItem = defineStore('cryptoItem', () => {
    const selectedItem = ref<null | Crypto>(null)

    function selectItem(crypto: Crypto) {
        selectedItem.value = crypto
    }

    return {
        selectedItem,
        selectItem
    }
})