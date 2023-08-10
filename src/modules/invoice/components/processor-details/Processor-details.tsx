import { IDetail } from "../../interfaces/invoice.interfaces";
import { clsx } from "@/shared/lib/clsx";
import Division from "@/shared/components/division/Division";
import styles from "./Processor-details.module.scss";

export default function ProcessorDeatils({
  invoiceDetailts,
}: {
  invoiceDetailts: Array<Array<IDetail>>;
}) {
  return (
    <div className={styles.details}>
      {invoiceDetailts.map((item, indexColumn) => (
        <div className={styles.colum} key={item.length}>
          {item.map((field, indexField) => (
            <div
              className={clsx(styles.field, field.variant && styles.variant)}
              key={field.propertie}
            >
              <div className={styles.data}>
                <span>{field.propertie}</span> <span>{field.value}</span>
              </div>
              {!field.variant &&
                !invoiceDetailts[indexColumn][indexField + 1]?.variant && (
                  <Division />
                )}
              {item.indexOf(field) === item.length - 1 && !field.variant && (
                <Division />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
