import {Pockets} from "@/shared/api/interface/portfolio";
import {AxiosError, AxiosResponse} from "axios";
import {instance} from "@/shared/api/config/instance";

export const getAllMyPockets = async (): Promise<Pockets[]> => {
    try {

        const response: AxiosResponse<Pockets[]> = await instance.get('/mock/my-portfolio.json')
        return response.data

    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with a status code that falls out of the range of 2xx
            console.error('Server responded with error status:', error.response.status);
            console.error('Response data:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from the server');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
        }

        // Throw the error to be caught by the caller or handle it accordingly
        throw error;
    }
}