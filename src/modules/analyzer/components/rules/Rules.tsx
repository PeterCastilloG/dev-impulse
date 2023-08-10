import { FaCircleInfo } from "react-icons/fa6";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { IAcountRules } from "../../interfaces/analyzer.interfaces";
import styles from "./Rules.module.scss";
import Icon from "@/shared/components/icon/Icon";

export default function Rules({ rules }: { rules: IAcountRules }) {
  return (
    <div className={styles.container}>
      <div className={styles.secctiontitle}>
        <FaCircleInfo />
        <span>{rules.title}</span>
      </div>
      <div className={styles.rulesdesktop}>
        <table className={styles.table}>
          <thead>
            <tr>
              {rules.properties.map((item) => (
                <th key={item.propertie}>{item.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rules.objects.map((item, index) => (
              <tr key={index}>
                {rules.properties.map((prop) => (
                  <td
                    key={prop.label}
                  >
                    <div className={styles.value}>
                      <span style={{
                        color: `${item[prop.propertie].color ?? "white"}`
                      }}><Icon icon={item[prop.propertie].icon ?? ""} /> {item[prop.propertie].value ?? ""}</span>
                      {prop.propertie === "tradingObjects" &&
                        item.tradingObjects.extra && (
                          <div className={styles.extrainfo}>
                            <p>{item.tradingObjects.extra}</p>
                            <FaCircleInfo />
                          </div>
                        )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.rulesmobile}>
        {rules.objects.map((item, index) => (
          <div key={item.tradingObjects.value} className={styles.cart}>
            <div className={styles.title}>
              <span className={styles.propertie}>{item.tradingObjects.value} {item.tradingObjects.extra ? (
                <span className={styles.extrainfo}>
                  <p>{item.tradingObjects.extra}</p>
                  <AiFillQuestionCircle />
                </span>
              ) : "ㅤ"}</span>
            </div>
            <div className={styles.content}>
              {rules.properties.filter(item => item.responsive).map((prop) => (
                <div
                  key={prop.label}
                  className={styles.info}
                >
                  <span>{prop.label}</span>
                  <span className={styles.value} style={{
                    color: `${item[prop.propertie].color ?? "white"}`
                  }}><Icon icon={item[prop.propertie].icon ?? ""} /> {item[prop.propertie].value ?? "-"}  </span>
                </div>
              ))}
              {
                index !== rules.objects.length - 1 &&
                <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 296 2" fill="none">
                  <path d="M0 1H296" stroke="url(#paint0_linear_1543_10289)" />
                  <defs>
                    <linearGradient id="paint0_linear_1543_10289" x1="0" y1="1" x2="293.145" y2="1" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E0E1E2" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#E0E1E2" />
                      <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
