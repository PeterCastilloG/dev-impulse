import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { IChallenge } from "../../interfaces/configure.interfaces";
import styles from "./Range.module.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { clsx } from "@/shared/lib/clsx";

export default function Range({
  label,
  challenges,
  challenge,
  selectChallenge,
  typeModality,
}: {
  label: string;
  challenges: Array<IChallenge>;
  challenge: IChallenge;
  selectChallenge: (challenge: IChallenge) => void;
  typeModality: number;
}) {
  const handleChangeRange = ({ action }: { action: "NEXT" | "PREVIUS" }) => {
    const currentChallengeIndex = challenges.findIndex(
      (item) => item.challengeId === challenge.challengeId
    );
    if (action === "NEXT") {
      rangeChange(
        currentChallengeIndex === challenges.length - 1
          ? 0
          : currentChallengeIndex + 1
      );
    }
    if (action === "PREVIUS") {
      rangeChange(
        currentChallengeIndex !== 0
          ? currentChallengeIndex - 1
          : challenges.length - 1
      );
    }
  };

  const rangeChange = (value: any) => {
    const challengeSelected = challenges.find((item, index) => index === value);
    if (challengeSelected) selectChallenge(challengeSelected);
  };

  const marks = challenges
    .sort((a, b) => a.balance - b.balance)
    .reduce((acc, cv) => {
      return {
        ...acc,
        [Object.keys(acc).length]: cv.label,
      };
    }, {});

  return (
    <div
      className={clsx(
        styles.container,
        !challenge.swing && styles.no_swing,
        typeModality === 0 && styles.noable
      )}
    >
      <div
        className={clsx(
          styles.line,
          challenge.challengeId === 0 && styles.un_able_next
        )}
      >
        <span className={styles.point}></span>
      </div>
      <div className={styles.challenge}>
        <span className={styles.label}>{label}</span>
        <div className={styles.balance}>
          <AiOutlineMinusCircle
            onClick={() => handleChangeRange({ action: "PREVIUS" })}
          />
          <span>{challenge.balanceLabel}</span>
          <AiOutlinePlusCircle
            onClick={() => handleChangeRange({ action: "NEXT" })}
          />
        </div>
        <div className={styles.range}>
          <Slider
            marks={marks}
            trackStyle={{ backgroundColor: "#007CFF" }}
            pushable
            step={null}
            min={0}
            max={Object.keys(marks).length - 1}
            dotStyle={{ display: "none", background: "red" }}
            railStyle={{ background: "rgba(255, 255, 255, 0.25)" }}
            onChange={rangeChange}
            handleStyle={{ background: "#007CFF", border: "none" }}
            value={challenges.findIndex(
              (item) => item.challengeId === challenge.challengeId
            )}
            
          />
        </div>
      </div>
    </div>
  );
}
