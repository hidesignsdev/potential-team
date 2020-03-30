import {all} from "redux-saga/effects";
import {watchFetchData} from "./fetchSagas";

export default function* rootSaga(){
    yield all([watchFetchData]);
}