import checkLoginSaga from "./Login";
import dashboardSaga from "./Dashboard";

const rootSaga = [
    checkLoginSaga,
    dashboardSaga
];

export default rootSaga;