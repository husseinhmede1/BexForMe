import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./tryBex.module.css";

interface Props {
}

const TryBex = (props: Props) => {
  const { t } = useTranslation(["landing"]);
  return (
    <div className={styles.container}>
      <p className={styles.tryBexForFree}>{t("TRY_BEX_FOR_FREE")}</p>
      <p className={styles.month_users_digital_card_only}>{t("MONTH_USERS_DIGITAL_CARD_ONLY")}</p>
    </div>
  );
};

export { TryBex };
