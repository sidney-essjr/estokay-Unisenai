import LoginButton from "../../_atoms/buttons/login/LoginButton";

export default function LoginHandler() {
  const username = "Acessar"; // deve conter a logica para verificar se o usuario esta logado

  return <LoginButton username={username} />;
}
