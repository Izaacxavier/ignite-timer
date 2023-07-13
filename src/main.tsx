import { ThemeProvider } from "styled-components";
import { Globalstyle } from "./styles/global";
import ReactDOM from "react-dom/client";
import { defaultTheme } from "./styles/Themes/default"
import { App } from "./App";
import React from "react";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
