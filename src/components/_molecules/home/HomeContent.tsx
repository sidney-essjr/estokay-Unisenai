import HomeSubtitle from "../../_atoms/text/home/HomeSubtitle";
import HomeTitle from "../../_atoms/text/home/HomeTitle";
import styles from "./homeContent.module.css";

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <HomeTitle />
      <HomeSubtitle />
    </div>
  );
}
