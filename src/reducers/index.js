import { combineReducers } from "redux";

const cart = (state = [], action) => {
  let index = state.findIndex(el => el.id === action.id);
  switch (action.type) {
    case "ADD_ITEM":
      // Preventing duplicate items
      if (index === -1) {
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            price: action.price,
            quantity: action.quantity
          }
        ];
      } else {
        state[index]["quantity"] =
          Number(state[index]["quantity"]) + Number(action.quantity);
        return state;
      }
    case "REMOVE_ITEM":
      let prevQuantity = state[index]["quantity"];
      if (prevQuantity < action.quantity) {
        return state.filter(({ id }) => id !== action.id);
      } else {
        state[index]["quantity"] =
          Number(prevQuantity) - Number(action.quantity);
        return state;
      }
    default:
      return state;
  }
};

export default combineReducers({
  cart
});
