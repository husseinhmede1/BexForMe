/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./thirdContainer.module.css";

import ControlLogo from "../../assets/Control-img/Control-img.webp";
import SignLogo from "../../assets/Sign/Sign.webp";

interface Props {
  t: any;
}

const ThirdContainer = (props: Props) => {
  const { t } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {t("BEX_HANDLES").toUpperCase()}
        <br></br>
        {t("HARD_STUFF").toUpperCase()}
      </h1>
      <div className={styles.row}>
        <div className={styles.numbersDiv}>
          <div className={styles.row}>
            <div
              className={styles.numberContainer}
              style={{ border: "solid 1px #30c6c6" }}
            >
              <p className={styles.numberText} style={{ color: "#30c6c6" }}>
                1
              </p>
            </div>
            <p
              className={styles.numberTitle}
              style={{ color: "#30c6c6", margin: 15 }}
            >
              {t("CONTROL")}
            </p>
          </div>
          <div className={styles.dottedDivider} />
          <div className={styles.row}>
            <div
              className={styles.numberContainer}
              style={{ border: "solid 1px #ffffff" }}
            >
              <p className={styles.numberText} style={{ color: "#838383" }}>
                2
              </p>
            </div>
            <p
              className={styles.numberTitle}
              style={{ color: "#838383", margin: 15 }}
            >
              {t("SPEND")}
            </p>
          </div>
          <p className={styles.digitizeYourExpensePolicy}>
            {t("DIGITIZE_YOUR_EXPENSE_POLICY").toUpperCase()}
          </p>
          <div className={styles.row}>
            <img src={SignLogo} style={{ objectFit: "contain" }} />
            <p className={styles.setYourSpendingPolicies}>
              {t("SET_YOUR_SPENDING_POLICIES")}
            </p>
          </div>
          <div className={styles.row}>
            <img src={SignLogo} style={{ objectFit: "contain" }} />
            <p className={styles.setYourSpendingPolicies}>
              {t("APPLY_SPENDING_LIMITS")}
            </p>
          </div>
        </div>
        <img src={ControlLogo} className={styles.imageContainer} />
      </div>
    </div>
  );
};

export { ThirdContainer };
