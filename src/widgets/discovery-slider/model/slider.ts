import {defineStore} from "pinia";
import {ref} from "vue";
import {StrategySlide} from "@/shared/api/interface/strategy";
import {UserControllersAPI} from "@/shared/api/request/user/userControllers";


export const useSliderItems = defineStore('sliderItems', () => {
    const slides = ref<StrategySlide[]>([])
    const loading = ref(true)

    async function getAllSliderItems() {
        slides.value = await UserControllersAPI.getAllStrategySlide()

        loading.value = false
    }

    return {
        getAllSliderItems,
        slides
    }

})