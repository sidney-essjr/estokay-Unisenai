import { useAuth } from "../../../contexts/authContext";
import LoginButton from "../../_atoms/buttons/login/LoginButton";

export default function LoginHandler() {
  const auth = useAuth();

  const path = auth?.currentUser ? "/main" : "/login";

  return <LoginButton path={path} />;
}
