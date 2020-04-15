import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/constants";
import {apiFunction} from "../components/api";

const loginUrl = "login";

function* callLogin(action) {
    try {
        const data = yield call(apiFunction, loginUrl, action.payload.data)
        console.log("data in callLogin",data);
        yield put({ type: LOGIN_SUCCESS, payload: {data} })
    }
    catch (err) {
        yield put({ type: LOGIN_FAILURE })
        console.log(err);
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, callLogin)
}
