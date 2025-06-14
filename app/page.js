import CreateCustomer from "./features/customers/CreateCustomer/page";
import Customer from "./features/customers/Customer/page";
import AccountOperations from "./features/accounts/AccountOperation/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay/BalanceDisplay";

function App() {
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

export default App;
