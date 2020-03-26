import {all} from "redux-saga/effects";
import {sayHello, watchGetData, watchGetDataSuccess, watchGetDataFailure} from "./fetchSagas";

export default function* rootSaga(){
    yield all([watchGetData, watchGetDataSuccess, watchGetDataFailure]);
}