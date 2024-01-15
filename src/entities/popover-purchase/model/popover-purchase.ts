import {defineStore} from "pinia";
import {ref} from "vue";
import {validateInputNumber} from "@/shared/lib/utils/format/numberValidate";
import {Crypto} from "@/shared/api/interface/crypto";


export const usePopoverPurchase = defineStore('popoverPurchase', () => {
    const active = ref(false)
    const amount = ref<number | null>(null)
    const buyLoading = ref(false)
    const isBought = ref(false)

    function togglePopover(status: boolean): void {
        if (status) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        active.value = status
        amount.value = null
    }

    function toggleBoughtPopover(status: boolean): void {
        if (status) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        isBought.value = status
    }

    function setMax() {
        amount.value = 9999
    }

    function validateInput() {
        if (typeof amount.value === 'number') {
            amount.value = validateInputNumber(amount.value, 9999)
        }
    }

    function buyCrypto(crypto: Crypto) {
        if (!amount.value) return

        buyLoading.value = true

        const body = {
            id: crypto.id,
            name: crypto.name,
            amount: crypto.amount,
            ticket: crypto.ticker
        }

        new Promise(resolve => {
            setTimeout(() => resolve(`Успешная покупка`), 1000)
        }).then((result) => {

            console.log(result, body)

            togglePopover(false)

            toggleBoughtPopover(true)
        }).finally(() => {
            buyLoading.value = false
        })

    }

    return {
        active,
        amount,
        isBought,
        buyLoading,
        setMax,
        buyCrypto,
        validateInput,
        togglePopover,
        toggleBoughtPopover,
    }
})