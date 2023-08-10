import { MdArrowBackIosNew } from "react-icons/md";
import React from "react";
import styles from "./Invoice-processor.module.scss";
import { IInvoiceInfo } from "../../interfaces/invoice.interfaces";
import Image from "next/image";
import ProcessorWarn from "../processor-warn/Processor-warn";
import Link from "next/link";
import Timer from "../timer/Timer";
import QrCode from "../qr-code/Qr-code";
import ProcessorDeatils from "../processor-details/Processor-details";

export default function InvoiceProcessor({
  invoiceInfo,
  setShowInvoice,
  handleVerifyInvoice,
}: {
  invoiceInfo: IInvoiceInfo;
  setShowInvoice: (status: boolean) => void;
  handleVerifyInvoice: () => void;
}) {
  const { warns, extraInfo, extraInfWithLinks, soporte, timer, checkpage, qr } =
    invoiceInfo;

  return (
    <div className={styles.invoice}>
      <div className={styles.return} onClick={() => setShowInvoice(false)}>
        <MdArrowBackIosNew />
        <span>{invoiceInfo.labelInvoice}</span>
      </div>
      <span className={styles.title}>{invoiceInfo.title}</span>
      <div className={styles.info}>
        <div className={styles.processor}>
          <span>{invoiceInfo.payWith}</span>
          {invoiceInfo.img && (
            <Image
              src={invoiceInfo.img}
              alt="processor"
              width={100}
              height={100}
            />
          )}
        </div>
        <ProcessorDeatils invoiceDetailts={invoiceInfo.properties} />
      </div>
      {qr && <QrCode qrCode={qr} />}
      {warns &&
        warns.map((item) => <ProcessorWarn warns={item} key={item.title} />)}
      {timer && checkpage && (
        <Timer initialHours={timer.hours} label={timer.label}>
          <Link href={checkpage.link} target="_blank">
            {checkpage.text}
          </Link>
        </Timer>
      )}
      {soporte &&
        soporte.map((item) => (
          <div className={styles.soporte} key={item.img}>
            <span className={styles.label}>{item.label}</span>
            <Image alt={item.img} src={item.img} width={100} height={100} />
            <span className={styles.currencie}>{item.currencie}</span>
          </div>
        ))}
      {extraInfo && extraInfo.map((item) => <p key={item}>{item}</p>)}
      {extraInfWithLinks &&
        extraInfWithLinks.map((item, index) => (
          <p key={index}>
            {item.map((item) => (
              <React.Fragment key={item.text}>
                {item.redirect ? (
                  <a href={item.redirect}>{item.text}</a>
                ) : (
                  item.text
                )}
              </React.Fragment>
            ))}
          </p>
        ))}
      <div className={styles.verify} onClick={handleVerifyInvoice}>
        {invoiceInfo.verify.text}
      </div>
    </div>
  );
}
