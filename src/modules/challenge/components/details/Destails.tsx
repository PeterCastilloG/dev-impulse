import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./Destails.module.scss";

export default function Details({
  challengeInfo,
}: {
  challengeInfo: Array<string>;
}) {
  return (
    <ul className={styles.list}>
      {challengeInfo.map((item) => (
        <li key={item}>
          <AiFillCheckCircle />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
