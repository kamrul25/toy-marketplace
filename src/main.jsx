import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="w-full lg:max-w-screen-xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider  router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
