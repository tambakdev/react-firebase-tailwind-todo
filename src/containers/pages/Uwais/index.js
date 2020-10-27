import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../configs/redux";
import Todo from "../Todo";


function Uwais() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default Uwais;
