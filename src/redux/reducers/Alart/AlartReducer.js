import * as type from "../../constants/index";

const initialState = {
  data: [],
};

const AlartReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ALART_CITY_TEMP_FATCH:
      return { data: action?.paylode };
    default:
      return state;
  }
};

export default AlartReducer;
