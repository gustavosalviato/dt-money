import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'


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


            &:hover{
            background-color: ${props => props.theme["green-700"]};;
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