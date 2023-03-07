import { API_CONSTANTS, REQUEST_METHOD } from "@/constants"
import { request } from "@/utilities/axios"

export const getPromoCode = async (code: string) => {
    const url = API_CONSTANTS.API_GET_PROMO_CODE.replace('{promocode}', code)
    return await request({
        url: url,
        method: REQUEST_METHOD.GET
    })
}
