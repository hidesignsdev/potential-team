import * as constant from './constants'

export const logIn = (data) => {
    return { type: constant.LOGIN_REQUEST, payload: { data } }
}
export const signUp = (data) => {
    return { type: constant.SIGNUP_REQUEST, payload: { data } }
}
export const updateProfile = (fileObj, data) => {
    return { type: constant.UPDATE_PROFILE_REQUEST, payload: { fileObj, data } }
}