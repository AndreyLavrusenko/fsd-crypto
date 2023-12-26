import {defineStore} from "pinia";
import {reactive} from "vue";
import {Crypto} from "@/shared/api/interface/crypto";

export const useCryptoListItems = defineStore("cryptoList", () => {
    const crypto: Crypto = reactive({
        "id": 12,
        "name": "VeChain",
        "ticker": "VET",
        "price": 0.15,
        "percentChange": 0.8,
        "image": "https://via.placeholder.com/150",
        "quantity": 500
    })

    return { crypto }
})