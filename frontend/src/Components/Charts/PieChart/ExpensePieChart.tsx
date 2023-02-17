import { PieChartColors } from "./constants";
import { useAppSelector } from "../../../hooks";
import { getExpenseCategoryValueMap } from "../../../redux/slices/playerSlice";
import { useMemo } from "react";
import BasePieChart from "./BasePieChart";

const ExpensePieChart = () => {
  const expenseCategoryValueMap = useAppSelector(getExpenseCategoryValueMap);

  const data = useMemo(
    () =>
      Object.keys(expenseCategoryValueMap).map((key, index) => {
        return {
          name: key,
          value: expenseCategoryValueMap[key],
          fill: PieChartColors[index],
        };
      }),
    [expenseCategoryValueMap]
  );

  return <BasePieChart data={data} />;
};

export default ExpensePieChart;
