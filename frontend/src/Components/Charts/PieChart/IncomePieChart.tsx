import { PieChartColors } from "./constants";
import { useAppSelector } from "../../../hooks";
import { getIncomeCategoryValueMap } from "../../../redux/slices/playerSlice";
import { useMemo } from "react";
import BasePieChart from "./BasePieChart";

const IncomePieChart = () => {
  const incomeCategoryValueMap = useAppSelector(getIncomeCategoryValueMap);

  console.log(incomeCategoryValueMap);

  const data = useMemo(
    () =>
      Object.keys(incomeCategoryValueMap).map((key, index) => {
        return {
          name: key,
          value: incomeCategoryValueMap[key],
          fill: PieChartColors[index],
        };
      }),
    [incomeCategoryValueMap]
  );

  return <BasePieChart data={data} />;
};

export default IncomePieChart;
