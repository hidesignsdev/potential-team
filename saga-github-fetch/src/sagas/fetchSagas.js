import { put, takeEvery, call } from "redux-saga/effects";
import fetchUserfromApi from "../fetchUserfromApi";
import { FETCHING_DATA, getDataFailure, getDataSuccess } from "../actions/index";

function* fetchData(action) {
    
    try {
        console.log(action, "immmm")
        const data = yield call(fetchUserfromApi(action.payload))
        yield put(getDataSuccess(data))
    }
    catch (err) {
        yield put(getDataFailure)
    }
}

export function* watchFetchData() {
    yield takeEvery(FETCHING_DATA, fetchData);
}
