/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./secondContainer.module.css";

import ArrowLogo from "../../assets/down-arrow/down-arrow.webp";
import FirstLogo from "../../assets/Icons/Icons.webp";
import SecondLogo from "../../assets/Icons_2/Icons.webp";
import ThirdLogo from "../../assets/Icons_3/Icons.webp";

interface Props {
  t: any;
}

const SecondContainer = (props: Props) => {
  const { t } = props;
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.arrowContainer}>
          <img src={ArrowLogo} />
        </div>
        <div className={styles.row}>
          <div>
            <p className={styles.whatAreYourChallenges}>
              {t("WHAT_ARE_YOUR_CHALLENGES").toUpperCase()}
            </p>
            <p className={styles.dayToDayBusiness}>
              {t("DAY_TO_DAY_BUSINESS")}
            </p>
          </div>
          <div>
            <div className={styles.firstIconContainer}>
              <img src={FirstLogo} />
              <p className={styles.firstIconContainerText}>{t("FIRST_ICON_TEXT")}</p>
            </div>
            <div className={styles.divider}/>
            <div className={styles.otherIconContainer}>
              <img src={SecondLogo} />
              <p className={styles.firstIconContainerText}>{t("SECOND_ICON_TEXT")}</p>
            </div>
            <div className={styles.divider}/>
            <div className={styles.otherIconContainer}>
              <img src={ThirdLogo} />
              <p className={styles.firstIconContainerText}>{t("THIRD_ICON_TEXT")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SecondContainer };
