import {defineStore} from "pinia";
import {ref} from "vue";


export const usePopoverPurchase = defineStore('popoverPurchase', () => {
    const active = ref(false)

    function togglePopover(status: boolean): void {
        if (status) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        active.value = status
    }

    return {
        active,
        togglePopover
    }
})