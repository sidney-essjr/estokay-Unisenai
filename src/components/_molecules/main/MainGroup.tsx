import { Link } from "react-router-dom";
import UserIcon from "../../../assets/svg/UserIcon";
import MainButton from "../../_atoms/buttons/main/MainButton";
import styles from "./mainGroup.module.css";

export default function MainGroup() {
  return (
    <div className={styles.container}>
      <Link to={"donator_registration"}>
        <MainButton icon={<UserIcon />} text="Cadastrar Doador" />
      </Link>
      <Link to={"donation_registration"}>
        <MainButton icon={<UserIcon />} text="Cadastrar Doação" />
      </Link>
    </div>
  );
}
