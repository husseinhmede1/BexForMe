/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./weAreBex.module.css";

import WeAreBexLogo from "&assets/Mask Group 2/Mask Group 545.webp";
import AreebaText from "&assets/areeba-white/areeba-white.webp";
import MasterCardText from "&assets/Mastercard-Txt/Mastercard-Txt.webp";

interface Props {}

const WeAreBex = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.weAreBex}>{t("WE_ARE_BEX")}</p>
        <p className={styles.weAreBexFirstText}>{t("WE_ARE_BEX_FIRST_TEXT")}</p>
        <img src={WeAreBexLogo} className={styles.imageContainer} />
      </div>
      <div className={styles.spaceContainer}>
        <img src={AreebaText} className={styles.areebaTextContainer} />
        <p className={styles.weAreBexSecondText}>
          {t("WE_ARE_BEX_SECOND_TEXT")}
          <a className={styles.areebaWebsite}>www.areeba.com</a>
        </p>
        <img src={MasterCardText} className={styles.areebaTextContainer} />
        <p className={styles.weAreBexSecondText}>
          {t("WE_ARE_BEX_THIRD_TEXT")}
          <a className={styles.areebaWebsite}>www.mastercard.com</a>
        </p>
      </div>
    </div>
  );
};

export { WeAreBex };
