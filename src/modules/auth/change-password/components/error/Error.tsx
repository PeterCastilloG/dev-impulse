import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Error.module.scss";

export default function Error({
  setState,
}: {
  setState: (state: "CHANGE") => void;
}) {
  return (
    <div className={styles.faild}>
      <AiFillCloseCircle className={styles.erroicon} />
      <span className={styles.title}>¡Cambio de contraseña fallido!</span>
      <p>
        Se <strong>ha detectado un error en el cambio de contraseña</strong>,{" "}
        <strong>por favor intente nuevamente en unos instantes.</strong> Si el
        error persiste contacte a nuestro soporte en línea.
      </p>
      <button onClick={() => setState("CHANGE")}>
        <BsArrowLeft />
        <span>Intentar nuevamente</span>
      </button>
    </div>
  );
}
