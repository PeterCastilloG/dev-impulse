import { ICupon } from "../../interfaces/configure.interfaces";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormEvent, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./Cupon.module.scss";

export default function Cupon({
  cupon,
  register,
  handleValidateCupon,
}: {
  cupon: ICupon;
  register: UseFormRegister<FieldValues>;
  handleValidateCupon: (value: string) => Promise<boolean>;
}) {
  const [approved, setApproved] = useState(false);

  const handleChangeCupon = async (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value.length >= 10) {
      const approved = await handleValidateCupon(value);
      if (approved) {
        setApproved(approved);
      } else {
        setApproved(false);
      }
    } else {
      setApproved(false);
    }
  };

  return (
    <div className={styles.discount}>
      <label htmlFor={cupon.id}>{cupon.label}</label>
      <div>
        <input
          autoComplete="off"
          type="text"
          id={cupon.id}
          placeholder={cupon.placeholader}
          {...register(cupon.name)}
          onChange={handleChangeCupon}
        />
        {approved && (
          <span>
            {" "}
            <AiFillCheckCircle />
          </span>
        )}
      </div>
    </div>
  );
}
