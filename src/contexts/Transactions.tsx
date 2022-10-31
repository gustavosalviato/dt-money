import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";



interface Transaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}


interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TrasanctionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TrasanctionProvider = ({ children }: TrasanctionProviderProps) => {
  const [transactions, setTrasactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })


    setTrasactions(response.data)
  }


  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useContextTrasaction = () => useContext(TransactionsContext)