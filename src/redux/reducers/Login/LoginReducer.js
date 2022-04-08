import * as type from "../../constants/index";

const initialState = [];

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.payload
            };
        default: return state
    }
}

export default LoginReducer;