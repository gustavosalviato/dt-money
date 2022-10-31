import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Overlay, Content, Close, TransactionGrid, TransactionTypeButton } from './styles'


export const NewTransactionModal = () => (
    <Dialog.Portal>
        <Overlay>
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <Close>
                    <X size={24} />
                </Close>

                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <button type='submit'>Cadastrar</button>

                    <TransactionGrid>
                        <TransactionTypeButton variant='income'>
                            <ArrowCircleUp size={24} />
                            Entradas
                        </TransactionTypeButton>

                        <TransactionTypeButton variant='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionGrid>
                </form>
            </Content>
        </Overlay>
    </Dialog.Portal>
)