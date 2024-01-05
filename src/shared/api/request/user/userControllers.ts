import {
    getAllMyCrypto,
    getAllMyPockets,
    getAllStrategyCards,
    getAllStrategySlide, getSortingCrypto
} from "@/shared/api/request/user/endpoint";

export class UserControllersAPI {

    static async getBoughtCrypto() {
        return await getAllMyCrypto()
    }

    static async getMyPockets() {
        return await getAllMyPockets()
    }

    static async getAllStrategySlide() {
        return await getAllStrategySlide()
    }

    static async getAllStrategyCards() {
        return await getAllStrategyCards()
    }

    static async getSortingCrypto(sortBy: string) {
        return await getSortingCrypto(sortBy)
    }

}