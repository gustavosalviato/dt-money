import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { useContextTrasaction } from "../../contexts/Transactions"
import { TransactionsContainer, TableContainer, PriceHightlight } from "./styles"
import { dateFormatter, formatPrice } from "../../helpers/formatPrice"
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
                                        {item.type === 'outcome' && '- '}
                                        {formatPrice.format(item.price)}
                                    </PriceHightlight>

                                </td>
                                <td>{item.category}</td>
                                <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                            </tr>
                        ))}

                    </tbody>
                </TableContainer>
            </TransactionsContainer>

        </div>
    )
}