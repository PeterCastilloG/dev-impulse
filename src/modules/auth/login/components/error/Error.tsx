import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Error.module.scss";

export default function Error({
  setState,
}: {
  setState: (state: "LOGIN") => void;
}) {
  return (
    <div className={styles.faild}>
      <AiFillCloseCircle className={styles.erroicon} />
      <span className={styles.title}>¡Inicio de sesión fallido!</span>
      <p>
        Se <strong>ha detectado un error en el inicio de sesión</strong> de
        nuestra plataforma,{" "}
        <strong>por favor intente nuevamente en unos instantes.</strong> Si el
        error persiste contacte a nuestro soporte en línea.
      </p>
      <button onClick={() => setState("LOGIN")}>
        <BsArrowLeft />
        <span>Intentar nuevamente</span>
      </button>
    </div>
  );
}
