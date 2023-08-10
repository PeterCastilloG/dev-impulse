import { IQrCode } from "../../interfaces/invoice.interfaces";
import Image from "next/image";
import styles from "./Qr-code.module.scss";
import Credential from "@/shared/components/hide-copy-text/Hide-copy-text";

export default function QrCode({ qrCode }: { qrCode: IQrCode }) {
  return (
    <div className={styles.container}>
      <Image alt={qrCode.code} src={qrCode.img} width={245} height={245} />
      <div className={styles.code}>
        <Credential input={qrCode.code} hideValue={false}/>
      </div>
    </div>
  );
}
