import border from "@/assets/input-border.png"
import Image from "next/image"
import styles from "./Border.module.scss"

export default function Border(){
    return <Image alt="borer" src={border} className={styles.border}/>
}