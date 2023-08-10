import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Error.module.scss";

export default function Error({
  setState,
}: {
  setState: (state: "REGISTER") => void;
}) {
  return (
    <div className={styles.faild}>
      <AiFillCloseCircle className={styles.erroicon} />
      <span className={styles.title}>¡Inicio de sesión fallido!</span>
      <p>
        Lamentablemente <strong>hemos detectado un error en el registro,</strong> le pedimos que
        nuestra plataforma,{" "}
        <strong>intente nuevamente</strong> en unos instantes. Si el error persiste, por favor, contacte a nuestro soporte en linea.
      </p>
      <button onClick={() => setState("REGISTER")}>
        <BsArrowLeft />
        <span>Intentar nuevamente</span>
      </button>
    </div>
  );
}
