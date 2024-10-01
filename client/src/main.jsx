import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import UserForm from "./components/UserForm.jsx";
import Admin from "./components/Admin.jsx";
import "./index.css";
import DashBoard from "./components/DashBoard.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/userForm",
    element: <UserForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashBoard",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
