/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./packages.module.css";

import SignTwoLogo from "&assets/Sign_2/Sign.webp";

interface Props {}

const Packages = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("OUR_PACKAGES").toUpperCase()}</p>
      <p className={styles.subtitle}>{t("CHOOSE_THE_FEATURES")}</p>
      <div className={styles.row}>
        <div className={styles.packageContainer}>
          <p className={styles.packageTitle}>{t("ESSENTIAL")}</p>
          <p className={styles.packageStartingAt}>{t("STARTING_AT")}</p>
          <div className={styles.packageRow}>
            <p className={styles.packagePriceCurrency}>{t("AED")}</p>
            <p className={styles.packagePrice}>3.00</p>
          </div>
          <p className={styles.packageUserMonth}>{t("USER_MONTH")}</p>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>{t("DIGITAL_ONBOARDING")}</p>
          </div>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>{t("DIGITAL_CARD")}</p>
          </div>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>{t("CARD_CONTROLS")}</p>
          </div>
          <p className={styles.packageStolenCard}>{t("STOLEN_CARD_FEE")}</p>
          <p className={styles.packageStolenCardCurrency}>{t("AED")} 5</p>
          <div
            className={styles.packageButton}
            style={{ backgroundColor: "#306bdd" }}
          >
            <p className={styles.contactUs}>{t("CONTACT_US")}</p>
          </div>
          <p className={styles.packageBenefitDescription}>
            {t("BENEFIT_MESSAGE_ONE")}
            <p className={styles.packageBenefitUsers}>
              {t("UP_TO_FIVE_USERS")}
            </p>
          </p>
        </div>
        <div
          className={styles.packageContainer}
          style={{ height: 509, marginTop: 0 }}
        >
          <p className={styles.packageTitle} style={{ marginTop: 30 }}>
            {t("PRO")}
          </p>
          <p className={styles.packageStartingAt}>{t("STARTING_AT")}</p>
          <div className={styles.packageRow}>
            <p className={styles.packagePriceCurrency}>{t("AED")}</p>
            <p className={styles.packagePrice}>5.00</p>
          </div>
          <p className={styles.packageUserMonth}>{t("USER_MONTH")}</p>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>
              {t("PHYSICAL_CARD_REQUEST")}
            </p>
          </div>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>
              {t("PRIORITY_IN_CALL_CENTER")}
            </p>
          </div>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>
              {t("AUTOMATED_FUND_RELOAD")}
            </p>
          </div>
          <p className={styles.packageStolenCard}>{t("STOLEN_CARD_FEE")}</p>
          <p className={styles.packageStolenCardCurrency}>
            {t("FREE_UP_TO_THREE")}
          </p>
          <div
            className={styles.packageButton}
            style={{ backgroundColor: "#306bdd" }}
          >
            <p className={styles.contactUs}>{t("CONTACT_US")}</p>
          </div>
          <p className={styles.packageBenefitDescription}>
            {t("BENEFIT_MESSAGE_TWO")}
            <p className={styles.packageBenefitUsers}>{t("UP_TO_TEN_USERS")}</p>
          </p>
        </div>
        <div className={styles.packageContainer}>
          <p className={styles.packageTitle}>{t("ENTERPRISE")}</p>
          <p className={styles.packageStartingAt}>{t("STARTING_AT")}</p>
          <div className={styles.packageRow}>
            <p className={styles.packagePriceCurrency}>{t("AED")}</p>
            <p className={styles.packagePrice}>10.00</p>
          </div>
          <p className={styles.packageUserMonth}>{t("USER_MONTH")}</p>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>{t("DEDICATED_SUPPORT_AGENT")}</p>
          </div>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>{t("MULTIPLE_ADMIN_ACCESS")}</p>
          </div>
          <div className={styles.packageBeneftisRow}>
            <img src={SignTwoLogo} style={{ objectFit: "contain" }} />
            <p className={styles.packageBenefits}>{t("MULTIPLE_ENTITY_CONSOLIDATION")}</p>
          </div>
          <p className={styles.packageStolenCard}>{t("STOLEN_CARD_FEE")}</p>
          <p className={styles.packageStolenCardCurrency}>{t("FREE_UP_TO_FIVE")}</p>
          <div
            className={styles.packageButton}
            style={{ backgroundColor: "#306bdd" }}
          >
            <p className={styles.contactUs}>{t("CONTACT_US")}</p>
          </div>
          <p className={styles.packageBenefitDescription}>
            <p className={styles.packageBenefitUsers}>
              {t("UNLIMITED")}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Packages };
