import { takeLatest, call, put } from 'redux-saga/effects';
import { apiFunction } from "../components/api";
import _ from "lodash";
import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/index';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
const signUpUrl = "userSignup";
function* callSignup(action) {
    try {
        const response =  yield call(apiFunction, signUpUrl, action.payload.data)
        if (_.get(response, "data.error")) {
            yield put({ type: SIGNUP_FAILURE, payload: { error: _.get(response, "data.error") } })
        }
        else {
            const data = _.get(response, "data.result")
            yield put({ type: SIGNUP_SUCCESS, payload: { data } })
        }
        // console.log("from Saga", response)

    }
    catch (err) {
        yield put({ type: SIGNUP_FAILURE })
        console.log(err);
    }
}

export function* signupSaga() {
    yield takeLatest(SIGNUP_REQUEST, callSignup)
}



