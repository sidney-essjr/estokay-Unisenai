import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{}],
  },
  {
    path: "/login",
    element: "",
  },
]);

export default router;
