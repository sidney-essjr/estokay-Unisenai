import { createBrowserRouter } from "react-router-dom";
import UserRegistration from "../components/_organisms/user/registration/UserRegistration";
import DonatorRegistrationPage from "../pages/DonatorRegistrationPage";
import HomePage from "../pages/HomePage";
import RootLayout from "../pages/layout/RootLayout";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
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
        path: "main/donator_registration",
        element: (
          <ProtectedRoute redirectPath="/login">
            <DonatorRegistrationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "main/donation_registration",
        element: (
          <ProtectedRoute redirectPath="/login">
            <UserRegistrationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user_registration",
        element: (
          <ProtectedRoute redirectPath="/login">
            <UserRegistration />
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
