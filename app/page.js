"use client";
import CreateCustomer from "./features/customers/CreateCustomer/page";
import Customer from "./features/customers/Customer/page";
import AccountOperations from "./features/accounts/AccountOperation/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay/BalanceDisplay";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        <CreateCustomer />
        <Customer />
        <AccountOperations />
        <BalanceDisplay />
      </Provider>
    </div>
  );
}

export default App;
