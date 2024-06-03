import HomeContent from "../../_molecules/home/HomeContent";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <HomeContent />
    </section>
  );
}
