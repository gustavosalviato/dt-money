import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { TransactionsContainer, TableContainer, PriceHightlight } from "./styles"

export const Transactions = () => {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <InputSearch />


                <TableContainer>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHightlight variant="income">
                                    R$ 12.000,00
                                </PriceHightlight>

                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Alimentação</td>
                            <td>
                                <PriceHightlight variant="outcome">
                                    - R$ 12.000,00
                                </PriceHightlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TableContainer>
            </TransactionsContainer>

        </div>
    )
}