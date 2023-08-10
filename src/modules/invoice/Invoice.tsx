"use client";
import {
  IInvoiceContentPage,
  IInvoiceInfo,
} from "./interfaces/invoice.interfaces";
import { useState } from "react";
import { createInvoice, verifyInvoice } from "./services/invoice.services";
import { ToastContainer, toast } from "react-toastify";
import { UserAuth } from "@/shared/interfaces/auth";
import { clsx } from "@/shared/lib/clsx";
import Description from "./components/description/Description";
import InvoiceDetails from "./components/invoice-details/Invoice-details";
import PaymentMethods from "./components/payment-methods/Payment-methods";
import styles from "./Invoice.module.scss";
import InvoiceProcessor from "./components/invoice-processor/Invoice-processor";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function InvoicePage({
  userAuth,
  invoicePage,
}: {
  userAuth: UserAuth;
  invoicePage: IInvoiceContentPage;
}) {
  const router = useRouter()
  const [invoiceInfo, setInvoiceInfo] = useState<IInvoiceInfo>(
    invoicePage.invoiceInfo
  );
  const [showInvoice, setShowInvoice] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleCreateInvoice({
    paymentProcessor,
    currencyCode,
    currencyToken,
  }: {
    paymentProcessor: string;
    currencyCode?: string;
    currencyToken?: string;
  }) {
    setLoading(true);
    const { success, data, kindMessage } = await createInvoice({
      ...userAuth,
      challengeOrderId: invoicePage.challengeOrderId,
      paymentProcessor,
      currencyCode,
      currencyToken,
    });
    setLoading(false);
    if (!success) {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    } else {
      setInvoiceInfo(data);
      setShowInvoice(true);
    }
  }

  async function handleVerifyInvoice() {
    setLoading(true);
    const { success, data, kindMessage } = await verifyInvoice({
      ...userAuth,
      challengeOrderId: invoicePage.challengeOrderId,
    });
    setLoading(false);
    if (success) {
      router.push("/challenge/confirmation?orderId=" + data.challengeOrderId)
    } else {
      const message = kindMessage ?? "Ha ocurrido un error inseperado";
      toast.error(message);
    }
  }

  return (
    <div className={clsx(styles.page, loading && styles.ableBtns)}>
      <div className={clsx(styles.container, showInvoice && styles.noshow)}>
        <span className={styles.title}>{invoicePage.title}</span>
        <div className={styles.order}>
          <span className={styles.label}>{invoicePage.label}</span>
          <Description description={invoicePage.description} />
          <InvoiceDetails invoiceDetailts={invoicePage.invoiceDetailts} />
        </div>
        <PaymentMethods
          invoicePage={invoicePage}
          handleCreateInvoice={handleCreateInvoice}
          handleVerifyInvoice={handleVerifyInvoice}
        />
        <p>{invoicePage.extrainfo}</p>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <div className={clsx(!showInvoice && styles.noshow)}>
        <InvoiceProcessor
          invoiceInfo={invoiceInfo}
          setShowInvoice={setShowInvoice}
          handleVerifyInvoice={handleVerifyInvoice}
        />
      </div>
    </div>
  );
}
