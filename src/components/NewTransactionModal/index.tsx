import { useContextSelector } from "use-context-selector";
import { Dialog } from "radix-ui";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { IconTitles } from "../../utils/enums";

import { IconWrapper } from "../IconWrapper";

import { CloseButton, Content, Overlay, TransactionType } from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z
    .string()
    .refine(
      (val) => /^\d+(\.\d{1,2})?$/.test(val),
      'Formato de moeda inválido. Use números com até duas casas decimais.'
    )
    .transform((val) => parseFloat(val)),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  let transactionType = watch('type')
  if (transactionType === undefined)
    transactionType = 'income'

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { category, description, price, type } = data
    createTransaction({
      category,
      description,
      price,
      type,
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild>
        <Overlay />
      </Dialog.Overlay>
      <Dialog.Content asChild>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <Dialog.Close asChild>
            <CloseButton>
              <IconWrapper icon={<X size={24} />} title={IconTitles.X} />
            </CloseButton>
          </Dialog.Close>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Preço"
              min={0.01}
              step={0.01}
              required
              {...register('price')}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />
            <div>
              <TransactionType $variant="income">
                <input
                  type="radio"
                  value="income"
                  checked={transactionType === 'income'}
                  {...register('type')}
                />
                <IconWrapper icon={<ArrowCircleUp size={24} />} title={IconTitles.ArrowCircleUp} />
                Entrada
              </TransactionType>
              <TransactionType $variant="outcome">
                <input
                  type="radio"
                  value="outcome"
                  checked={transactionType === 'outcome'}
                  {...register('type')}
                />
                <IconWrapper icon={<ArrowCircleDown size={24} />} title={IconTitles.ArrowCircleDown} />
                Saída
              </TransactionType>
            </div>
            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
          </form>
        </Content>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
