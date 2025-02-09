import React from "react";
// components
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

// redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer";

// ! -----------------------------------

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ! -----------------------------------

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
