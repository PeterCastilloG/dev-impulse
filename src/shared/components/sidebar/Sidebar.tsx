import { SibeBarOptions } from "@/shared/components/sidebar/sidebarOptions";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import Modal from "../modal/Modal";
import playstore from "@/assets/playstore.png"
import applestore from "@/assets/apple.png"

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false)
  const [showSidenab, setShowSidenab] = useState(true);
  const [subMenuShow, setSubMenuShow] = useState(0);

  const handleToogle = () => {
    setShowSidenab(!showSidenab);
  };

  const handleModal = () => {
    console.log("hola")
    setShowModal(!showModal);
  };

  const handleToogleSubMenu = (index: number) => {
    setSubMenuShow(subMenuShow === index ? 0 : index);
  };
  return (
    <div className={clsx(styles.container, showSidenab && styles.show)}>
      <div className={clsx(styles.sidebar, !showSidenab && styles.noshow)}>
        <Link href={"/challenge"} className={styles.logo} prefetch={false}>
          <Image src={logo} alt="Impulse World" />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 211 2"
          fill="none"
        >
          <path d="M0 1L211 1" stroke="url(#paint0_linear_1934_5072)" />
          <defs>
            <linearGradient
              id="paint0_linear_1934_5072"
              x1="0"
              y1="1"
              x2="208.965"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E0E1E2" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E0E1E2" />
              <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.options}>
          {SibeBarOptions.map((item, index) => (
            <div className={styles.option} key={item.name}>
              {
                {
                  1: (
                    <Link
                      href={item.route}
                      className={styles.route}
                      prefetch={false}
                    >
                      {item.icon} {item.name}
                    </Link>
                  ),
                  2: (
                    <div className={styles.subroutes}>
                      <div
                        className={styles.title}
                        onClick={() => handleToogleSubMenu(index)}
                      >
                        <span>
                          {item.icon} {item.name}
                        </span>
                        <IoIosArrowDown
                          className={clsx(
                            subMenuShow === index && styles.rotate
                          )}
                        />
                      </div>
                      <div
                        className={clsx(
                          styles.subs,
                          subMenuShow === index && styles.show
                        )}
                      >
                        {item.subRoutes?.map((item) => (
                          <Link
                            href={item.route}
                            key={item.route}
                            prefetch={false}
                          >
                            <span>{item.icon}</span> <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ),
                }[item.subRoutes ? 2 : 1]
              }
            </div>
          ))}
        </div>
        <div className={styles.extra}>
          <span>Conoce</span>
          <p>Nuestrar nuevas modalidades para fase 1</p>
          <div onClick={handleModal}>
            Ver Más
          </div>
        </div>
      </div>
      <span onClick={handleToogle} className={styles.close}>
        <IoMdClose />
      </span>
      <span onClick={handleToogle} className={styles.menu}>
        <AiOutlineMenu />
      </span>
      <Modal show={showModal}>
        <div className={styles.modal}>
          <div className={styles.content}>
            <span className={styles.title}>Mira tu Analyzer en tu celular</span>
            <div className={styles.platforms}>
              <Link target="_blank" href={"https://apps.apple.com/us/app/metatrader-4/id496212596?utm_campaign=install.metaquotes&utm_source=www.metatrader4.com"}><Image src={applestore} alt=" " width={192} height={70} /></Link>
              <Link target="_blank" href={"https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=es&referrer=ref_id%3D5188602857872233241%26utm_source%3Dwww.metatrader4.com%26utm_campaign%3Dinstall.metaquotes&pli=1"}><Image src={playstore} alt=" " width={192} height={70} /></Link>
            </div>
            <div onClick={handleModal} className={styles.web}>CONTINUAR EN LA WEB</div>
            <IoMdClose onClick={handleModal} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
