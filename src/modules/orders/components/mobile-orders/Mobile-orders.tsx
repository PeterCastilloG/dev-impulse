import { IOrdersContentPage } from "../../interfaces/orders.interface";
import { useState } from "react"
import { clsx } from "@/shared/lib/clsx";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Mobile-orders.module.scss";
import BtnOrderState from "../order-state-btn/Order-state-btn";
import OrderStateIcon from "../order-state-icon/Order-state-icon";

export default function MobileOrders({
  orderPage,
  handlePayChallenge,
  handleVerifyChallengOrder,
}: {
  orderPage: IOrdersContentPage;
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
  const [selectedOrder, setSelectedOrder] = useState(0)
  return (
    <div className={styles.container}>
      <div className={styles.props}>
        <span>Fecha</span>
        <span>Desafio</span>
        <span>Estado</span>
      </div>
      {orderPage.challengeOrders.map((item) => (
        <div className={styles.challengeorder} key={item.challengeOrderId}>
          <div className={styles.propsorder}>
            <span>{item.createdAt}</span> <span>{item.title}</span>
            <span>
              <OrderStateIcon type={item.status} showText={false} />
              <IoIosArrowDown
                className={styles.drop}
                onClick={() => setSelectedOrder(item.challengeOrderId === selectedOrder ? 0 : item.challengeOrderId)}
              />
            </span>
          </div>
          <div className={clsx(styles.details, selectedOrder === item.challengeOrderId && styles.show)}>
            <div className={styles.extra}>
              <div>
                <span>id:</span> <span>{item.challengeOrderId}</span>
              </div>
              <div>
                <span>Cantidad:</span> <span>{item.price}</span>
              </div>
              <div>
                <span>Moneda:</span> <span>{item.currency}</span>
              </div>
              <div>
                <span>Estado:</span> <OrderStateIcon type={item.status} />
              </div>
            </div>
            <div className={styles.btn}>
              <BtnOrderState
                type={item.status}
                challengeOrderId={item.challengeOrderId}
                credentials={item.credentials}
                handlePayChallenge={handlePayChallenge}
                handleVerifyChallengOrder={handleVerifyChallengOrder}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
