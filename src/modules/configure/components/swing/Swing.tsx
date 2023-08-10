import { IChallenge, ISwing } from "../../interfaces/configure.interfaces";
import { clsx } from "@/shared/lib/clsx";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import styles from "./Swing.module.scss";

export default function Swing({
  challenge,
  swing,
  isSwing,
  setValue,
}: {
  challenge: IChallenge;
  swing: ISwing;
  isSwing: boolean;
  setValue: UseFormSetValue<FieldValues>;
}) {

  function handleChangeIsSwing(state: boolean) {
    setValue("isSwing", state);
  }
  
  return (
    <div
      className={clsx(
        styles.container,
        !challenge.swing && styles.hidden,
        challenge.challengeId === 0 && styles.noable
      )}
    >
      <div className={styles.line}>
        <span className={styles.point}></span>
      </div>
      <div className={styles.swing}>
        <span className={styles.label}>{swing.label}</span>
        <div className={styles.btns}>
          <button className={clsx(!isSwing && styles.selected)} onClick={()=> handleChangeIsSwing(false)}>
            {swing.false.label}
          </button>
          <button className={clsx(isSwing && styles.selected)} onClick={()=> handleChangeIsSwing(true)}>
            {swing.true.label}
          </button>
        </div>
      </div>
    </div>
  );
}
