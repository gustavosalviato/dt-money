import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 51.2rem;
    border-radius: 6px;
    padding: 4rem 4.8rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    form{
        margin-top: 3.2rem;

        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        input{
            padding: 1.6rem;
            border-radius: 6px;
            background-color: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};
            border: 0;

            &::placeholder{
                color: ${props => props.theme["gray-500"]};

            }
        }


        button[type="submit"]{
            height: 5.4rem;
            color: ${props => props.theme.white};
            border: 0;
            padding: 1.6rem;
            background-color: ${props => props.theme["green-500"]};;
            font-weight: 700;
            border-radius: 6px;
            transition: 0.4s;

            &:disabled{
                opacity: 0.7;
                cursor: not-allowed;
            }

            &:not(:disabled):hover{
                background-color: ${props => props.theme["green-700"]};
            }
        }  
    }
`

export const Close = styled(Dialog.Close)`
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    background-color: transparent;
    border: 0;
    color: ${props => props.theme["gray-500"]};
    font-size: 0;
`

export const TransactionGrid = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
    margin-top: 0.8rem;
`

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
    padding: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-300"]};
    border: 0;
    gap: 0.8rem;


    svg{
        color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]}
    }

    &[data-state="checked"]{
        color: ${props => props.theme.white};
        background-color: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};

        
        svg{
            color: ${props => props.theme.white}
        }
    }

    &[data-state='unchecked']:hover {
      background: ${props => props.theme["gray-600"]};
  }

`