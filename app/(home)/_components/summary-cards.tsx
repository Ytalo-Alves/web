
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCard {
  month: string;
}


const SummaryCards = async ({ month }: SummaryCard) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where,  type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where,  type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount
  );

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={20} />}
          title="Investido"
          amount={investmentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={20} className="text-primary" />}
          title="Receitas"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={20} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;