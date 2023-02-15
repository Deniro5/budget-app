import { Pie, PieChart, Legend } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

const BasePieChart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data01}
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
