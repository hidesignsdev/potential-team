import axios from 'axios';

export const submitSignUp = ({firstName, lastName, email, password}) => {
    return axios.request({
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
            'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            'Content-Type': 'application/json',
        },
        url: 'https://api.korec-dev.scrum-dev.com/api/functions/userSignup',
        data: {
            firstName, lastName, email, password
        }
    })
}

export async function submitLogin(data, callback) {
    await axios.post('https://api.korec-dev.scrum-dev.com/api/functions/login', data, {
        headers: {
            'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
            'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            'Content-Type': 'application/json',
        },
    }).then(response => {
        console.log(response)
        callback && callback(true, response)
    }).catch(error => {
        console.error(error)
        callback && callback(false, error)
    });
}