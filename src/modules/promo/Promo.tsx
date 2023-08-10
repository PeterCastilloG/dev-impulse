"use client";
import { ImTicket } from "react-icons/im";
import { useState } from "react";
import { IPromoContentPage } from "./interfaces/promo.interface";
import { AiFillCheckCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { validateCupon } from "./services/promo.services";
import { UserAuth } from "@/shared/interfaces/auth";
import { useRouter } from "next/navigation";
import { clsx } from "@/shared/lib/clsx";
import styles from "./Promo.module.scss";
import "react-toastify/dist/ReactToastify.css";

export default function PromePage({
  promoPage,
  userAuth,
}: {
  promoPage: IPromoContentPage;
  userAuth: UserAuth;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function handleValidateCupon(info: Record<string, string | number>) {
    setLoading(true);
    const { success, data, kindMessage } = await validateCupon({
      ...userAuth,
      info,
    });
    setLoading(false);
    if (success) {
      router.push("/challenge/analyzer?order=" + data.challengeOrderId);
    } else {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    }
  }

  return (
    <div className={clsx(styles.container, loading && styles.ableBtns)}>
      <div className={styles.ticket}>
        <ImTicket className={styles.icon} />
        <span className={styles.title}>{promoPage.title}</span>
        <p className={styles.details}>{promoPage.main}</p>

        <form
          className={styles.form}
          onSubmit={handleSubmit(handleValidateCupon)}
        >
          <input
            placeholder={promoPage.input.placeholder}
            id={promoPage.input.id}
            {...register(promoPage.input.name, {
              required: promoPage.input.required,
            })}
          />
          <button className={clsx(!isValid && styles.noable)}>
            <AiFillCheckCircle /> VALIDAR CODIGO{" "}
          </button>
        </form>
      </div>
      <p className={styles.info}>{promoPage.info}</p>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
