/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./benefits.module.css";

import BenefitsLogo from "&assets/Mask Group/Mask Group 551.webp";

interface Props {}

const Benefits = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <img src={BenefitsLogo} className={styles.imageContainer} />
      <div>
        <p className={styles.benefits}>{t("BENEFITS").toUpperCase()}</p>
        <div className={styles.row}>
          <div className={styles.firstRectangle}>
            <p className={styles.rectangleTitle}>53%</p>
            <p className={styles.rectangleSubTitle}>
              {t("BENEFITS_RECTANGLE_FIRST_TEXT")}
            </p>
          </div>
          <div className={styles.secondRectangle}>
            <p className={styles.blackRectangleTitle}>42%</p>
            <p className={styles.blackRectangleSubTitle}>
              {t("BENEFITS_RECTANGLE_SECOND_TEXT")}
            </p>
          </div>
          <div className={styles.thirdRectangle}>
            <p className={styles.blackRectangleTitle}>47%</p>
            <p className={styles.blackRectangleSubTitle}>
              {t("BENEFITS_RECTANGLE_THIRD_TEXT")}
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.fourthRectangle}>
            <p className={styles.blackRectangleTitle}>63%</p>
            <p className={styles.fourthRectangleSubTitle}>
              {t("BENEFITS_RECTANGLE_FOURTH_TEXT")}
            </p>
          </div>
          <div className={styles.fifthRectangle}>
            <p className={styles.blackRectangleTitle}>68%</p>
            <p className={styles.blackRectangleSubTitle}>
              {t("BENEFITS_RECTANGLE_FIFTH_TEXT")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Benefits };
