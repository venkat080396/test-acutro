import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../constants";
import { getCityTemp } from "../../services/Alart/index";

export const fetchToDoSaga = function* () {
    try {
       const data =  yield call(getCityTemp);
        yield put({type: types.ALART_CITY_SUCCESS, data})
    } catch {
        console.log("error");
    }
}

export default function* alartSaga() {
    yield takeLatest(
        types.ALART_CITY_TEMP_FATCH, fetchToDoSaga
    )
}