import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { formatPrice } from "../../helpers/formatPrice"
import { TransactionsContainer, TableContainer, PriceHightlight } from "./styles"

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}


export const Transactions = () => {
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
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <InputSearch />


                <TableContainer>
                    <tbody>
                        {transactions.map((item) => (
                            <tr key={item.id}>
                                <td width="50%">{item.description}</td>
                                <td>
                                    <PriceHightlight variant={item.type}>
                                        {`R$ ${formatPrice(item.price)}`}
                                    </PriceHightlight>

                                </td>
                                <td>{item.category}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        ))}

                    </tbody>
                </TableContainer>
            </TransactionsContainer>

        </div>
    )
}