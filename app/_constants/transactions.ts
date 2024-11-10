import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { Value } from "@radix-ui/react-select";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTRATAIMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Credito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "others.svg",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesas",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
]

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
  value: TransactionPaymentMethod.BANK_TRANSFER,
  label: "Transferência Bancaria"
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: 'Boleto Bancário'
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: 'Dinheiro'
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: 'Cartão de Crédito'
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: 'Cartão de Debito'
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: 'PIX'
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: 'Outros'
  }
]

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
    },
    {
      value: TransactionCategory.ENTRATAIMENT,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTRATAIMENT]
    },
    {
      value: TransactionCategory.FOOD,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD]
    },
    {
      value: TransactionCategory.HEALTH,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH]
    },
    {
      value: TransactionCategory.OTHER,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER]
    },
    {
      value: TransactionCategory.SALARY,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY]
    },
    {
      value: TransactionCategory.TRANSPORTATION,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION]
    },
    {
      value: TransactionCategory.UTILITY,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY]
    },
    {
      value: TransactionCategory.HOUSING,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING]
    }
  ]