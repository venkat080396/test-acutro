import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

rootSaga.forEach(sagaMiddleWare.run);