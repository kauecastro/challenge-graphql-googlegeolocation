import { AddressState, AddressTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: AddressState = {
  data: { latitude: "", longitude: "", searchValue: "" },
};

const reducer: Reducer<AddressState> = (state = INITIAL_STATE, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case AddressTypes.SET_SEARCH_VALUE:
      return { data: { ...state.data, searchValue: payload } };
    case AddressTypes.SET_LONG_LAT:
      return {
        data: {
          ...state.data,
          latitude: payload.latitude,
          longitude: payload.longitude,
        },
      };
    default:
      return state;
  }
};

export default reducer;
