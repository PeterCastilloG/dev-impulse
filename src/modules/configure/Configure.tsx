"use client";
import { useForm } from "react-hook-form";
import {
  IChallenge,
  IConfigureContentPage,
} from "./interfaces/configure.interfaces";
import { useState } from "react";
import { challengeOrder, validateCupon } from "./services/configure.services";
import { UserAuth } from "@/shared/interfaces/auth";
import { clsx } from "@/shared/lib/clsx";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Range from "./components/range/Range";
import styles from "./Configure.module.scss";
import Types from "./components/types/Types";
import Modalities from "./components/modalities/Modalities";
import Image from "next/image";
import imputBorderImg from "@/assets/input-border.png";
import React from "react";
import Requirements from "./components/requirements/Requirements";
import Cupon from "./components/cupon/Cupon";
import Swing from "./components/swing/Swing";
import "react-toastify/dist/ReactToastify.css";

export default function ConfigurePage({
  configurePage,
  userAuth,
}: {
  configurePage: IConfigureContentPage;
  userAuth: UserAuth;
}) {
  const {
    title,
    buyChallengeBtn,
    defaultChallenge,
    typeProducts,
    modalities,
    challenges,
    cuponInput,
    term_conditions,
    swing,
  } = configurePage;

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm();

  const [typeProduct, setTypeProduct] = useState(0);
  const [typeModality, setTypeModality] = useState(0);
  const [challenge, setChallenge] = useState<IChallenge>(defaultChallenge);
  const [loading, setLoading] = useState(false);

  async function handleValidateCupon(value: string): Promise<boolean> {
    const { success } = await validateCupon({
      ...userAuth,
      cupon: value,
    });
    return success;
  }

  async function handlePurchaseChallengeOrder(info: any) {
    info.challengeId = info.challengeId ?? challenge.challengeId;
    setLoading(true);
    const { success, data, kindMessage } = await challengeOrder({
      ...userAuth,
      ...info,
    });
    setLoading(false);
    if (success) {
      router.push("/challenge/invoice/" + data.challengeOrderId);
    } else {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    }
  }

  function selectTypeProduct(typeProductId: number) {
    setTypeProduct(typeProductId);
    if (typeModality) {
      const modality = modalities.items.find(
        (item) => item.typeProductId === typeProductId
      );
      if (modality) {
        setTypeModality(modality.typeModalityId);
        if (challenge.challengeId)
          setDefaultChallenge({
            typeProductId,
            typeModalityId: modality.typeModalityId,
          });
      }
    }
  }

  function selectTypeModality(typeModalityId: number) {
    setTypeModality(typeModalityId);
    if (challenge.challengeId) {
      setDefaultChallenge({
        typeModalityId,
        typeProductId: typeProduct,
      });
    }
  }

  function setDefaultChallenge({
    typeProductId,
    typeModalityId,
  }: {
    typeProductId: number;
    typeModalityId: number;
  }) {
    const defaultChallenge = challenges.items.find(
      (item) =>
        item.typeProductId === typeProductId &&
        item.typeModalityId === typeModalityId
    );
    if (defaultChallenge) selectChallenge(defaultChallenge);
  }

  function selectChallenge(challenge: IChallenge) {
    setChallenge(challenge);
    setValue("challengeId", challenge.challengeId);
    setValue("isSwing", false);
  }

  return (
    <form
      className={clsx(styles.container, loading && styles.ableBtns)}
      onSubmit={handleSubmit(handlePurchaseChallengeOrder)}
    >
      <span className={styles.title}>{title}</span>
      <Types
        label={typeProducts.label}
        types={typeProducts.items}
        typeProduct={typeProduct}
        selectTypeProduct={selectTypeProduct}
      />
      <Modalities
        label={modalities.label}
        modalities={modalities.items}
        typeModality={typeModality}
        selectTypeModality={selectTypeModality}
        typeProduct={typeProduct}
        challengeSelected={challenge}
      />
      <Range
        label={challenges.label}
        challenges={challenges.items.filter(
          (item) =>
            typeModality === item.typeModalityId &&
            typeProduct === item.typeProductId
        )}
        challenge={challenge}
        selectChallenge={selectChallenge}
        typeModality={typeModality}
      />
      <Swing
        challenge={challenge}
        swing={swing}
        setValue={setValue}
        isSwing={watch("isSwing")}
      />
      <div className={clsx(styles.amount, challenge.challengeId === 0 && styles.noable)}>
        <div className={styles.price}>
          <span>{challenge.amount.priceLabel}</span>
          <span>{watch("isSwing") && challenge.swing ?  challenge.swing.priceValue : challenge.amount.priceValue}</span>
          <Image src={imputBorderImg} alt="border" />
        </div>
        <Cupon
          cupon={cuponInput}
          register={register}
          handleValidateCupon={handleValidateCupon}
        />
      </div>
      <Requirements
        terms={term_conditions}
        register={register}
        challengeId={challenge.challengeId}
      />
      <button
        className={clsx(styles.button, !isValid && styles.notAllowed)}
        type="submit"
      >
        {buyChallengeBtn.value}
      </button>
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
    </form>
  );
}
