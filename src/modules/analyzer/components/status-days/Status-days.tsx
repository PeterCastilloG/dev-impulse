import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from "./Status-days.module.scss";
import "react-circular-progressbar/dist/styles.css";
import { IFase } from "../../interfaces/analyzer.interfaces";

export default function Days({ fase }: { fase: IFase }) {
  const stylesPer = buildStyles({
    textColor: "white",
    pathColor: "#0075FF",
    trailColor: "#0A1034",
  });

  return (
    <div className={styles.container}>
      <span className={styles.title}>{fase.title}</span>
      <div className={styles.content}>
        <div className={styles.percent}>
          <CircularProgressbar
            maxValue={fase.lastDay}
            value={fase.currentDay}
            styles={stylesPer}
          />
          <div className={styles.days}>
            <span>{fase.currentDay}</span>
            <span>{fase.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
