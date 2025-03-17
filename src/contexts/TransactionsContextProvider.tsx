import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

import { TransactionsContext } from "./TransactionsContext";

interface Transaction {
  id: number
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
  createdAt: string
}

export type TransactionsContextType = {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransaction) => Promise<void>
}

interface CreateTransaction {
  id?: number
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
  createdAt?: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsContextProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query
        }
      })
      setTransactions(response.data)
    },
    []
  )

  //async function createTransaction(data: CreateTransaction) {
  const createTransaction = useCallback(
    async (data: CreateTransaction) => {
      //const { description, category, price, type, createdAt } = data
      const response = await api.post('/transactions', {
        // description: data.description,
        // category: data.category,
        // price: data.price,
        // type: data.type,
        // ...data,
        // description,
        // category,
        // price,
        // type,
        // createdAt: new Date().toISOString()
        ...data, createdAt: new Date().toISOString()
      })
      setTransactions(state => [...state, response.data])
    },
    []
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
