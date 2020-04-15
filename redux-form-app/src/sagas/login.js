import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/constants";
import {apiFunction} from "../components/api";
import _ from "lodash";

const loginUrl = "login";

function* callLogin(action) {
    try {
        console.log("du lieu o log in", action.payload.data)
        const response = yield call(apiFunction, loginUrl, action.payload.data);
        if (_.get(response, "data.error")) {
            yield put({ type: LOGIN_FAILURE, payload: { error: _.get(response, "data.error") } })
        }
        else {
            const data = _.get(response, "data.result")
            yield put({ type: LOGIN_SUCCESS, payload: { data } })
        }
    }
    catch (err) {
        yield put({ type: LOGIN_FAILURE })
        console.log(err);
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, callLogin)
}
