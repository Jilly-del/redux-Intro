const customerInitialState = {
  fullName: "",
  Nationality: "",
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        Nationality: action.payload.Nationality,
      };

    case "customer/updateFullName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullName, Nationality) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, Nationality },
  };
}

export function updateFullName(fullName) {
  return { type: "customer/updateFullName", payload: fullName };
}
