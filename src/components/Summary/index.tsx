import { ArrowCircleDown, ArrowCircleUp, ArrowCounterClockwise, CurrencyDollar } from "phosphor-react"
import { useContextTrasaction } from "../../contexts/Transactions"
import { formatPrice } from "../../helpers/formatPrice"
import { SummaryCard, SummaryContainer } from "./styles"

export const Summary = () => {
    const { transactions } = useContextTrasaction()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.price
            acc.total += transaction.price
        } else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }

        return acc
    }, {
        income: 0,
        outcome: 0,
        total: 0,
    })

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E" />
                </header>

                <strong>{formatPrice.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68" />
                </header>

                <strong>{formatPrice.format((summary.outcome))}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFFFFF" />
                </header>

                <strong>{formatPrice.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}