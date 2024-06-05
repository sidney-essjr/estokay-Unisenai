import { useAuth } from "../../../contexts/authContext";
import AccessButton from "../../_atoms/buttons/access/AccessButton";

export default function AccessHandler() {
  const auth = useAuth();

  const path = auth?.currentUser ? "/main" : "/login";

  return <AccessButton path={path} />;
}
