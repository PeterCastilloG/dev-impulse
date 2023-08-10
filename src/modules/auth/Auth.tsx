import Image from "next/image";
import styles from "./Auth.module.scss"
import logo from "@/assets/logo.png"
import icon from "@/assets/icon.png"

export default function AuthLayout({children}:{children: React.ReactNode;}){
    return (
        <div className={styles.container}>
          <div className={styles.impulse}>
            <Image src={logo} alt="ImpulseWorld" />
            <p>Que el dinero no sea un impedimento</p>
          </div>
          <div className={styles.content}>
            {children}
            <div className={styles.details}>
              <p>
                Copyrighted 2023 Impulseworld.pro. Todos los derechos reservados.
              </p>
              <ul>
                <li>Inicio</li>
                <li>Desafios</li>
                <li>Términos y condiciones</li>
              </ul>
            </div>
          </div>
        </div>
      );
}