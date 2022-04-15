import { connect } from 'react-redux';
import BuildingData from '../../../pages/BuildingData';

const mapStateToProps = (state) => ({
	data: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingData);
