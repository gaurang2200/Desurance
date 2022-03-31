import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorModeProvider } from "./contexts/ColorContext";
import { AppProvider } from "./contexts/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ColorModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
