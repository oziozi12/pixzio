import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.strictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.strictMode>
);


