import { AiFillCheckCircle } from "react-icons/ai";
import { IChallengeOrder } from "../../interfaces/challenge.interfaces";
import Credentials from "@/shared/components/credentials/Credentials";
import styles from "./Order.module.scss";
import Link from "next/link";
import Division from "@/shared/components/division/Division";
import Progress from "../progress-bar/Progress-bar";
import Border from "@/shared/components/border/Border";

export default function Order({ order }: { order: IChallengeOrder }) {
  return (
    <Border>
      <div key={order.checkAnalyze.challengeId} className={styles.order}>
        <div className={styles.review}>
          <div className={styles.info}>
            <div>
              <span>{order.acount.label}</span>
              <span>{order.acount.value}</span>
            </div>
            <div>
              <span>{order.fase}</span>
              <span className={styles.btn}>
                <AiFillCheckCircle /> <span>{order.orderState.label}</span>
              </span>
            </div>
          </div>
          <div className={styles.btns}>
            <div className={styles.credentials}>
              <Credentials data={order.credentials} />
            </div>
            <Link
              href={`/challenge/analyzer?order=${order.checkAnalyze.challengeId}`}
              className={styles.checkanalyzer}
              prefetch={false}
            >
              {order.checkAnalyze.label}
            </Link>
          </div>
        </div>
        <Division />
        <div className={styles.analyzer}>
          {order.analyzer.stats.map((stats) => (
            <div key={stats.label} className={styles.stats}>
              <span className={styles.label}>{stats.label}</span>
              <div className={styles.state}>
                <span className={styles.value}>{stats.value}</span>
                <span className={styles.percent} style={{color: stats.color}}>{stats.percent}</span>
              </div>
            </div>
          ))}
          <div className={styles.rules}>
            <span className={styles.label}>{order.analyzer.rules.title}</span>
            <div className={styles.items}>
              {order.analyzer.rules.items.map((rule) => (
                <div key={rule.label} className={styles.item}>
                  <div className={styles.info}>
                    <span className={styles.state}>{rule.label}</span>
                    <span className={styles.percent} style={{color: rule.color}}>{rule.percent}</span>
                  </div>
                  <div className={styles.bar}>
                    <Progress
                      current={rule.currentValue}
                      max={rule.maxValue}
                      state={rule.state}
                      color={rule.color}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
            href={`/challenge/analyzer?order=${order.checkAnalyze.challengeId}`}
            className={styles.checkanalyzer}
            prefetch={false}
          >
            {order.checkAnalyze.label}
          </Link>
        </div>
      </div>
    </Border>
  );
}
