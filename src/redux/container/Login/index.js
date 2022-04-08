import { connect } from "react-redux";
import Login from "../../../pages/Login";
import { checkLogin } from "../../actions/Login";

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
    checkLogin: (payload) => dispatch(checkLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);