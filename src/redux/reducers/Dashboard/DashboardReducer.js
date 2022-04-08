import * as type from "../../constants/index";

const initialState = {
    data:[],
    selectedBuilding:0,
    selectedFloor:0,
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DASHBOARD_BUILDING_DATA:
      return {...state,data:[...action.paylode]};
    case type.DASHBOARD_BUILDING_SELECT:
        return {...state,selectedBuilding:action.paylode,selectedFloor:0};
    case type.DASHBOARD_BUILDING_SELECT_FLOOR:
      return {...state,selectedFloor:action.paylode}
    default:
      return state;
  }
};

export default DashboardReducer;
