import { all } from 'redux-saga/effects';
import { signupSaga } from './signUp';

export default function* root() {
    yield all([
        signupSaga(),
    ])
}