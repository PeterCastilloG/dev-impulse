"use client";
import { AiFillCheckCircle } from "react-icons/ai";
import { IProfileContentPage } from "./interfaces/profile.interfaces";
import { useForm, Controller } from "react-hook-form";
import Field from "./components/Field";
import styles from "./Profile.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useState } from "react";

export default function ProfilePage({
  profilePage,
}: {
  profilePage: IProfileContentPage;
}) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function handleLogin(info: any) {
    console.log("JOIN HANDLE");
  }

  return (
    <div className={clsx(styles.container, loading && styles.ableBtns)}>
      <span className={styles.title}>{profilePage.title}</span>
      <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.content}>
          <div className={styles.fields}>
            {profilePage.fields.map((item) => (
              <Field
                field={item}
                register={register}
                setValue={setValue}
                key={item.id}
              />
            ))}
            <div className={styles.profilestate}>
              <span className={styles.title}>
                {profilePage.verifiedState.label}
              </span>
              {
                {
                  1: (
                    <span className={styles.state}>
                      <AiFillCheckCircle />{" "}
                      <span>{profilePage.verifiedState.value}</span>
                    </span>
                  ),
                  2: (
                    <span className={styles.state}>
                      <AiFillCheckCircle />{" "}
                      <span>{profilePage.verifiedState.value}</span>
                    </span>
                  ),
                }[profilePage.verifiedState.state]
              }
            </div>
          </div>
        </div>
        <button className={clsx(styles.button, !isValid && styles.noable)}>
          {profilePage.button.value}
        </button>
      </form>
    </div>
  );
}
