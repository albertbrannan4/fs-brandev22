"use client";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/media/logowhite.png";
import styles from "../styles/NavbarFooter.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import UseLanguage from "@/static_data/data";
export default function Navbar() {
  const [language, pageData] = UseLanguage();

  return (
    <nav className={styles.nav}>
      <Image className={styles.brandLogo} src={LOGO} alt="brandev22 logo" />

      <div className={styles.navLinks}></div>
    </nav>
  );
}

{
  /* <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link> */
}
