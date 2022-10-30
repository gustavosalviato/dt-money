import { NewTransactionButton, HeaderContainer, HeaderContent, Title } from "./styles"
import logoImg from '../../assets/logo.png'

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Title>DT Money</Title>

                <NewTransactionButton>Nova Transação
                </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer >
    )
}