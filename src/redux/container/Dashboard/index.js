import { connect } from 'react-redux';
import Dashboard from '../../../pages/Dashboard';
import {
	dashboardToDo,
	fetchBuilding,
	selectBuilding,
	selectFloor,
} from '../../actions/Dashboard';

const mapStateToProps = (state) => ({
	userInformation: state?.login?.userInfo,
	dashbordDate: state?.dashboard,
	state: state,
});

const mapDispatchToProps = (dispatch) => ({
	getTodo: () => dispatch(dashboardToDo()),
	getBuilding: () => dispatch(fetchBuilding()),
	selectBuilding: (index) => dispatch(selectBuilding(index)),
	selectFloor: (index) => dispatch(selectFloor(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
