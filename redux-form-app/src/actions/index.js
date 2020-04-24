import * as constant from './constants'

export const logIn = (data) => {
    return { type: constant.LOGIN_REQUEST, payload: { data } }
}
export const logout = () => {
    return { type: constant.LOG_OUT }
}
export const signUp = (data) => {
    return { type: constant.SIGNUP_REQUEST, payload: { data } }
}
export const updateProfile = (info, file) => {
    return { type: constant.UPDATE_PROFILE_REQUEST, payload: { info, file } }
}