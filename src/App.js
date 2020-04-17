import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Home from "./containers/Home";
import rootReducer from "./reducers";

let store = createStore(rootReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
