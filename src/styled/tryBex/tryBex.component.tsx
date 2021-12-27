/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./tryBex.module.css";

import AppleLogo from "&assets/Apple Icon/Apple Icon.webp";
import PlaystoreLogo from "&assets/Google play/Google play.webp";
import TryBexLogo from "&assets/Try-BEX-img/Try-BEX-img.webp";

interface Props {}

const TryBex = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.tryBexForFree}>{t("TRY_BEX_FOR_FREE")}</p>
        <p className={styles.month_users_digital_card_only}>
          {t("MONTH_USERS_DIGITAL_CARD_ONLY")}
        </p>
        <div className={styles.rowContainer}>
          <div className={styles.getYourDemoContainer}>
            <p className={styles.getYourDemo}>{t("GET_YOUR_DEMO")}</p>
          </div>
          <img src={AppleLogo} className={styles.logosContainer} />
          <img src={PlaystoreLogo} className={styles.logosContainer} />
        </div>
      </div>
      <img src={TryBexLogo} className={styles.imageContainer}/>
    </div>
  );
};

export { TryBex };
