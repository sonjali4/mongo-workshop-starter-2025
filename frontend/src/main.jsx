import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContactsContextProvider from "./context/ContactsContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactsContextProvider>
      <App />
    </ContactsContextProvider>
  </React.StrictMode>
);
