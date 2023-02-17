import { Pie, PieChart, Legend } from "recharts";

interface BasePieChartProps {
  data: { name: string; value: number; fill: string }[];
  width?: number;
  height?: number;
}

const BasePieChart = ({ data, width = 200, height = 200 }: BasePieChartProps) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        outerRadius={50}
        fill='#8884d8'
      />
      <Legend height={36} />
    </PieChart>
  );
};

export default BasePieChart;
