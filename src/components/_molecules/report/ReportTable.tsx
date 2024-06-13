import styles from "./reportTable.module.css";

export default function ReportTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Tipo</th>
          <th>Qtd.</th>
          <th>Unid. Medida</th>
          <th>Tamanho</th>
          <th>Validade</th>
          <th>Data Entrega</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Camiseta</td>
          <td>Vestuário</td>
          <td>1,00</td>
          <td>PC</td>
          <td>TM</td>
          <td>21/11/2023</td>
          <td></td>
        </tr>
        <tr>
          <td>Camiseta</td>
          <td>Vestuário</td>
          <td>1,00</td>
          <td>PC</td>
          <td>TM</td>
          <td>21/11/2023</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
