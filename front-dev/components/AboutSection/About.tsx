import Image from "next/image";
import styles from "../../styles/About.module.css";
import BootstrapIcon from "../../public/media/bootstrap icon sq.png";
import JavaScriptIcon from "../../public/media/js icon sq.png";
import HTMLIcon from "../../public/media/html icon sql.png";
import CSSIcon from "../../public/media/css icon sq.png";
import NodejsIcon from "../../public/media/nodejs icon sql.png";
import ReactIcon from "../../public/media/react icon sq.png";
import GitIcon from "../../public/media/git icon sq.png";
import BloomTechCert from "../../public/media/BloomTech Certificate of Completion - Albert Brannan (Full Stack Web Development).pdf.png";

export default function About() {
  return (
    <div>
      <section className={styles.tech}>
        <div className={styles.techBar}>
          <Image
            src={HTMLIcon}
            alt="html icon"
            className={styles.techIcon}
            width={60}
            height={60}
          />
          <Image
            src={CSSIcon}
            alt="css icon"
            className={styles.techIcon}
            width={60}
            height={60}
          />
          <Image
            src={JavaScriptIcon}
            alt="javascript icon"
            className={styles.techIcon}
            width={60}
            height={60}
          />
          <Image
            src={NodejsIcon}
            alt="node.js icon"
            className={styles.techIcon}
            width={60}
            height={60}
          />
          <Image
            src={GitIcon}
            alt="git icon"
            className={styles.techIcon}
            width={60}
            height={60}
          />
          <Image
            src={ReactIcon}
            alt="react icon"
            className={styles.techIcon}
            width={60}
            height={60}
          />
          <Image
            src={BootstrapIcon}
            alt="bootstrap"
            className={styles.techIcon}
            width={60}
            height={60}
          />
        </div>
      </section>
      <section className={styles.Skills}>
        <div className={styles.BloomTech}>
          <h2 className={styles.BloomTechH2}>
            FULL STACK WEB DEVELOPMENT + TECHNICAL INTERVIEWING CERTIFICATION
          </h2>
          <a
            target="_blank"
            href="https://www.bloomtech.com/courses/full-stack-web-development?utm_adgroup=&utm_matchtype=e&creative=654841279630&device=c&utm_source=google&utm_medium=cpc&utm_campaign=BT_Search_Branded_Core_Exact&utm_term=bloomtech&hsa_acc=9829704321&hsa_cam=15219107432&hsa_grp=128288863894&hsa_ad=654841279630&hsa_src=g&hsa_tgt=kwd-436810523649&hsa_kw=bloomtech&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwtO-kBhDIARIsAL6LorfQPI-k-rqJYp6JPcmrTSM2KtENioNovzmXpGSFBWkN0QG4B6brzxoaAk_0EALw_wcB"
          >
            <Image
              src={BloomTechCert}
              alt=""
              className={styles.BloomTechCert}
              width={430}
              height={330}
            />
          </a>
          <div className={styles.bloomButton}>Skills</div>
        </div>
      </section>
    </div>
  );
}
