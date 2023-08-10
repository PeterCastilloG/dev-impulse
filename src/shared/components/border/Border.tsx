import Image from "next/image";
import styles from "./Border.module.scss";
import img from "@/assets/challengeBackground.png";

export default function Border({ children, }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Image src={img} alt="background" />
      {children}
    </div>
  );
}
