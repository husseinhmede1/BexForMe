/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./bexPros.module.css";

import SignTwoLogo from "&assets/Sign_2/Sign.webp";
import SaveLogo from "&assets/Save-img/Save-img.webp";

interface Props {}

const BexPros = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <div>
      <div className={styles.row}>
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
          <img src={SignTwoLogo} style={{ objectFit: "contain" }}/>
          <p className={styles.signText}>{t("DIGITIZE_YOUR_BUSINESS")}</p>
        </div>
        <div className={styles.row}>
          <img src={SignTwoLogo} style={{ objectFit: "contain" }}/>
          <p className={styles.signText}>{t("IDENTIDY_WASTEFUL_SPEND")}</p>
        </div>
      </div>
      </div>
      <img src={SaveLogo} style={{ objectFit: "contain", marginLeft: "11%" }}/>
    </div>
  );
};

export { BexPros };
