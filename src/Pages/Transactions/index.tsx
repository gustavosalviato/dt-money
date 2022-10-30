import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { TransactionsContainer } from "./styles"

export const Transactions = () => {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <InputSearch />
            </TransactionsContainer>

        </div>
    )
}