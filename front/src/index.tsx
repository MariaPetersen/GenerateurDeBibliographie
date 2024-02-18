import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginAndSignupForm from "./pages/LoginAndSignupForm/LoginAndSignupForm";
import ProtectedRoutes from "./utils/contexts/ProtectedRoutes";
import BibliographyPage from "./pages/BibliographyPage/BibliographyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <LoginAndSignupForm type="login" />,
      },
      {
        path: "/signup",
        element: <LoginAndSignupForm type="signup" />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/bibliography",
            element: <BibliographyPage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
