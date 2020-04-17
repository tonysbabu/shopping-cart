import { actionTypes } from "./actionTypes";
import { data } from "../constants/data";

const { shoppingListActions } = actionTypes;

export const fetchList = () => dispatch => {
  dispatch({ type: shoppingListActions.FETCH_ITEM_LIST_STARTED });
  setTimeout(() => {
    dispatch({ type: shoppingListActions.FETCH_ITEM_LIST_SUCCESS, data });
  }, 1500);
};
