import { FaCircleInfo } from "react-icons/fa6";
import { IAcountResume } from "../../interfaces/analyzer.interfaces";
import styles from "./Resume-challenge-order.module.scss";

export default function Resume({ resume }: { resume: IAcountResume }) {
  return (
    <div className={styles.stats_data}>
      <div className={styles.data_title}>
        <FaCircleInfo />
        <span>{resume.title}</span>
      </div>
      <div className={styles.data}>
        <div className={styles.main}>
          <span className={styles.title}>{resume.currentBalance.label}</span>
          <div className={styles.info}>
            <span>${resume.currentBalance.value}</span>
            {resume.currentBalance.percent && (
              <span
                style={{
                  color: resume.currentBalance.goal ? "#01B574" : "#FF5757",
                }}
              >
                {resume.currentBalance.percent}
              </span>
            )}
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stats_group}>
            <div className={styles.stat}>
              <span className={styles.title}>{resume.initialWeek.label}</span>
              <div className={styles.info}>
                <span>${resume.initialWeek.value}</span>
                {resume.initialWeek.percent && (
                  <span
                    style={{
                      color: resume.initialWeek.goal ? "#01B574" : "#FF5757",
                    }}
                  >
                    {resume.initialWeek.percent}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.stat}>
              <span className={styles.title}>{resume.maximunWeek.label}</span>
              <div className={styles.info}>
                <span>${resume.maximunWeek.value}</span>
                {resume.maximunWeek.percent && (
                  <span
                    style={{
                      color: resume.maximunWeek.goal ? "#01B574" : "#FF5757",
                    }}
                  >
                    {resume.maximunWeek.percent}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.stats_group}>
            <div className={styles.stat}>
              <span className={styles.title}>{resume.initialDay.label}</span>
              <div className={styles.info}>
                <span>${resume.initialDay.value}</span>
                {resume.initialDay.percent && (
                  <span
                    style={{
                      color: resume.initialDay.goal ? "#01B574" : "#FF5757",
                    }}
                  >
                    {resume.initialDay.percent}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.stat}>
              <span className={styles.title}>{resume.maximunDay.label}</span>
              <div className={styles.info}>
                <span>${resume.initialWeek.value}</span>
                {resume.maximunDay.percent && (
                  <span
                    style={{
                      color: resume.maximunDay.goal ? "#01B574" : "#FF5757",
                    }}
                  >
                    {resume.maximunDay.percent}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
