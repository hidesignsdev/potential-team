export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const logIn = (data) => {
    return { type: LOGIN_REQUEST, payload: { data } }
}
export const signUp = (data) => {
    return { type: SIGNUP_REQUEST, payload: { data } }
}