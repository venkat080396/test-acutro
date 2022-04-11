import { connect } from "react-redux";
import AlartPage from "../../../pages/Alart";
import { AlartTable } from "../../actions/Alart";

const mapStateToProps = (state) => ({
    data:state
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(AlartTable()),
})

export default connect(mapStateToProps,mapDispatchToProps)(AlartPage);