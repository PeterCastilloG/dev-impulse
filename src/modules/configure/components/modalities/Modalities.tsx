import { clsx } from "@/shared/lib/clsx";
import { IChallenge, IModality } from "../../interfaces/configure.interfaces";
import styles from "./Modalities.module.scss";
import Division from "@/shared/components/division/Division";

export default function Modalities({
  label,
  modalities,
  typeModality,
  selectTypeModality,
  typeProduct,
  challengeSelected,
}: {
  label: string;
  modalities: Array<IModality>;
  typeModality: number;
  selectTypeModality: (typeModalityId: number) => void;
  typeProduct: number;
  challengeSelected: IChallenge;
}) {
  return (
    <div className={clsx(styles.container, typeProduct === 0 && styles.noable)}>
      <div
        className={clsx(styles.line, typeModality === 0 && styles.un_able_next)}
      >
        <span className={styles.point}></span>
      </div>
      <div className={styles.challenges}>
        <span className={styles.label}>{label}</span>
        <div className={styles.info}>
          <div className={styles.modalities}>
            {modalities
              .filter((item) => item.typeProductId === typeProduct)
              .map((item) => (
                <div
                  className={clsx(
                    styles.modality,
                    item.typeModalityId === typeModality && styles.select
                  )}
                  onClick={() => selectTypeModality(item.typeModalityId)}
                  key={item.typeModalityId}
                >
                  {item.typeModalityName}
                </div>
              ))}
          </div>
          {challengeSelected.challengeId !== 0 && (
            <div className={styles.details}>
              <Division />
              <div className={styles.items}>
                {challengeSelected.detailsChallenge.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span> <span>{item.info}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
