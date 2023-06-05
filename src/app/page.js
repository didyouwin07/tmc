import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Button from "@/components/shared/Button";
import {
  INTRO_TEXT_PRI,
  INTRO_TEXT_SEC,
  INTRO_TEXT_TER,
  MISSION_TEXT_PRI,
  MISSION_TEXT_SEC,
  STARTER_COLLECTION,
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

const CollectionCard = (props) => {
  const {
    category,
    image,
    headline,
    summary,
    newsCurator,
    newsCuratorPic,
    reviewerCount,
    publishDate,
  } = props;
  return (
    <div className={styles.collectionCardContainer}>
      <div className={styles.collectionHeader}>
        <div className={styles.itemCategory}>{category}</div>
        <div className={styles.bookmarkIcon}>
          <img src="/icons/bookmark-icon.svg" alt="Bookmark" />
        </div>
      </div>
      <div className={styles.collectionImageContainer}>
        <img src={image} alt={headline} />
      </div>
      <div className={styles.collectionHeadline}>{headline}</div>
      <div className={styles.collectionSummary}>{summary}</div>
      <div className={styles.collectionSeparator} />
      <div className={styles.curatorDetails}>
        <div className={styles.curatorPic}>
          <img src={newsCuratorPic} alt={newsCurator} />
        </div>
        <div className={styles.curatorName}>{newsCurator}</div>
        <div className={styles.reviewerCount}>+{reviewerCount}</div>
      </div>
      <div className={styles.publishDate}>{publishDate}</div>
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
      <div className={styles.getStartedSection}>
        <div className={styles.getStartedHeading}>
          Get access to our Starter Collection by signing up for FREE.
        </div>
        <div className={styles.collectionCarouselContainer}>
          {STARTER_COLLECTION.map((item) => (
            <CollectionCard {...item} />
          ))}
        </div>
        <div className={styles.signUpNowSection}>
          <div className={styles.signUpNowHeading}>
            Sign up now to access the Starter Collection
          </div>
          <div className={styles.starterCreditDetails}>
            <div className={styles.creditDetailsInnerContainer}>
              <div className={styles.creditsTitle}>Free 10 Starter Credits</div>
              <div className={styles.creditBenefits}>
                <div className={styles.creditBenefit}>
                  <div className={styles.greenTick}>
                    <img src="/icons/green-tick.svg" alt="Green Tick" />
                  </div>
                  <div className={styles.benefit}>
                    Get FREE 10 Starter Credits
                  </div>
                </div>
                <div className={styles.creditBenefit}>
                  <div className={styles.greenTick}>
                    <img src="/icons/green-tick.svg" alt="Green Tick" />
                  </div>
                  <div className={styles.benefit}>
                    Use Starter Credits to unlock free stories, newsletters and
                    long reads
                  </div>
                </div>
                <div className={styles.creditBenefit}>
                  <div className={styles.greenTick}>
                    <img src="/icons/green-tick.svg" alt="Green Tick" />
                  </div>
                  <div className={styles.benefit}>
                    Starter Credits <span className={styles.bold}>do not expire</span> – use them as on stories of
                    your choice
                  </div>
                </div>
              </div>
              <div className={styles.signUpButton}>
                <Button title='SIGN UP FOR FREE' width="70%" height="6vh" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </main>
  );
}
