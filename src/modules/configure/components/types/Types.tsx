import { clsx } from "@/shared/lib/clsx";
import { ITypeProduct } from "../../interfaces/configure.interfaces";
import styles from "./Types.module.scss";
import Image from "next/image";

export default function Types({
  label,
  types,
  typeProduct,
  selectTypeProduct,
}: {
  label: string;
  types: ITypeProduct[];
  typeProduct: number;
  selectTypeProduct: (typeProductId: number) => void;
}) {
  
  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.line, typeProduct === 0 && styles.un_able_next)}
      >
        <span className={styles.point}></span>
      </div>
      <div className={styles.types}>
        <span className={styles.label}>{label}</span>
        <div className={styles.items}>
          {types.map((type) => (
            <div
              className={clsx(
                styles.type,
                typeProduct === type.typeProductId && styles.selected
              )}
              onClick={() => selectTypeProduct(type.typeProductId)}
              key={type.typeProductId}
            >
              {type.showImg ? (
                <Image
                  src={type.typeProductImg}
                  alt={type.typeProductName}
                  width={100}
                  height={100}
                />
              ) : (
                <span>{type.typeProductName}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
