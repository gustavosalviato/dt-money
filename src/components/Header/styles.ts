import styled, { ThemeProvider } from "styled-components"

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme["gray-900"]};
    padding: 4.0rem 0 12.0rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2.4rem;

`

export const NewTransactionButton = styled.button`
    color: ${props => props.theme.white};
    background: ${props => props.theme["green-500"]};
    border: none;
    
    padding: 1.2rem 2rem;
    border-radius: 6px; 
    transition: 0.4s;
    font-weight: 700;

    &:hover{
        background: ${props => props.theme["green-300"]};    }
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme["gray-100"]}
`