import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { IoExit, IoNotificationsSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.scss";
import Modal from "../modal/Modal";
import Link from "next/link";
import Division from "../division/Division";

export default function Navbar() {
  const path = usePathname();
  const { data: session } = useSession();

  const [userShow, setUserShow] = useState(false);
  const [notificationsShow, setNotificacionShow] = useState(false);

  const currentPath = (): string => {
    const pathName = path.split("/").at(-1) ?? "Impulse";
    return pathName.charAt(0).toUpperCase() + pathName.slice(1);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.path}>
        <span className={styles.start}>Inicio</span>
        <span>{currentPath() && "/"}</span>
        <span>{currentPath()}</span>
      </div>
      <div className={styles.user}>
        <Link href={"/challenge"} className={styles.challenge}>
          <BsFillCartFill /> <span>NUEVÓ DESAFIO</span>
        </Link>
        <div className={styles.noti} onClick={() => setNotificacionShow(true)}>
          <span className={styles.active}></span>
          <IoNotificationsSharp />
        </div>
        <span className={styles.logo} onClick={() => setUserShow(true)}>
          {session?.user.info.firstName.split("")[0]}
        </span>
      </div>
      <Modal show={userShow}>
        <div className={styles.options}>
          <div className={styles.content}>
            <Link href={"/profile/change-password"}>
              <RiLockPasswordFill />
              <span>Cambiar de contraseña</span>
            </Link>
            <div onClick={() => signOut()}>
              <IoExit />
              <span>Cerrar sesión</span>
            </div>
            <IoMdClose
              className={styles.close}
              onClick={() => setUserShow(false)}
            />
          </div>
        </div>
      </Modal>
      <Modal show={notificationsShow}>
        <div className={styles.options}>
          <div className={styles.notificacion}>
            <div>
              <span>Lorem ipsum dolor sit</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <Division />
            </div>
            <div>
              <span>Lorem ipsum dolor sit</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <Division />
            </div>
            <div>
              <span>Lorem ipsum dolor sit</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <Division />
            </div>
            <IoMdClose
              className={styles.close}
              onClick={() => setNotificacionShow(false)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
