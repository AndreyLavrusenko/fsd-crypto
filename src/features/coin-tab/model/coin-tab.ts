import {defineStore} from "pinia";
import {ref} from "vue";


export const useCoinTab = defineStore('coinTab', () => {
    const tabs = {
        'trend': '🔥 Trending',
        'watchlist': '📺 Watchlist',
        'favourite': '❤️ Favourite'
    }
    const activeTab = ref('trend')

    function selectActiveTab(tab: string) {
        activeTab.value = tab
    }

    return {
        tabs,
        activeTab,
        selectActiveTab
    }
})