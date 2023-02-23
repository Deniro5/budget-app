import { Pie, PieChart, Legend, Cell, Tooltip } from "recharts";
import type { Props } from "recharts/types/component/DefaultLegendContent";
import styled from "styled-components";
import { ReactNode } from "react";

interface BasePieChartProps {
  data: { name: string; value: number; fill: string }[];
  width?: number;
  height?: number;
}

interface renderCustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const BasePieChart = ({ data, width = 220, height = 220 }: BasePieChartProps) => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: renderCustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <StyledLabel
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </StyledLabel>
    );
  };

  const renderLegend = (props: Props): ReactNode => {
    const { payload } = props;
    if (!payload) return;
    return (
      <LegendContainer>
        {payload.reverse().map((entry, index) => (
          <LegendRow key={`item-${index}`}>
            <LegendBullet color={entry.color || ""} />
            <LegendText>{entry.value}</LegendText>
          </LegendRow>
        ))}
      </LegendContainer>
    );
  };

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        labelLine={false}
        outerRadius={80}
        fill='#82ca9d'
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip />
      <Legend height={36} content={renderLegend} />
    </PieChart>
  );
};

const StyledLabel = styled.text`
  font-weight: bold;
`;

const LegendContainer = styled.div`
  margin-top: 10px;
  margin-left: 30px;
`;

const LegendRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const LegendBullet = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  height: 9px;
  width: 9px;
  border-radius: 90px;
`;

const LegendText = styled.p`
  margin-left: 10px;
  font-size: 13px;
  max-width: 129px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default BasePieChart;
