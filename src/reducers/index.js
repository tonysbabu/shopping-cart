import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shoppingList from "./shoppingListReducer";
import cart from "./cartReducer";
const cartPersistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["items"]
};

export default combineReducers({
  shoppingList,
  cart: persistReducer(cartPersistConfig, cart)
});
