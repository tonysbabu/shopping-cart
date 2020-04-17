import { actionTypes } from "./actionTypes";

const { cartActions } = actionTypes;

export const addToCart = item => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();

  let index = items.findIndex(obj => obj.id === item.id);

  console.log("index", index);

  if (index >= 0) {
    dispatch({ type: cartActions.INCREMENT_COUNT, index });
  } else {
    item.qty = 1;
    dispatch({
      type: cartActions.ADD_TO_CART,
      payload: item
    });
  }
};

export const incrementCount = id => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();

  let index = items.findIndex(obj => obj.id === id);
  dispatch({ type: cartActions.INCREMENT_COUNT, index });
};

export const decrementCount = id => (dispatch, getState) => {
  const {
    cart: { items }
  } = getState();

  let index = items.findIndex(obj => obj.id === id);
  if (items[index].qty - 1 === 0) {
    dispatch({ type: cartActions.REMOVE_FROM_CART, index });
  } else {
    dispatch({ type: cartActions.DECREMENT_COUNT, index });
  }
};

export const updateTotalCost = totalCost => dispatch =>
  dispatch({ type: cartActions.UPDATE_TOTAL_COST, payload: totalCost });

export const clearCart = () => ({ type: cartActions.CLEAR_CART });
