import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../apis';
import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/index';


function* callSignup(action) {
    console.log('i am here')
    try {
        const data = yield call(api.submitSignUp, action.payload.data)
        console.log(data);
        yield put({ type: SIGNUP_SUCCESS })
    }
    catch (err) {
        yield put({ type: SIGNUP_FAILURE })
        console.log(err);
    }
}

export function* signupSaga() {
    yield takeLatest(SIGNUP_REQUEST, callSignup)
}

