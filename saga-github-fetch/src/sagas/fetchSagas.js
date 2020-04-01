import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from "../actions";
import { call, put, takeEvery } from "redux-saga/effects";
import * as api from '../api'


function* getData(action) {
    console.log("This is fetch data saga");
    try {
        const { data } = yield call(api.getUsers, action.payload.url)
        console.log(data)
        yield put({ type: FETCHING_DATA_SUCCESS, payload: { data } })
    }
    catch (err) {
        yield put({ FETCHING_DATA_FAILURE })
        console.log(err)
    }
}

export default function* watchGetData() {
    yield takeEvery(FETCHING_DATA, getData)
}
