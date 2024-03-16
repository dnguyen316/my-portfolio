import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.css";
import ThemeProvider from "./Containers/Theme/ThemeProvider.tsx";
// import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      {/* <ProSidebarProvider>
      </ProSidebarProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
