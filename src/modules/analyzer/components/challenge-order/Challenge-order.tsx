import {
  IChallengeOrderInfo,
  IOrder,
} from "../../interfaces/analyzer.interfaces"; import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { clsx } from "@/shared/lib/clsx";
import styles from "./Challenge-order.module.scss";
import Credentials from "@/shared/components/credentials/Credentials";
import Border from "@/shared/components/border/Border";
import Icon from "@/shared/components/icon/Icon";
import Link from "next/link";

export default function Challenge({
  challengeOrderInfo,
  orders,
}: {
  challengeOrderInfo: IChallengeOrderInfo;
  orders: Array<IOrder>;
  challengeOrderId: number;
}) {
  const [showOrders, setShowOrders] = useState(false);

  return (
    <div className={styles.challenge}>
      <div className={styles.content}>
        <div className={styles.accounts}>
          <Border>
            <div className={styles.current}>
              <div className={styles.login}>
                {challengeOrderInfo.account.accountNumber}
              </div>
              <div className={styles.details}>
                {challengeOrderInfo.state.fase && (
                  <span className={styles.fase}>
                    {challengeOrderInfo.state.fase}
                  </span>
                )}
                <span
                  className={styles.status}
                  style={{
                    color: challengeOrderInfo.state.color,
                    background: challengeOrderInfo.state.back,
                  }}
                >
                  <Icon icon={challengeOrderInfo.state.icon} />
                  {challengeOrderInfo.state.status}
                </span>
              </div>
            </div>
          </Border>
          <IoIosArrowDown className={styles.down} onClick={() => setShowOrders(!showOrders)} />
          <div
            className={clsx(
              styles.challenge_orders,
              !showOrders && styles.noshow
            )}
          >
            <Border>
              <div className={styles.orders}>
                {orders.map((item) => (
                  <Link href={"/challenge/analyzer?orderId="+item.challengeOrderId} className={styles.order} key={item.login}>
                    <span className={styles.login}>{item.loginLabel}</span>
                    <div className={styles.info}>
                      {item.state.fase && (
                        <span className={styles.fase}>{item.state.fase}</span>
                      )}
                      <span
                        className={styles.status}
                        style={{
                          color: item.state.color,
                          background: item.state.back,
                        }}
                      >
                        <Icon icon={challengeOrderInfo.state.icon} />
                        {item.state.status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Border>
          </div>
        </div>
        <div className={styles.credentials}><Credentials data={challengeOrderInfo.credenciales} /></div>
      </div>
    </div>
  );
}
