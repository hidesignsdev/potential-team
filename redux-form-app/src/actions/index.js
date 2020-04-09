export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export const logIn = (user) => {
    return { type: LOGIN, payload: user }
}
export const logOut = () => {
    return { type: LOGOUT }
}
export const signUp = (info) => {
    return { type: SIGNUP, payload: info }
}