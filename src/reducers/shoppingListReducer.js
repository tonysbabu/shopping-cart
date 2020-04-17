import { actionTypes } from "../actions/actionTypes";
const { shoppingListActions } = actionTypes;

const INITIAL_STATE = { items: [], itemsLoading: false };

export default function shoppingList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case shoppingListActions.FETCH_ITEM_LIST_STARTED:
      return { ...state, itemsLoading: true };
    case shoppingListActions.FETCH_ITEM_LIST_SUCCESS:
      return { ...state, items: action.data, itemsLoading: false };
    case shoppingListActions.FETCH_ITEM_LIST_FAILED:
      return { ...state, itemsLoading: false };

    default:
      return state;
  }
}
