import { FaCopy } from "react-icons/fa6";
import { useState } from "react";
import styles from "./Hide-copy-text.module.scss";
import Icon from "../icon/Icon";

export default function Credential({
  label,
  input,
  hideValue = true,
}: {
  label?: string;
  input: string;
  hideValue?: boolean;
}) {
  const [show, setShow] = useState(false);

  return (
    <section className={styles.credential}>
      {label && <span className={styles.type}>{label}</span>}
      <div className={styles.content}>
        <div className={styles.info}>
          <input
            type={show || !hideValue ? "text" : "password"}
            value={input}
            readOnly
          />
          {hideValue && (
            <Icon
              icon={show ? "eyeHiden" : "eye"}
              onClick={() => setShow(!show)}
            />
          )}
        </div>
        <div
          className={styles.copy}
          onClick={() => navigator.clipboard.writeText(input)}
        >
          <FaCopy />
        </div>
      </div>
    </section>
  );
}
