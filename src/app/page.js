import Header from "@/components/header/Header";
import Button from "@/components/shared/Button";
import {
  INTRO_TEXT_PRI,
  INTRO_TEXT_SEC,
  INTRO_TEXT_TER,
  MISSION_TEXT_PRI,
  MISSION_TEXT_SEC,
  WHY_TMC,
} from "@/utils/Constants";
import Image from "next/image";
import styles from "./page.module.css";

const WhyTMC = (props) => {
  const { icon, primaryText, secondaryText } = props;
  return (
    <div className={styles.whyTMCComponent}>
      <div className={styles.whyTMCHeader}>
        <div className={styles.whyTMCIcon}>
          <img src={icon} alt={primaryText} />
        </div>
        <div className={styles.whyTMCPrimary}>{primaryText}</div>
      </div>
      <div className={styles.whyTMCSecondary}>{secondaryText}</div>
    </div>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.introContainer}>
        <div className={styles.introTextPri}>{INTRO_TEXT_PRI}</div>
        <div className={styles.introTextSec}>{INTRO_TEXT_SEC}</div>
        <div className={styles.introTextTer}>{INTRO_TEXT_TER}</div>
        <div className={styles.getStartedButton}>
          <Button title="GET STARTED" width="60vw" height="5vh" />
        </div>
      </div>
      <div className={styles.missionContainer}>
        <div className={styles.missionPrimaryText}>{MISSION_TEXT_PRI}</div>
        <div className={styles.missionSecondaryText}>
          <div className={styles.missionLine1}>Our mission is to build an</div>
          <div className={styles.missionLine2}>independent credible</div>
          <div className={styles.missionLine1}>media company, which tell</div>
          <div className={styles.missionLine2}>stories that matter.</div>
        </div>
      </div>
      <div className={styles.whyTMCContainer}>
        <div className={styles.whyTMCHeadingText}>Why choose TMC?</div>
        {WHY_TMC.map((reason) => (
          <WhyTMC
            icon={reason.icon}
            primaryText={reason.textPri}
            secondaryText={reason.textSec}
          />
        ))}
      </div>
    </main>
  );
}
