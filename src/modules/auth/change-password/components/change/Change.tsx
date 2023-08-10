import Link from "next/link";
import styles from "./Change.module.scss";
import { useForm } from "react-hook-form";
import { clsx } from "@/shared/lib/clsx";
import { IChangePassword } from "../../interfaces/changepass.services";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";

export default function Change({
  handleUserChangaPass,
}: {
  handleUserChangaPass: (userinfo: IChangePassword) => Promise<void>;
}) {
  const [newPass, setNewPass] = useState();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      newpasswordone: "",
      newpasswordtwo: "",
      password: "",
    },
  });

  const handleChanePassword = async (userInfo: IChangePassword) => {
    if (!isValid || getValues("newpasswordtwo") !== getValues("newpasswordone")) {
      return;
    }
    await handleUserChangaPass(userInfo);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleChanePassword)}>
      <span className={styles.title}>Cambia contraseña</span>
      <div className={styles.field}>
        <span>Contraseña actual</span>
        <input
          type="text"
          placeholder="Ingrese tu contraseña"
          {...register("password", {
            required: true,
          })}
        />
      </div>
      <div className={styles.field}>
        <span>Nueva contraseña</span>
        <input
          type="password"
          placeholder="Ingresa tu nueva contraseña"
          {...register("newpasswordone", {
            required: true,
            minLength: 5,
            maxLength: 25,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          })}
        />
      </div>
      <div className={styles.field}>
        <span>Confirma constraseña</span>
        <input
          type="password"
          placeholder="Confirma su nueva contraseña"
          {...register("newpasswordtwo", {
            required: true,
          })}
        />
      </div>
      <div className={styles.conditionalas}>
        <div
          className={`${
            watch().newpasswordone.length >= 5 &&
            watch().newpasswordone.length <= 20 &&
            styles.check
          }`}
        >
          <AiOutlineCheckCircle />
          <span>Entre 5 a 20 palabras</span>
        </div>
        <div
          className={`${
            watch().newpasswordone.toLocaleLowerCase() !==
              watch().newpasswordone && styles.check
          }`}
        >
          <AiOutlineCheckCircle />
          <span>Al menos una mayúscula</span>
        </div>
        <div
          className={`${
            watch().newpasswordone.toLocaleUpperCase() !==
              watch().newpasswordone && styles.check
          }`}
        >
          <AiOutlineCheckCircle />
          <span>Al menos una minúscula</span>
        </div>
        <div
          className={`${/\d+/.test(watch().newpasswordone) && styles.check}`}
        >
          <AiOutlineCheckCircle />
          <span>Al menos un número</span>
        </div>
      </div>
      <button
        type="submit"
        className={clsx(styles.btn, isValid  &&  watch().newpasswordone ===  watch().newpasswordtwo && styles.able)}
      >
        ¡Empieza!
      </button>
    </form>
  );
}
