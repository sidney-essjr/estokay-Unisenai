import styles from "./sideBarIcon.module.css";

export default function SideBarIcon({
  icon,
  text,
}: {
  icon: JSX.Element;
  text: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {icon}
        <p>{text}</p>
      </div>
    </div>
  );
}
