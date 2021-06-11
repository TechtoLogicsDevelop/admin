import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { changeStateReducer } from "../reducers/changeStateReducer";
import { adminReducer } from "../reducers/adminReducer";
import { companyProfileReducer } from "../reducers/companyProfileReducer";
import { vendorReducer } from "../reducers/vendorReducer";
/*const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  ()=>[],
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

const rootReducer = combineReducers({
  changeState: changeStateReducer,
  userActions: userLoginReducer
})*/

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    changeState: changeStateReducer,
    userActions: userReducer,
    adminActions: adminReducer,
    compannyProfileActions: companyProfileReducer,
    vendorActions: vendorReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
