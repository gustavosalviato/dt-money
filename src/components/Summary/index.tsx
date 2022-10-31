import { ArrowCircleDown, ArrowCircleUp, ArrowCounterClockwise, CurrencyDollar } from "phosphor-react"
import { useContextTrasaction } from "../../contexts/Transactions"
import { formatPrice } from "../../helpers/formatPrice"
import { useSummary } from "../../hooks/useSummary"
import { SummaryCard, SummaryContainer } from "./styles"

export const Summary = () => {

    const summary = useSummary()

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