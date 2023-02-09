import React from "react";
import { DashboardGrid } from "../Components/DashboardGrid";
import { DateChanger } from "../Components/DateChanger";

export type IDashboardProps = {};

const Dashboard: React.FC<IDashboardProps> = ({}) => {
  return (
    <>
      <DateChanger />
      <DashboardGrid />
    </>
  );
};

export { Dashboard };
