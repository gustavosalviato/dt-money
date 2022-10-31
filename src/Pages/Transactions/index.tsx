import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { useContextTrasaction } from "../../contexts/Trasactions"
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

    const { transactions } = useContextTrasaction()
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