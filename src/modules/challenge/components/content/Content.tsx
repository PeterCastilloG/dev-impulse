import { Fragment } from "react";
import styles from "./Content.module.scss"
import { ILetter } from "../../interfaces/challenge.interfaces";

export default function Content({mainInfo}:{mainInfo: Array<ILetter>}){
    return <div className={styles.content}>
    {mainInfo.map((item, index) =>
      item.bold ? (
        <strong key={index}>
          {item.letter}{" "}
        </strong>
      ) : (
        <Fragment key={index}>{item.letter} </Fragment>
      )
    )}
  </div>
}