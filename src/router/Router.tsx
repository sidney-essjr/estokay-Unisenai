import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RootLayout from "../pages/RootLayout";
import UserRegistrationPage from "../pages/UserRegistrationPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/main",
        element: (
          <ProtectedRoute redirectPath="/login">
            <MainPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user_registration",
        element: (
          <ProtectedRoute redirectPath="/login">
            <UserRegistrationPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
