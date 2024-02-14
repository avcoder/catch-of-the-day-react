import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StorePicker from "./Components/StorePicker";
import ErrorPage from "./Components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/viva-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StorePicker />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/store/:storeId",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
