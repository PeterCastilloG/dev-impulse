import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Welcome.module.scss";

export default function Welcome() {
  return (
    <div className={styles.faild}>
      <AiFillCheckCircle className={styles.erroicon} />
      <span className={styles.title}>¡Bienvenido!</span>
      <span className={styles.extra}>¡Tu registro se ha realizado exitosamente!</span>
      <p>
        Solo falta que <strong>realices un utlimo paso:</strong> ingresa a la casilla de email de registro y 
        <strong> verifica tu cuenta</strong> con el email que le acabamos de enviar
      </p>
    </div>
  );
}
