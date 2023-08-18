import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";

const depo = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={depo}>
    <BrowserRouter>
      <ToastContainer position="top-left" autoClose={3000} theme="dark" />
      <App />
    </BrowserRouter>
  </Provider>
);
