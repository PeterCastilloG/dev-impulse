import { clsx } from "@/shared/lib/clsx";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { IoAlertCircleSharp } from "react-icons/io5";
import styles from "./Order-state-icon.module.scss";

export default function OrderStateIcon({
  type,
  showText = true,
}: {
  type: string;
  showText?: boolean;
}) {
  return (
    <>
      {
        {
          PAID: (
            <span
              className={clsx(
                styles.btn,
                styles.pay,
                !showText && styles.noshow
              )}
            >
              <AiFillCheckCircle /> <span>Pagado</span>
            </span>
          ),
          CREATED: (
            <span
              className={clsx(
                styles.btn,
                styles.created,
                !showText && styles.noshow
              )}
            >
              <MdWatchLater /> <span>Creado</span>
            </span>
          ),
          PENDING: (
            <span
              className={clsx(
                styles.btn,
                styles.pending,
                !showText && styles.noshow
              )}
            >
              <IoAlertCircleSharp /> <span>Pendiente</span>
            </span>
          ),
        }[type]
      }
    </>
  );
}
