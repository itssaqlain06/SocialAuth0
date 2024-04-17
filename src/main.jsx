import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-4zno112xh45q1tpq.us.auth0.com"
    clientId="YIS5uIdnH8DP9fOjh9hSrSgCVzAS9MVy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
