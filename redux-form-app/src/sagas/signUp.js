import { takeLatest, call, put } from 'redux-saga/effects';
import {apiFunction} from "../components/api";
import _ from "lodash";
import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/index';

const signUpUrl = "userSignup";
function* callSignup(action) {
    try {
        const response = yield call(apiFunction, signUpUrl, action.payload.data)
        const data = _.get(response, "data.result")
        console.log("data in callSignup",data);
        yield put({ type: SIGNUP_SUCCESS, payload: {data} })
    }
    catch (err) {
        yield put({ type: SIGNUP_FAILURE })
        console.log(err);
    }
}

export function* signupSaga() {
    yield takeLatest(SIGNUP_REQUEST, callSignup)
}



