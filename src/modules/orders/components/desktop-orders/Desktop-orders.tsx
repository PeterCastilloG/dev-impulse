import { IOrdersContentPage } from "../../interfaces/orders.interface";
import styles from "./Desktop-orders.module.scss";
import BtnOrderState from "../order-state-btn/Order-state-btn";
import OrderStateIcon from "../order-state-icon/Order-state-icon";

export default function DesktopOrders({
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
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {orderPage.challenOrderPropertie.map((item) => (
            <th key={item.propertie}>{item.label}</th>
          ))}
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {orderPage.challengeOrders?.map((order) => (
          <tr key={order.challengeOrderId}>
            {orderPage.challenOrderPropertie?.map((prop) => (
              <td key={prop.propertie}>
                {prop.propertie !== "status" ? (
                  order[prop.propertie]
                ) : (
                  <OrderStateIcon type={order[prop.propertie]} />
                )}
              </td>
            ))}
            <td>
              <BtnOrderState
                challengeOrderId={order.challengeOrderId}
                type={order.status}
                credentials={order.credentials}
                handlePayChallenge={handlePayChallenge}
                handleVerifyChallengOrder={handleVerifyChallengOrder}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
