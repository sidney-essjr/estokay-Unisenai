import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h1>Sistema de controle de estoque descomplicado e prático</h1>
        <h2>
          <b>Simplifique</b> o controle de estoque online e{" "}
          <b>impulsione a eficiência</b> com a EstOkay.
        </h2>
      </div>
    </section>
  );
}
