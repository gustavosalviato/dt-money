import { InputContainer, SearchInput, ButtonSearch } from "./styles"
import { CodesandboxLogo, MagnifyingGlass } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextTrasaction } from "../../contexts/Transactions"


const QueryFormValidationSchema = zod.object({
    query: zod.string()
})

type SearchFormInput = zod.infer<typeof QueryFormValidationSchema>


export const InputSearch = () => {

    const { fetchTransactions } = useContextTrasaction()



    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
        resolver: zodResolver(QueryFormValidationSchema)
    })

    const handleSearchTransaction = async (data: SearchFormInput) => {
        await fetchTransactions(data.query)
    }
    return (
        <InputContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <SearchInput type="text" placeholder="Busque um transação" {...register('query')} />
            <ButtonSearch disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </ButtonSearch>
        </InputContainer>
    )
}