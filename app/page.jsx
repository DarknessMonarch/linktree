"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";
import Banner from "@/public/assets/banner.png"
import styles from "@/app/style/app.module.css";
import Tiktock from "@/public/icons/tiktock.svg";
import Facebook from "@/public/icons/Facebook.svg";
import Instagram from "@/public/icons/instagram.svg";

export default function App() {

  const open = (site) => {
    window.open(`${site}`, "_blank");
  };

  const linkData = [
    {
      Image: Logo,
      Name: "Website",
      Link: "https://",
      Color: "#C28568"
    },
    {
      Image: Instagram,
      Name: "Instagram",
      Color: "#EA307B",
      Link: "https://www.instagram.com/joeliesbeautyhaven?igsh=MnZkaXIzZHZ0dXNl&utm_source=qr ",
    },
    {
      Image: Tiktock,
      Name: "Tiktock",
      Color: "#080808",
      Link: "https://www.tiktok.com/@joelienailedit?_t=8p45Cc0pnTj&_r=1",
    },
    {
      Image: Facebook,
      Name: "Facebook",
      Color: "#325EED",

      Link: "https://www.facebook.com/makissa.baddo.1?mibextid=LQQJ4d",
    },
  ];

  return (
    <main className={styles.appContainer}>
      <div className={styles.appNav}>
        <h1> Welcome, connect with me anywhere</h1>
        <Image
          src={Banner}
          alt="profile pic"
          height={100}
          className={styles.profile}
        />
      </div>
      <div className={styles.cardWrapper}>
        {linkData.map((data, index) => (
          <div
            key={index}
            onClick={() => open(data.Link)}
            className={styles.card}
          >
            <div className={styles.cardImageWrapper} style={{backgroundColor: data.Color}}>
            <Image
              src={data.Image}
              alt="logo"
              height={100}
              className={styles.cardImage}
            />
            </div>
          

            <h1>{data.Name}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
