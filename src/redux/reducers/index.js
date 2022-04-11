import { combineReducers } from "redux";
import LoginReducer from "./Login/LoginReducer";
import DashboardReducer from "./Dashboard/DashboardReducer";
import AlartReducer from "./Alart/AlartReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    dashboard: DashboardReducer,
    alart:AlartReducer
});

export default rootReducer;