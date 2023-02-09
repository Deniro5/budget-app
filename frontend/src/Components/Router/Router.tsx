import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { Dashboard } from "../../Pages/Dashboard";
import { Goals } from "../../Pages/Goals";
import { Settings } from "../../Pages/Settings";
import { Transactions } from "../../Pages/Transactions";
import { View } from "../../types";

const routerMap = {
  [View.DASHBOARD]: <Dashboard />,
  [View.SETTINGS]: <Settings />,
  [View.GOALS]: <Goals />,
  [View.TRANSACTIONS]: <Transactions />,
};

const Router = ({}) => {
  const currentView = useAppSelector((state) => state.player.currentView);
  return <div style={{ marginLeft: 200 }}>{routerMap[currentView]}</div>;
};

export { Router };
