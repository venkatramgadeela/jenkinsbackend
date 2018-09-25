import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "./index.css";
import store, { history } from "./services/store";
import App from "./services/App";
import registerServiceWorker from "./utils/registerServiceWorker";

const rootElm = document.querySelector("#root");
registerServiceWorker();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElm
);
