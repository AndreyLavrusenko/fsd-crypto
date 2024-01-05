import {defineStore} from "pinia";
import {ref} from "vue";
import {Crypto} from "@/shared/api/interface/crypto";
import {UserControllersAPI} from "@/shared/api/request/user/userControllers";

export const useCryptoListItems = defineStore("cryptoList", () => {
    const crypto = ref<Crypto[]>([]);
    const loading = ref(true);

    async function getBoughtCrypto() {
        crypto.value = await UserControllersAPI.getBoughtCrypto()

        loading.value = false
    }


    return {crypto, getBoughtCrypto, loading}
})