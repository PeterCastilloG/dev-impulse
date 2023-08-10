import { BsArrowRight } from "react-icons/bs";
import { IProcessor } from "../../interfaces/invoice.interfaces";
import Image from "next/image";
import styles from "./Proccesor.module.scss";

export default function Processor({
  procesor,
  handleCreateInvoice,
  handleVerifyInvoice,
}: {
  procesor: IProcessor;
  handleCreateInvoice: ({
    paymentProcessor,
  }: {
    paymentProcessor: string;
    currencyCode?: string;
    currencyToken?: string;
  }) => Promise<void>;
  handleVerifyInvoice: () => void;
}) {
  async function handleInvoice() {
    await handleCreateInvoice({
      paymentProcessor: procesor.code,
      currencyCode: procesor.currencyCode,
      currencyToken: procesor.currencyToken,
    });
  }

  return (
    <div className={styles.procesor}>
      <span>{procesor.label}</span>
      <div>
        <Image
          src={procesor.img}
          alt={procesor.paymenteProcessor}
          width={100}
          height={100}
        />
        <button onClick={handleInvoice}>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
