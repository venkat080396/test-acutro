import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../constants";
import { getTodoTasks } from "../../services/Dashboard/index";

export const fetchToDoSaga = function* () {
    try {
       const todo =  yield call(getTodoTasks);
        yield put({type: types.DASHBOARD_TODO_SUCCESS, todo})
    } catch {
        console.log("error");
    }
}

export default function* dashboardSaga() {
    yield takeLatest(
        types.DASHBOARD_TODO, fetchToDoSaga
    )
}