import { TransactionType } from "@prisma/client";
import type { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex justify-between items-center">
      {/* Icone */}
      <div className="flex itens-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="font-bold">{value}</p>
    </div>
  );
};

export default PercentageItem;
