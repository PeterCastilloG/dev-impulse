import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import { ICredentials } from "../../interfaces/orders.interface";
import { clsx } from "@/shared/lib/clsx";
import styles from "./Order-state-btn.module.scss";
import Credentials from "@/shared/components/credentials/Credentials";

export default function BtnOrderState({
  challengeOrderId,
  type,
  credentials,
  handlePayChallenge,
  handleVerifyChallengOrder,
}: {
  challengeOrderId: number;
  type: string;
  credentials: ICredentials;
  handlePayChallenge: ({
    challengeOrderId,
  }: {
    challengeOrderId: number;
  }) => void;
  handleVerifyChallengOrder: ({
    challengeOrderId,
  }: {
    challengeOrderId: number;
  }) => void;
}) {
  return (
    <>
      {
        {
          PAID: (
            <div className={styles.credentials}>
              <Credentials data={credentials} />
            </div>
          ),
          CREATED: (
            <button
              className={clsx(styles.btn, styles.pay)}
              onClick={() => handlePayChallenge({ challengeOrderId })}
            >
              <PiCurrencyCircleDollarFill /> <span>Pagar</span>
            </button>
          ),
          PENDING: (
            <button
              className={clsx(styles.btn, styles.verify)}
              onClick={() => handleVerifyChallengOrder({ challengeOrderId })}
            >
              <TbReload /> <span>Verificar</span>
            </button>
          ),
        }[type]
      }
    </>
  );
}
