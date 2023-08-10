"use client";
import { FaFlag } from "react-icons/fa6";
import { IChallengeContentPage } from "./interfaces/challenge.interfaces";
import styles from "./Challenge.module.scss";
import Order from "./components/order/Order";
import Link from "next/link";
import Content from "./components/content/Content";
import Details from "./components/details/Destails";
import Icon from "@/shared/components/icon/Icon";

export default function ChallengePage({
  challengePage,
}: {
  challengePage: IChallengeContentPage;
}) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{challengePage.title}</span>
      <div className={styles.orders}>
        {challengePage.challengeOrders?.map((order) => (
          <Order order={order} key={order.checkAnalyze.challengeId} />
        ))}
      </div>
      <div className={styles.challenge}>
        <div className={styles.icon}><Icon icon={challengePage.icon} /></div>
        <span className={styles.title}>{challengePage.subTitle}</span>
        <Content mainInfo={challengePage.mainInfo} />
         {challengePage.description && <p className={styles.info}>{challengePage.description}</p>}
        <div className={styles.division}></div>
        <Details challengeInfo={challengePage.challengeInfo}/>
        <Link
          className={styles.buy}
          href={"/challenge/configure"}
          prefetch={false}
        >
          {challengePage.challengeBtn}
        </Link>
      </div>
    </div>
  );
}
