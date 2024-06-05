import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function ProtectedRoute({
  children,
  redirectPath,
}: {
  children: ReactNode;
  redirectPath: string;
}) {
  const auth = useAuth();
  if (!auth?.currentUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
