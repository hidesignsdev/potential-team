import { takeLatest, call, put } from 'redux-saga/effects';
import {apiFunction} from "../components/api";
import _ from "lodash";
import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from '../actions/index';

const upateProfileUrl = "updateProfile";
const uploadImageUrl = "uploadImage";

function* callUpdateProfile(action) {
    try {
        const response_image = yield call(apiFunction, uploadImageUrl, action.payload.data)
        console.log(response_image, "response image");
        // const response_profile = yield call(apiFunction, upateProfileUrl, action.payload.data)
        // const data = _.get(response_profile, "data.result")
        // console.log("data in callSignup",data);
        // yield put({ type: UPDATE_PROFILE_SUCCESS, payload: data })
    }
    catch (err) {
        yield put({ type: UPDATE_PROFILE_FAILURE })
        console.log(err);
    }
}

export function* updateProfileSaga() {
    yield takeLatest(UPDATE_PROFILE_REQUEST, callUpdateProfile)
}



