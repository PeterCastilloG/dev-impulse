import Image from "next/image";
import styles from "./Offers.module.scss";
import offerMendoza from "/Users/luiss/app-trader-front/public/assets/offers-mendoza.png";
import offersPeeks from "/Users/luiss/app-trader-front/public/assets/offers-peeks.png";
import offersElvetate from "/Users/luiss/app-trader-front/public/assets/offers-elevate.png";

import { IOffersContentPage } from "./interfaces/offers.interfaces";

export default function OffersPage({
  offersPage,
}: {
  offersPage: IOffersContentPage;
}) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{offersPage.title}</span>
      <div className={styles.offers}>
        {offersPage.offers.map((item) => (
          <div key={item.title} className={styles.cart}>
            <span>{item.title}</span>
            <p>{item.main}</p>
            <button>{item.btn}</button>
            <Image
              src={item.img.src}
              alt={item.img.alt}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
