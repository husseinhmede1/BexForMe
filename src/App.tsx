import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ConfigProvider, Spin } from "antd";
import { useTranslation } from "react-i18next";
import { usePromiseTracker } from "react-promise-tracker";

import { RootState } from "&store/store";
import "./App.css";
import "antd/dist/antd.css";
import { AppRouter } from "./App.router";

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps) => {
  const { i18n } = useTranslation();
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {}, [i18n.language]);

  return (
    <ConfigProvider direction={i18n.dir()}>
      <AppRouter />
      <Spin spinning={promiseInProgress} />
    </ConfigProvider>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRedux = connector(App);

export { AppRedux as App };
