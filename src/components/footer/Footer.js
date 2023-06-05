import { SOCIAL_HANDLES } from "@/utils/Constants";
import React from "react";
import styles from "./styles/footerStyles.module.css";

export default function () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.companyName}>
        <div className={styles.logo}>
          <img src="/icons/logo.svg" alt="The Morning Context" />
        </div>
        <div className={styles.company}>
          <div className={styles.companyNameWord}>THE</div>
          <div className={styles.companyNameWord}>MORNING</div>
          <div className={styles.companyNameWord}>CONTEXT</div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.followUsTitle}>Follow us on</div>
        <div className={styles.socialHandles}>
          {SOCIAL_HANDLES.map((handle) => (
            <div className={styles.handleIcon}>
              <img src={handle.icon} alt={handle.name} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.companyAddress}>
        <div className={styles.companyHeadOfficeName}>©2020 Slowform Pte Limited </div>
        <div className={styles.companyHeadOfficeAddress}>68 Circular Road, #02-01, 049422, Singapore</div>
      </div>
      <div className={styles.separator} />
        <div className={styles.links}>
            <div className={styles.link}>Terms of service</div>
            <div className={styles.dot}>.</div>
            <div className={styles.link}>Privacy policy</div>
        </div>
    </div>
  );
}
