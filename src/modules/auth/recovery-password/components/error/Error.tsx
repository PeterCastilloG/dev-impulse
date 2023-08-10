import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Error.module.scss";

export default function Error({
  setState,
}: {
  setState: (state: "RECOVERY") => void;
}) {
  return (
    <div className={styles.faild}>
      <AiFillCheckCircle className={styles.erroicon} />
      <span className={styles.title}>¡Se envio el correo!</span>
      <p>
        Se <strong>ha enviado el correo</strong> de no llegar en unos momentos,{" "}
        <strong>por favor intente nuevamente en unos instantes.</strong> Si el
        error persiste contacte a nuestro soporte en línea.
      </p>
      <button onClick={() => setState("RECOVERY")}>
        <BsArrowLeft />
        <span>Intentar nuevamente</span>
      </button>
    </div>
  );
}
