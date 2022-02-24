import { createStore, combineReducers } from "redux";
import { productReducer } from "../reducer/productReducer";
import { insurancemanReducer } from "../reducer/insurancemanReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({
      productReducer,
      insurancemanReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
