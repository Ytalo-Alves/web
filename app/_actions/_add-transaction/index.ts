"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { TransactionCategory, type TransactionPaymentMethod, type TransactionType } from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionParams) => {
  // Valida os parâmetros com o schema
  addTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (params.id) {
    // Executa `upsert` se o `id` estiver presente
    await db.transaction.upsert({
      where: {
        id: params.id,
      },
      update: { ...params, userId },
      create: { ...params, userId },
    });
  } else {
    // Executa `create` se o `id` estiver ausente
    await db.transaction.create({
      data: { ...params, userId },
    });
  }

  // Revalida a página após a adição ou atualização
  revalidatePath('/transaction');
};
