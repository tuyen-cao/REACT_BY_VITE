import { API_CONSTANTS, REQUEST_METHOD } from "@/constants"
import { UserType } from "@/models"
import { request } from "@/utilities"

export const addUser = async (user: UserType) => {
    return await request({
        url: API_CONSTANTS.API_ADD_USER,
        method: REQUEST_METHOD.POST,
        data: user
    })
}
export const userLogin = async (user: UserType) => {
    return await request({
        url: API_CONSTANTS.API_LOGIN,
        method: REQUEST_METHOD.POST,
        data: user
    })
}