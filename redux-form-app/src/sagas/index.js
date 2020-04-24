import { all } from 'redux-saga/effects';
import { signupSaga } from './signUp';
import { loginSaga } from './login';
import { updateProfileSaga } from './updateProfile';

export default function* root() {
    yield all([
        signupSaga(), loginSaga(), updateProfileSaga()
    ])
}