import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from "../actions/index";
import {takeEvery} from "redux-saga/effects";

function* getData(){
    console.log("This is fetch data saga");
}

export function* watchGetData(){
    yield takeEvery(FETCHING_DATA, getData);
}
function* getDataSuccess(){
    console.log("This is fetch data saga");
}
export function* watchGetDataSuccess(){
    yield takeEvery(FETCHING_DATA_SUCCESS, getDataSuccess);
}
function* getDataFailure(){
    console.log("This is fetch data saga");
}
export function* watchGetDataFailure(){
    yield takeEvery(FETCHING_DATA_FAILURE, getDataFailure);
}