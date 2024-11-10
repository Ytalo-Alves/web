"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import type { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDown, TrendingDownIcon, TrendingUpDown, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#FF0000",
  },
};

interface TransactionPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#FF0000",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
  ];
  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={70}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-2 ">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receitas"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-danger"/>}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />

          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investimentos"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
