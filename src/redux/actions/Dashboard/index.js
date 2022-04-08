import * as types from "../../constants";

const initialState = [
    {
      buildingName: "Building Lotus 1",
      floorName: ["first", "secound"],
      siteName: "First Site One",
      buildingLocation: "London",
      area: "10000000",
    },
    {
      buildingName: "Building Lotus 2",
      floorName: ["first", "secound"],
      siteName: "Secound Site One",
      buildingLocation: "London",
      area: "50000000",
    },
    {
      buildingName: "Building Lotus 3",
      floorName: ["first", "secound", "third"],
      siteName: "Secound Site One",
      buildingLocation: "London",
      area: "50500000",
    },
  ];

export const dashboardToDo = () => {
    return {
        type: types.DASHBOARD_TODO
    }
}

export const fetchBuilding = ()=>{
    return {
        type :types.DASHBOARD_BUILDING_DATA,
        paylode:initialState
    }
}

export const selectBuilding = (index)=>{
    return {
        type :types.DASHBOARD_BUILDING_SELECT,
        paylode:index
    }
}

export const selectFloor = (index)=>{
  return {
      type :types.DASHBOARD_BUILDING_SELECT_FLOOR,
      paylode:index
  }
}