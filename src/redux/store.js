import { createStore, compose } from "../../node_modules/redux";
import rootReducer from "./reducers/index";

export default createStore (
  rootReducer, 
  compose(
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  )
);