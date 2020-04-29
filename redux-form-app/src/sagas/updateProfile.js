import { takeLatest, call, put } from 'redux-saga/effects';
import { apiUpload, apiWithToken } from "../helpers/api";
import _ from "lodash";
import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from '../actions/constants';

const upateProfileUrl = "updateProfileTesting";
const uploadImageUrl = "uploadImage";

function* callUpdateProfile(action) {
    try {
        // change type data of file
        const formData = new FormData();
        formData.append("file", action.payload.file);
        formData.set("type", "AVATAR");
        // post image
        let response_image;

        if (formData.getAll('file')) {
            response_image = yield call(apiUpload, uploadImageUrl, formData);
            if (_.get(response_image, "data.error")) {
                yield put({ type: UPDATE_PROFILE_FAILURE, payload: { error: "Error with image" }})
            }

        }
        // add avatarId into info
        let info = action.payload.info;
        let avatarId = _.get(response_image, "data.objectId");
        if (avatarId) {
            info.avatarId = avatarId
        }
        // post info
        const response_profile = yield call(apiWithToken, upateProfileUrl, info)
        if (_.get(response_profile, "data.error")) {
            yield put({ type: UPDATE_PROFILE_FAILURE, payload: { error: _.get(response_profile, "data.error") } })
        }
        else {
            const data = _.get(response_profile, "data.result")
            yield put({ type: UPDATE_PROFILE_SUCCESS, payload: { info: data } })
            localStorage.setItem('token', data.sessionToken)
        }
    }
    catch (err) {
        yield put({ type: UPDATE_PROFILE_FAILURE })
        console.err(err);
    }
}

export function* updateProfileSaga() {
    yield takeLatest(UPDATE_PROFILE_REQUEST, callUpdateProfile)
}



