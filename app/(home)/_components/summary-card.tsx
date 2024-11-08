import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { WalletIcon } from "lucide-react";
import type { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
}

const SummaryCard = ({ icon, title, amount }: SummaryCardProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex-row items-center gap-6">
          {icon}
          <p className="text-white opacity-70">{title}</p>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(amount)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCard;
