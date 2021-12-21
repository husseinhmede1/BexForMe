/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./firstContainer.module.css";

import BexLogo from "../../../assets/BEX-logo/BEX-logo.webp";
import AppleLogo from "../../../assets/Apple Icon/Apple Icon.webp";
import PlaystoreLogo from "../../../assets/Google play/Google play.webp";
import AreebaLogo from "../../../assets/Areeba logo/Areeba logo.webp";
import MastercardLogo from "../../../assets/Mastercard/Mastercard.webp";

interface Props {
  t: any;
}

const FirstContainer = (props: Props) => {
  const { t } = props;
  return (
    <div className={styles.bg_image}>
      <div className={styles.logo}>
        <img src={BexLogo} />
        <div className={styles.nav}>
          <p className={styles.navText}>{t("HOW_BEX_WORKS").toUpperCase()}</p>
          <p className={styles.navText}>{t("PRICING").toUpperCase()}</p>
          <p className={styles.navText}>{t("ABOUT_US").toUpperCase()}</p>
          <p className={styles.navText}>{t("CONTACT_US").toUpperCase()}</p>
          <div className={styles.logosContainer}>
            <img src={AppleLogo} className={styles.logosSpaceMargin} />
            <img src={PlaystoreLogo} />
          </div>
        </div>
      </div>
      <p className={styles.businessExpenseManagementMadeEasy}>
        {t("BUSINESS_EXPENSE_MANAGEMENT").toUpperCase()}
      </p>
      <p className={styles.controlSpendSave}>
        {t("CONTROL_SPEND_SAVE").toUpperCase()}
      </p>
      <div className={styles.row}>
        <div className={styles.tryItForFreeContainer}>
          <p className={styles.tryItForFreeText}>{t("TRY_IT_FOR_FREE")}</p>
        </div>
        <div className={styles.getYourDemoContainer}>
          <p className={styles.tryItForFreeText}>{t("GET_YOUR_DEMO")}</p>
        </div>
      </div>
      <div className={styles.poweredByContainer}>
        <div>
          <p className={styles.poweredByText}>{t("POWERED_BY")}</p>
          <img src={AreebaLogo} />
        </div>
        <div className={styles.horizontallyDivider}/>
        <div>
          <p className={styles.poweredByText}>{t("IN_PARTNERSHIP_WITH")}</p>
          <img src={MastercardLogo} />
        </div>
      </div>
    </div>
  );
};

export { FirstContainer };
