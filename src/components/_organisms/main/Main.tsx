import Title from "../../_atoms/text/home/Title";
import MainGroup from "../../_molecules/main/MainGroup";
import styles from "./main.module.css";

export default function Main() {
  return (
    <section className={styles.container}>
      <Title>Bem-vindo</Title>
      <MainGroup />
    </section>
  );
}
