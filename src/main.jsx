import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="856165437060-lb232o1b2ajk3g2cpocd3dfsh842f6l5.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
