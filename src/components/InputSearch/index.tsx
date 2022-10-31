import { InputContainer, SearchInput, ButtonSearch } from "./styles"
import { CodesandboxLogo, MagnifyingGlass } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'


const QueryFormValidationSchema = zod.object({
    query: zod.string()
})

type SearchFormInput = zod.infer<typeof QueryFormValidationSchema>


export const InputSearch = () => {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
        resolver: zodResolver(QueryFormValidationSchema)
    })

    const handleSearchTransaction = async (data: SearchFormInput) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
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