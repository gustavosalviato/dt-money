import styled from "styled-components";

export const InputContainer = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    width: 100%;
    margin-top:6.4rem;
    padding: 1.6rem;
    gap: 1.6rem;
    align-items: center;
`

export const SearchInput = styled.input`
    height: 100%;
    border: 0;
    outline: 0;
    flex: 1;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme.white};
    padding: 1.6rem;    
    border-radius: 6px;

    &::placeholder{
        color: ${props => props.theme["gray-500"]};
    }

`

export const ButtonSearch = styled.button`
    width: 15rem;
    height: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    font-weight: 700;
    padding: 1.6rem;
    color: ${props => props.theme["green-300"]};
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem; 
    border: 1px solid ${props => props.theme["green-300"]};
    transition: 0.4s;

    &:hover{
        color: ${props => props.theme.white};
        background-color: ${props => props.theme["green-300"]};
    }

`