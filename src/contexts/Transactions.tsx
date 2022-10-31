import { createContext, ReactNode, useContext, useEffect, useState } from "react";



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
}

interface TrasanctionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TrasanctionProvider = ({ children }: TrasanctionProviderProps) => {
  const [transactions, setTrasactions] = useState<Transaction[]>([])

  const loadTransaction = async () => {
    const response = await fetch('http://localhost:3333/transactions')

    const data = await response.json()

    setTrasactions(data)
  }


  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useContextTrasaction = () => useContext(TransactionsContext)