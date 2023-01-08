import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CartsItem } from './CartsItem'

import {
  AddressContainer,
  BuildingNumberInput,
  ButtonContainer,
  CityInput,
  ComplementInput,
  CompleteOrderContainer,
  ConfirmOrderContainer,
  FormContainer,
  InputsContainer,
  NeighborhoodInput,
  PaymentContainer,
  PaymentsLabel,
  PriceContainer,
  SelectedCoffeesContainer,
  StateInput,
  StreetInput,
  ZIPCodeInput,
} from './styles'
import { useContext, useEffect } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

const newOrderFormValidationSchema = zod.object({
  ZIPCode: zod
    .string()
    .min(8, 'Informe um CEP válido')
    .max(8, 'Informe um CEP válido'),
  Street: zod.string().min(1, 'Informe o nome da Rua'),
  BuildingNumber: zod.string().min(1, 'Informe o número da sua casa'),
  Complement: zod.string().optional(),
  Neighborhood: zod.string().min(1, 'Informe o Bairro'),
  City: zod.string().min(1, 'Informe a Cidade'),
  State: zod
    .string()
    .min(2, 'Informe a sigla do seu Estado')
    .max(2, 'Informe a sigla do seu Estado'),
  FormOfPayment: zod.string({
    invalid_type_error: 'Escolha a Forma de Pagamento',
  }),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { itemsCart, clearCart } = useContext(OrderContext)

  const { register, handleSubmit, formState, reset } =
    useForm<NewOrderFormData>({
      resolver: zodResolver(newOrderFormValidationSchema),
      defaultValues: {
        ZIPCode: '',
        Street: '',
        BuildingNumber: '',
        Complement: '',
        Neighborhood: '',
        City: '',
        State: '',
        FormOfPayment: undefined,
      },
    })

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
    reset()
    clearCart()
  }

  useEffect(() => {
    const errors = Object.keys(formState.errors)

    switch (errors[0]) {
      case 'ZIPCode':
        window.alert(formState.errors.ZIPCode?.message)
        break
      case 'Street':
        window.alert(formState.errors.Street?.message)
        break
      case 'BuildingNumber':
        window.alert(formState.errors.BuildingNumber?.message)
        break
      case 'Complement':
        window.alert(formState.errors.Complement?.message)
        break
      case 'Neighborhood':
        window.alert(formState.errors.Neighborhood?.message)
        break
      case 'City':
        window.alert(formState.errors.City?.message)
        break
      case 'State':
        window.alert(formState.errors.State?.message)
        break
      case 'FormOfPayment':
        window.alert(formState.errors.FormOfPayment?.message)
        break
    }
  }, [formState.errors])

  const deliveryFee = itemsCart.length === 0 ? 0.0 : 3.5
  const itemsTotalPrice = itemsCart.reduce(
    (prevVal, elem) => prevVal + elem.price * elem.amount,
    0,
  )

  const isSubmitButtonDisabled = itemsCart.length === 0

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <CompleteOrderContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <h3>
            <MapPinLine color="#C47F17" size={22} />
            Endereço de Entrega
          </h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <InputsContainer>
            <ZIPCodeInput
              type="number"
              placeholder="CEP"
              {...register('ZIPCode')}
            />

            <StreetInput
              type="text"
              placeholder="Rua"
              {...register('Street')}
            />

            <BuildingNumberInput
              type="number"
              placeholder="Número"
              {...register('BuildingNumber')}
            />

            <ComplementInput
              type="text"
              placeholder="Complemento"
              {...register('Complement')}
            />

            <NeighborhoodInput
              type="text"
              placeholder="Bairro"
              {...register('Neighborhood')}
            />

            <CityInput type="text" placeholder="Cidade" {...register('City')} />

            <StateInput type="text" placeholder="UF" {...register('State')} />
          </InputsContainer>
        </AddressContainer>

        <PaymentContainer>
          <h3>
            <CurrencyDollar color="#8047F8" size={22} />
            Pagamento
          </h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <InputsContainer>
            <PaymentsLabel htmlFor="CreditCard">
              <CreditCard size={16} color="#8047F8" />
              Cartão de crédito
              <input
                type="radio"
                id="CreditCard"
                value="Cartão de Crédito"
                {...register('FormOfPayment')}
              />
            </PaymentsLabel>

            <PaymentsLabel htmlFor="DebitCard">
              <Bank size={16} color="#8047F8" />
              Cartão de débito
              <input
                type="radio"
                id="DebitCard"
                value="Cartão de Débito"
                {...register('FormOfPayment')}
              />
            </PaymentsLabel>

            <PaymentsLabel htmlFor="Money">
              <Money size={16} color="#8047F8" />
              Dinheiro
              <input
                type="radio"
                id="Money"
                value="Dinheiro"
                {...register('FormOfPayment')}
              />
            </PaymentsLabel>
          </InputsContainer>
        </PaymentContainer>
      </CompleteOrderContainer>

      <SelectedCoffeesContainer>
        <h2>Cafés selecionados</h2>
        <ConfirmOrderContainer>
          {itemsCart.map((item) => {
            return (
              <CartsItem
                key={item.id}
                name={item.id}
                amount={item.amount}
                image={item.imageURL}
                price={item.price}
              />
            )
          })}

          <PriceContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ {itemsTotalPrice.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {(itemsTotalPrice + deliveryFee).toFixed(2)}</strong>
            </div>
          </PriceContainer>

          <ButtonContainer disabled={isSubmitButtonDisabled}>
            confirmar pedido
          </ButtonContainer>
        </ConfirmOrderContainer>
      </SelectedCoffeesContainer>
    </FormContainer>
  )
}
