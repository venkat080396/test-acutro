import { put, takeLatest } from "redux-saga/effects";
import * as types from "../../constants";

export const checkLoginSaga = function* (payload) {
    try {
        yield put({ type: types.LOGIN_SUCCESS, payload })
    } catch {
        console.log("error");
    }
}

export default function* loginSaga() {
    yield takeLatest(
        types.CHECK_LOGIN, checkLoginSaga
    )
}