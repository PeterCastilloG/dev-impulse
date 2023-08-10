import { FieldValues, UseFormRegister } from "react-hook-form";
import { Fragment } from "react";
import { ITerm } from "../../interfaces/configure.interfaces";
import React from "react";
import styles from "./Requirements.module.scss";
import { clsx } from "@/shared/lib/clsx";
import Link from "next/link";

export default function Requirements({
  terms,
  register,
  challengeId
}: {
  terms: ITerm[];
  register: UseFormRegister<FieldValues>;
  challengeId: number
}) {
  return (
    <div className={clsx(styles.conditions, challengeId === 0 && styles.noable)}>
      {terms.map((item) => (
        <div key={item.id} className={styles.condition}>
          <input type="checkbox" id={item.id} {...register(item.name, {
            required: item.required
          })} />
          <label htmlFor={item.id}>
            {item.label.map((item, index) =>
              item.link ? (
                <Link target="_blank" href={item.link.redirect} key={index} style={{ fontWeight: item.link.bold ? 700 : 400, color: "#007CFF" }}>
                  {item.letter}
                </Link>
              ) : (
                <Fragment key={index}>{item.letter} </Fragment>
              )
            )}
          </label>
        </div>
      ))}
    </div>
  );
}
