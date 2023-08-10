import { useForm } from "react-hook-form";
import { clsx } from "@/shared/lib/clsx";
import Link from "next/link";
import styles from "./Recovery.module.scss";

export default function Login({
  handleUserRecovery,
}: {
  handleUserRecovery: (userinfo: string) => Promise<void>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleRecovery = async (userInfo: { email: string }) => {
    if (!isValid) {
      return;
    }
    await handleUserRecovery(userInfo.email);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleRecovery)}>
      <div className={styles.title}>
        <span>Recupera</span>
        <span>tu contraseña</span>
      </div>
      <p>Ingresa a tu correo electrónico y sigue las instrucciones para recuperar tu cuenta.</p>
      <div className={styles.field}>
        <span>Email</span>
        <input
          type="text"
          placeholder="Ingrese tu correo electronico"
          {...register("email", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
        />
      </div>
      <button
        type="submit"
        className={clsx(styles.btn, isValid && styles.able)}
      >
        RECUPERA TU CONTRASEÑA
      </button>
      <div className={styles.extra}>
        <span>¿Recordaste tu contraseña?</span>
        <Link href={"/r/login"}>Inisia sesión</Link>
      </div>
    </form>
  );
}
