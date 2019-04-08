import { combineReducers } from "redux";

/**
 * Adding coffees to cart
 * @param  {Array}  [state=[]]
 * @param  {Object} action
 * @return {Array}
 */
const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Preventing duplicate items
      let index = state.findIndex(el => el.id === action.id);
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
        // Rozsirit o mazani itemu
        state[index]["quantity"] = Number(state[index]["quantity"]) + Number(action.quantity);
        return state;
      }
    default:
      return state;
  }
};

export default combineReducers({
  cart
});
