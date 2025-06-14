"use client";
import { combineReducers, createStore } from "redux";
import accountReducer from "../features/accounts/Account.Slice/Account.slice";
import customerReducer from "../features/customers/Customer.slice/Customer.slice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
