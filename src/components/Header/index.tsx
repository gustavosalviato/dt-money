import { NewTransactionButton, HeaderContainer, HeaderContent, Title } from "./styles"
import logoImg from '../../assets/logo.png'
import * as Dialog from '@radix-ui/react-dialog';


export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Title>DT Money</Title>



                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay>
                            <Dialog.Content>
                                <Dialog.Title>Nova Transação</Dialog.Title>

                                <Dialog.Close />
                            </Dialog.Content>
                        </Dialog.Overlay>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer >
    )
}