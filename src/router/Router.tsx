import { createBrowserRouter } from "react-router-dom";
import DonationRegistration from "../components/_organisms/donations/registration/DonationRegistration";
import UserRegistration from "../components/_organisms/user/registration/UserRegistration";
import DonatorRegistrationPage from "../pages/DonatorRegistrationPage";
import HomePage from "../pages/HomePage";
import RootLayout from "../pages/layout/RootLayout";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ProtectedRoute from "./ProtectedRoute";
import ReportPage from "../pages/ReportPage";
import ItemDeliveredPage from "../pages/ItemDeliveredPage";

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
            <DonationRegistration />
          </ProtectedRoute>
        ),
      },
      {
        path: "/report",
        element: (
          <ProtectedRoute redirectPath="/login">
            <ReportPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/report/delivered/:id",
        element: (
          <ProtectedRoute redirectPath="/login">
            <ItemDeliveredPage />
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
