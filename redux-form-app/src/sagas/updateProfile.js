import { takeLatest, call, put } from 'redux-saga/effects';
import { apiUpload, apiWithToken } from "../components/api";
import _ from "lodash";
import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from '../actions/constants';

const upateProfileUrl = "updateProfileTesting";
const uploadImageUrl = "uploadImage";

function* callUpdateProfile(action) {
    try {
        // change type data of file
        let formData = new FormData();
        formData.append("file", action.payload.file);
        formData.append("type", "AVATAR");
        // post image
        let response_image;
        if (formData.file) {
            response_image = yield call(apiUpload, uploadImageUrl, formData);
            if (_.get(response_image, "data.error")) {
                yield put({ type: UPDATE_PROFILE_FAILURE })
            }

        }
        // add avatarId into info
        let info = action.payload.info;
        let avatarId =  _.get(response_image,"data.objectId");
        if(avatarId){
            info.avatarId =  avatarId
        }
        // post info
        const response_profile = yield call(apiWithToken, upateProfileUrl, info)
        const data = _.get(response_profile, "data.result")
        yield put({ type: UPDATE_PROFILE_SUCCESS, payload: {data} })
    }
    catch (err) {
        yield put({ type: UPDATE_PROFILE_FAILURE })
        console.err(err);
    }
}

export function* updateProfileSaga() {
    yield takeLatest(UPDATE_PROFILE_REQUEST, callUpdateProfile)
}



