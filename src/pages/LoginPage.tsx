import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/_organisms/login/Login";
import { useAuth } from "../contexts/authContext";

export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.currentUser) navigate("/main");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Login />;
}
