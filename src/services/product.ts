import { API_CONSTANTS, REQUEST_METHOD } from "@/constants";
import { request } from "@/utilities/axios";

export const getAllProducts = async () => {
    return await request({
        url: API_CONSTANTS.API_GET_PRODUCTS,
        method: REQUEST_METHOD.GET
    })
}
export const getProductById = async (id: string) => {
    const url = API_CONSTANTS.API_GET_PRODUCT_BY_ID.replace('{productId}', id)
    return await request({
        url: url,
        method: REQUEST_METHOD.GET
    })
}
export const filterProducts = async (filter: string) => {
    if (filter !== undefined) {
        const url = API_CONSTANTS.API_FILTER_PRODUCTS.replace('{filter}', filter)
        return await request({
            url: url,
            method: REQUEST_METHOD.GET
        })
    }

}

