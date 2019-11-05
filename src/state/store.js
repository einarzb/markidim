import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "@state/reducers/users";
import screensReducer from "@state/reducers/screens";
import danceReducer from "@state/reducers/dances";


const reducers = combineReducers({ 
  usersReducer,
  screensReducer,
  danceReducer
});


export default createStore (
  reducers, 
  applyMiddleware(
   thunk,
   logger
   /*
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
  )
);