import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { ROUTES } from "./constants/index";
import Login  from "./redux/container/Login";
import Dashboard from "./redux/container/Dashboard";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={ROUTES.BASE} component={Login}></Route>
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard}></Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
