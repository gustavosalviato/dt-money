import styled, { css } from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -8rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.section<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1.2rem;
    font-size: 3.2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${(props) => props.theme['green-700']};
    `}
`
