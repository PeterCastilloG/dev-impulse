import { IoMdMail } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
import styles from './Soporte.module.scss'
import { ISoporte } from "./interfaces/soporte.interfaces";

export default function SoportePage({ props }: { props: ISoporte }) {

  const { title, main, time, email, forInputs, message, btn } = props

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.main}>{ title }</span>
        <p>{ main }</p>
        <div className={styles.extra}>

        <div className={styles.cart}>
          <MdWatchLater />
          <div>
            <span>{ time }</span>
            <span>0:00 Am -01:00 Pm</span>
          </div>
        </div>
        <div className={styles.cart}>
          <IoMdMail /> { email }
        </div>
      </div>
      </div>
      <div className={styles.content}>
        <div className={styles.groupfilds}>
          {
            forInputs.map(e => (
              <div key={ e }>
                <label htmlFor="">{ e }</label>
                <input type="text" placeholder="Ingresa el nombre de usuario" />
              </div>
            ))
          }
        </div>
        <div className={styles.text}>
          <label htmlFor="">{ message }</label>
          <textarea name="" id="" placeholder="Ingresa tu mensaje"></textarea>
        </div>
        <button className={styles.buttonForm}>{ btn }</button>
      </div>
      <div className={styles.extra}>
        <div className={styles.cart}>
          <MdWatchLater />
          <div>
            <span>Lunes-Sabado</span>
            <span>0:00 Am -01:00 Pm</span>
          </div>
        </div>
        <div className={styles.cart}>
          <IoMdMail /> support@impulse.com
        </div>
      </div>
    </div>
  );
}
