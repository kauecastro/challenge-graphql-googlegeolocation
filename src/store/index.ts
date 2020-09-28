import { createStore, Store } from "redux";
import rootReducer from "./rootReducers";
import { AddressState } from "./address/types";

export interface ApplicationState {
  address: AddressState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
