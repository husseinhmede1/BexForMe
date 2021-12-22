/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "&store/store";
import { FirstContainer } from "&styled/firstContainer/firstContainer/firstContainer.component";
import { SecondContainer } from "&styled/secondContainer/secondContainer.component";
import { ThirdContainer } from "&styled/thirdContainer/thirdContainer.component";

type ReduxProps = ConnectedProps<typeof connector>;

const LandingComponent = (props: ReduxProps) => {
  const { t } = useTranslation(["landing"]);

  useEffect(() => {}, []);

  return (
    <>
    <div>
    <FirstContainer t={t}/>
    <SecondContainer t={t} />
    <ThirdContainer t={t} />
    </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const LandingComponentRedux = connector(LandingComponent);

export { LandingComponentRedux as LandingComponent };
