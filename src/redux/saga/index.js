import checkLoginSaga from "./Login";
import dashboardSaga from "./Dashboard";
import alartSaga from "./Alart";

const rootSaga = [
    checkLoginSaga,
    dashboardSaga,
    alartSaga
];

export default rootSaga;