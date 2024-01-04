import {defineStore} from "pinia";
import {ref} from "vue";

export const useRouting = defineStore('routing', () => {
    const allRoutes = ['Home', 'Discovery']
    const currentPage = ref('')

    function getCurrentPageId(value: string) {
        currentPage.value = value
        return allRoutes.findIndex(page => page === value)
    }

    function changePageByNext() {
        const allPagesArrayLength = allRoutes.length - 1
        const currentPageIndex = allRoutes.findIndex(page => page === currentPage.value)

        if (allPagesArrayLength === currentPageIndex) {
            return allRoutes[0]
        }

        return allRoutes[currentPageIndex + 1]
    }

    return {
        getCurrentPageId,
        changePageByNext,
        pageCount: allRoutes.length
    }

})