import { Inter } from "next/font/google";
import About from "@/components/AboutSection/About";
import SelfPortrait from "../public/media/banner 1 - Copy.jpeg";
import Image from "next/image";
import styles from "../components/AboutSection/About.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.imgAfterHeader}></div>
        <section id="About" className={styles.about}>
          <div className={styles.aboutContent}>
            <Image
              className={styles.selfPortrait}
              src={SelfPortrait}
              alt="Self Portrait"
              width={200}
              height={200}
            />

            <div className={styles.wrapper}>
              <div className={styles.staticText}>Build your</div>
              <ul className={styles.dynamicTexts}>
                <li className={styles.choice}>
                  <span>Website.</span>
                </li>
                <li className={styles.choice}>
                  <span>Brand.</span>
                </li>
                <li className={styles.choice}>
                  <span>Confidence.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
