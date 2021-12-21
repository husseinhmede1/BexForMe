import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "&store/store";

import { landingActions } from "./landing.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const LandingComponent = (props: ReduxProps) => {
  const { t } = useTranslation(["landing"]);

  useEffect(() => {
  }, []);

  return (
    <>
      <h1>{t("UNPROTECTED_LANDING_PAGE")}</h1>
      <a href="#/login">{t("LOG_IN")}</a>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
});

const mapDispatchToProps = {
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const LandingComponentRedux = connector(LandingComponent);

export { LandingComponentRedux as LandingComponent };
