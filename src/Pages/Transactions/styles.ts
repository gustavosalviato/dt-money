import styled from "styled-components";


export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 6.4rem auto 0;
    padding: 0 2.4rem;
`

export const TableContainer = styled.table`
    width: 100%;
    margin-top: 2.4rem;
    border-collapse: separate;
    border-spacing: 0 0.8rem;


    td {
      padding: 2.4rem 3.2rem;
        background: ${props => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHightlightProps {
    variant: 'income' | 'outcome'
}

export const PriceHightlight = styled.span<PriceHightlightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]}
`