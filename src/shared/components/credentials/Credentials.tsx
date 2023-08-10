import { BiSolidCheckShield } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { AiFillApple, AiFillWindows } from "react-icons/ai";
import styles from "./Credentiales.module.scss";
import Credential from "../hide-copy-text/Hide-copy-text";
import Modal from "@/shared/components/modal/Modal";

interface ICredentials {
  btnName: string;
  title: string;
  fields: Array<{ label: string; value: string }>;
}

export default function Credentials({ data }: { data: ICredentials }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        <BiSolidCheckShield />
        <span>{data.btnName}</span>
      </button>
      <Modal show={show}>
        <div className={styles.container_credentials}>
          <div className={styles.credentials}>
            <span className={styles.title}>{data.title}</span>
            {data.fields.map((item) => (
              <Credential
                key={item.value}
                label={item.label}
                input={item.value}
              />
            ))}
            <IoMdClose
              className={styles.close}
              onClick={() => setShow(false)}
            />
            <div className={styles.btns}>
              <span>
                <FaCircleInfo />
                DESCARGAR MT4A
              </span>
              <a
                href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg?utm_source=www.metatrader4.com&utm_campaign=download.mt4.macos"
                target="_BLANK"
              >
                <AiFillApple className={styles.icon} />
              </a>
              <a
                href="https://download.mql5.com/cdn/web/19600/mt4/worldtraders4setup.exe"
                target="_BLANK"
              >
                {" "}
                <AiFillWindows className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
