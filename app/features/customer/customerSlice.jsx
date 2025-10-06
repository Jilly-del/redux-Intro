const initialStateCustomer = {
  fullName: " ",
  NationID: " ",
  createdAt: " ",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        NationID: action.payload.NationID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updatefullName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, NationID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      NationID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updatefullName(fullName) {
  return { type: "customer/updatefullName", payload: fullName };
}
