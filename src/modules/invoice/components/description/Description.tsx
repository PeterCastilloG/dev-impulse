import { Fragment } from "react";
import { ILetter } from "../../interfaces/invoice.interfaces";
import styles from "./Description.module.scss"

export default function Description({ description }: { description: Array<ILetter> }) {
    return <p className={styles.description}> 
        {description.map((item, index) =>
            item.bold ? (
                <span key={index} style={{ fontWeight: 700 }}>
                    {item.letter}{" "}
                </span>
            ) : (
                <Fragment key={index}>{item.letter} </Fragment>
            )
        )}
    </p>
}