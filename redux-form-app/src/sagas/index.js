import { all } from 'redux-saga/effects';
import { signupSaga } from './signUp';
import { loginSaga } from './login';

export default function* root() {
    yield all([
        signupSaga(), loginSaga()
    ])
}