 import axios from "axios";

 export const appHeader = {
    'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
    'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
    'Content-Type': 'application/json',
}
export async function apiFunction(url, data, callback) {
    await axios.post(url, data, {
        headers: appHeader,
    }).then(response => {
        console.log(response)
        callback && callback(true, response)
    }).catch(error => {
        console.error(error)
        callback && callback(false, error)
    });
}