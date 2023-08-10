import {
  IInvoiceContentPage,
  IInvoiceInfo,
} from "../../interfaces/invoice.interfaces";
import Image from "next/image";
import styles from "./Payment-methods.module.scss";
import Processor from "../processor/Processor";

export default function PaymentMethods({
  invoicePage,
  handleCreateInvoice,
  handleVerifyInvoice,
}: {
  invoicePage: IInvoiceContentPage;
  handleCreateInvoice: ({
    paymentProcessor,
  }: {
    paymentProcessor: string;
    currencyCode?: string;
    currencyToken?: string;
  }) => Promise<void>;
  handleVerifyInvoice: () => void;
}) {
  return (
    <div className={styles.paymentprocesors}>
      <span>{invoicePage.paymentMethods.title}</span>
      <div className={styles.paymentcontent}>
        {invoicePage.paymentMethods.methods.map((payment) => (
          <div key={payment.currencie} className={styles.currencie}>
            <div className={styles.currencieimg}>
              <Image
                src={payment.currencieImg}
                alt={payment.currencie}
                width={100}
                height={50}
              />
              <span>{payment.currencie}</span>
            </div>
            <div className={styles.procesors}>
              {payment.processors.map((procesor) => (
                <Processor
                  key={procesor.code}
                  procesor={procesor}
                  handleCreateInvoice={handleCreateInvoice}
                  handleVerifyInvoice={handleVerifyInvoice}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
