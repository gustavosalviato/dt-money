import { InputContainer, SearchInput, ButtonSearch } from "./styles"
import { MagnifyingGlass } from 'phosphor-react'

export const InputSearch = () => {
    return (
        <InputContainer>
            <SearchInput type="text" placeholder="Busque um transação" />
            <ButtonSearch>
                <MagnifyingGlass size={20} />
                Buscar
            </ButtonSearch>
        </InputContainer>
    )
}