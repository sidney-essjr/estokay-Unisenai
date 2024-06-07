import Subtitle from "../../_atoms/text/home/Subtitle";
import Title from "../../_atoms/text/home/Title";
import styles from "./homeContent.module.css";

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <Title>Sistema de controle de estoque descomplicado e prático</Title>
      <Subtitle>
        <b>Simplifique</b> o controle de estoque online e{" "}
        <b>impulsione a eficiência</b> com a EstOkay.
      </Subtitle>
    </div>
  );
}
