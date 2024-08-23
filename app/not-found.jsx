"use client";

import Link from "next/link";
import Image from "next/image";
import NotFoundImage from "@/public/icons/404.svg";
import styles from "@/app/style/notfound.module.css";

export default function NotFound() {


  return (
    <div className={styles.notFound}>
      <Image
        className={styles.notFoundImg}
        src={NotFoundImage}
        height={240}
        alt="Not found image"
        priority
      />

      <Link
        href="/"
        className={styles.notFoundBtn}
      >
         Return home
      </Link>
    </div>
  );
}
