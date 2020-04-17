import { actionTypes } from "../actions/actionTypes";
const { cartActions } = actionTypes;

const INITIAL_STATE = {
  items: []
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case cartActions.ADD_TO_CART: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case cartActions.INCREMENT_COUNT: {
      const { index } = action;
      let item = state.items.slice(index, index + 1)[0];
      item.qty = (item.qty || 1) + 1;
      let items = JSON.parse(JSON.stringify(state.items));
      items[index] = item;
      return { ...state, items };
    }
    case cartActions.DECREMENT_COUNT: {
      const { index } = action;
      let item = state.items.slice(index, index + 1)[0];
      item.qty = item.qty - 1;
      let items = JSON.parse(JSON.stringify(state.items));
      items[index] = item;
      return { ...state, items };
    }
    case cartActions.REMOVE_FROM_CART: {
      const { index } = action;
      let items = JSON.parse(JSON.stringify(state.items));
      items.splice(index, 1);
      return { ...state, items };
    }
    case cartActions.CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}
