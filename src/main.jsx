import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthPorvider from "./providers/AuthPorvider";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthPorvider>
  </React.StrictMode>
);
