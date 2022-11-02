import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface newTransaction {
  description: string
  category: string
  type: 'income' | 'outcome'
  price: number
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  addNewTransaction: (data: newTransaction) => Promise<void>
}

interface TrasanctionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TrasanctionProvider = ({ children }: TrasanctionProviderProps) => {
  const [transactions, setTrasactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {

    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTrasactions(response.data)

  }, [])

  const addNewTransaction = useCallback(async (data: newTransaction) => {
    const { category, description, price, type } = data

    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTrasactions((state) => [response.data, ...state])
  }, [])


  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        addNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useContextTrasaction = () => useContext(TransactionsContext)
