import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/constants";
import {apiFunction} from "../helpers/api";
import _ from "lodash";

const loginUrl = "login";

function* callLogin(action) {
    try {
        const response = yield call(apiFunction, loginUrl, action.payload.data);
        if (_.get(response, "data.error")) {
            yield put({ type: LOGIN_FAILURE, payload: { error: _.get(response, "data.error") } })
        }
        else {
            const data = _.get(response, "data.result")
            yield put({ type: LOGIN_SUCCESS, payload: { data } })
            localStorage.setItem('token',data.sessionToken)
        }
    }
    catch (err) {
        yield put({ type: LOGIN_FAILURE })
        console.err(err);
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, callLogin)
}
