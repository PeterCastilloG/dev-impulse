import { IPageMessage } from "../../interfaces/analyzer.interfaces";
import styles from "./Page-message.module.scss";

export default function MessagePage({
  title,
  content,
  reference,
}: IPageMessage) {
  return (
    <div className={styles.message}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
        <span>{reference}</span>
      </div>
    </div>
  );
}
