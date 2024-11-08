import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

const SummaryCards = () => {
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={20000}
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={20} />}
          title="Investido"
          amount={20000}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={20} className="text-primary"/>}
          title="Receitas"
          amount={20000}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={20} className="text-red-500"/>}
          title="Despesas"
          amount={20000}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
