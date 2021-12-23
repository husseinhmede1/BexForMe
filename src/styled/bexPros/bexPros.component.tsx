/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./bexPros.module.css";

import SignTwoLogo from "&assets/Sign_2/Sign.webp";
import SaveLogo from "&assets/Save-img/Save-img.webp";
import SaveLogoTwo from "&assets/save-img_2/save-img.webp";

interface Props {}

const BexPros = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.titleRow}>
          <div className={styles.circle}>
            <p className={styles.numberText}>3</p>
          </div>
          <p className={styles.saveText}>{t("SAVE")}</p>
        </div>
        <p className={styles.timeIsMoney}>
          {t("TIME_IS_MONEY").toUpperCase()}
          <br></br>
          {t("SAVE_BOTH").toUpperCase()}
        </p>
        <div>
          <div className={styles.row}>
            <img src={SignTwoLogo} className={styles.imageObjectFit} />
            <p className={styles.signText}>{t("DIGITIZE_YOUR_BUSINESS")}</p>
          </div>
          <div className={styles.row}>
            <img src={SignTwoLogo} className={styles.imageObjectFit} />
            <p className={styles.signText}>{t("IDENTIDY_WASTEFUL_SPEND")}</p>
          </div>
        </div>
      </div>
      <img
        src={window.innerWidth > 768 ? SaveLogo : SaveLogoTwo}
        className={styles.imageContainer}
      />
    </div>
  );
};

export { BexPros };
