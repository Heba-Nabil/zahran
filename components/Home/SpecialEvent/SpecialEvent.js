// Main Imports
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./SpecialEvent.module.css";

const SpecialEvent = ({ to = "/", title = "" }) => {
  return (
    <Link href={to}>
      <a className={styles.event}>
        <p className={styles.title}>{title}</p>
        <div className={styles.image}>
          <Image
            src="/images/S-E-3.webp"
            alt="..."
            width="82"
            height="127"
            placeholder="blur"
            blurDataURL="/images/S-E-3.webp"
          />
        </div>
      </a>
    </Link>
  );
};

export default SpecialEvent;
