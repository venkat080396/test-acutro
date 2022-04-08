import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import DashboardReducer from "./Dashboard/DashboardReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    dashboard: DashboardReducer
});

export default rootReducer;