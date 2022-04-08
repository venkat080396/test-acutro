import * as types from "../../constants";

export const checkLogin = (payload) => {
    return {
        type: types.CHECK_LOGIN,
        payload
    }
}