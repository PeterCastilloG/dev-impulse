import { AiFillWarning } from "react-icons/ai";
import { IProcessorWarn } from "../../interfaces/invoice.interfaces";
import { GrFormClose } from "react-icons/gr";
import styles from "./Processor-warn.module.scss";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";

export default function ProcessorWarn({ warns }: { warns: IProcessorWarn }) {
  const [show, setShow] = useState(true)
  return (
    <div className={clsx(styles.warn, !show && styles.noshow)}>
      <div>
        <AiFillWarning />
        <span> {warns.title}</span>
        <GrFormClose onClick={()=> setShow(false)}/>
      </div>
      <p>{warns.content}</p>
    </div>
  );
}
