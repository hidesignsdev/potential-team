 import axios from "axios";
 import _ from "lodash";

 const baseUrl = 'https://api.korec-dev.scrum-dev.com/api/functions/';

 export const appHeader = {
    'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
    'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
    'Content-Type': 'application/json',
}
export async function apiFunction(url, data) {
    return await axios.post(baseUrl + url, data, {
        headers: appHeader,
    }).then(response => {
        return response
    }).catch(error => {
        return error.response;
    });
}