import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Overlay, Content, Close, TransactionGrid, TransactionTypeButton } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

enum TransactionsTypes {
    income = 'income',
    outcome = 'outcome'
}

const TransactionFormValidationSchema = zod.object({
    description: zod.string().min(1),
    price: zod.number(),
    category: zod.string().min(1),
    transactionType: zod.nativeEnum(TransactionsTypes, {
        errorMap: () => {
            return { message: 'Informe o tipo de transação' }
        }
    })
})

type TransactionFormData = zod.infer<typeof TransactionFormValidationSchema>

export const NewTransactionModal = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<TransactionFormData>({
        resolver: zodResolver(TransactionFormValidationSchema)
    })

    const handleCreateNewTransaction = async (data: TransactionFormData) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <Close>
                        <X size={24} />
                    </Close>

                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input type="text" placeholder='Descrição' required {...register('description')} />
                        <input type="number" placeholder='Preço' required  {...register('price', { valueAsNumber: true })} />
                        <input type="text" placeholder='Categoria' required {...register('category')} />

                        <button type='submit'>Cadastrar</button>

                        <TransactionGrid>
                            <TransactionTypeButton variant='income' value='income' {...register('transactionType')} >
                                <ArrowCircleUp size={24} />
                                Entradas
                            </TransactionTypeButton>

                            <TransactionTypeButton variant='outcome' value='outcome'  {...register('transactionType')}>
                                <ArrowCircleDown size={24} />
                                Saída
                            </TransactionTypeButton>
                        </TransactionGrid>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal >
    )
}

