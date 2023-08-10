import { ILogin } from "../../interfaces/login.interfaces";
import { clsx } from "@/shared/lib/clsx";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./Login.module.scss";

export default function Login({
  handleUserLogIn,
}: {
  handleUserLogIn: (userinfo: ILogin) => Promise<void>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (userInfo: ILogin) => {
    if (!isValid) {
      return;
    }
    await handleUserLogIn(userInfo);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
      <span className={styles.title}>Ingresa a tu cuenta</span>
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
      <div className={styles.field}>
        <span>Constraseña</span>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
        />
      </div>
      <Link href={"/r/recovery-password"} className={styles.revocery}>
        ¿Olvidaste tu contraseña?
      </Link>
      <button
        type="submit"
        className={clsx(styles.btn, isValid && styles.able)}
      >
        Iniciar session
      </button>
      <div className={styles.extra}>
        <span>¿No tienes una cuenta aún?</span>
        <Link href={"/r/register"}>Registrate</Link>
      </div>
    </form>
  );
}
