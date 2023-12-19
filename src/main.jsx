import "./index.css";
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Tweet from "./components/Tweet.jsx";
import Register from "./components/Register.jsx";
import Contact from "./components/contact.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContext, AuthContextProvider } from "./context/authContext.jsx";
const queryClient = new QueryClient();

const ProtectRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser !== null) {
    window.location.href = "/";
    return;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: (
          <ProtectRoute>
            <Register />
          </ProtectRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectRoute>
            <Login />
          </ProtectRoute>
        ),
      },
      {
        path: "/tweet",
        element: <Tweet />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
