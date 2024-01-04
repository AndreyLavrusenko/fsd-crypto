import {getAllMyCrypto, getAllMyPockets, getAllStrategySlide} from "@/shared/api/request/user/endpoint";

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

}