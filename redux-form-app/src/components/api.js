import axios from "axios";
//import _ from "lodash";

const baseUrl = 'https://api.korec-dev.scrum-dev.com/api/';

export const appHeaderFunction = {
    'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
    'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
    'Content-Type': 'application/json',
}
export const appHeaderUpload = {
    'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
    'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
    'Content-Type': 'multipart/form-data',
}
export async function apiFunction(url, data) {
    return await axios.post(baseUrl + "functions/" + url, data, {
        headers: appHeaderFunction,
    }).then(response => {
        return response
    }).catch(error => {
        return error.response;
    });
}
export async function apiUpload(url, data) {
    return await axios.post(baseUrl + "upload/" + url, data, {
        headers: appHeaderUpload,
    }).then(response => {
        return response
    }).catch(error => {
        return error.response;
    });
}
export async function apiWithToken(url, data) {
    return await axios.post(baseUrl + "functions/"+ url, data, {
        headers: {
            'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
            'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            'Content-Type': 'application/json',
            'X-Parse-Session-Token': localStorage.getItem('token')
        },
    }).then(response => {
        return response
    }).catch(error => {
        return error.response;
    });
}