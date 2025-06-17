"use client";
import CreateCustomer from "./features/customers/CreateCustomer/createCustomer";
import Customer from "./features/customers/Customer/customer";
import AccountOperations from "./features/accounts/AccountOperation/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay/BalanceDisplay";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

function App() {
  let customer = useSelector((state) => state.customer.fullName);
  console.log(customer);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

function Appz() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Appz;
