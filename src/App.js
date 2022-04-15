import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ROUTES } from './constants/index';
import Login from './redux/container/Login';
import Dashboard from './redux/container/Dashboard';
import Alart from './redux/container/Alart';
import BuildingData from './redux/container/BuildingData';

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path={ROUTES.BASE} component={Login}></Route>
						<Route exact path={ROUTES.DASHBOARD} component={Dashboard}></Route>
						<Route exact path={ROUTES.ALART} component={Alart}></Route>
						<Route
							exact
							path={ROUTES.BUILDING_DATA}
							component={BuildingData}
						></Route>
					</Switch>
				</Router>
			</Provider>
		</>
	);
}

export default App;
