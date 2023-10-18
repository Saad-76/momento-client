import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routing from "./routes";
import store from "./Config/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
