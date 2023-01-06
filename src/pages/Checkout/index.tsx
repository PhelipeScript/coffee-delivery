import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressContainer,
  BuildingNumberInput,
  CityInput,
  ComplementInput,
  CompleteOrderContainer,
  InputsContainer,
  NeighborhoodInput,
  PaymentContainer,
  PaymentsLabel,
  StateInput,
  StreetInput,
  ZIPCodeInput,
} from './styles'

export function Checkout() {
  return (
    <form>
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
              name="ZIPCode"
              required
            />
            <StreetInput type="text" placeholder="Rua" name="Street" required />
            <BuildingNumberInput
              type="number"
              placeholder="Número"
              name="BuildingNumber"
              required
            />
            <ComplementInput
              type="text"
              placeholder="Complemento"
              name="Complement"
            />
            <NeighborhoodInput
              type="text"
              placeholder="Bairro"
              name="Neighborhood"
              required
            />
            <CityInput type="text" placeholder="Cidade" name="City" required />
            <StateInput type="text" placeholder="UF" name="State" required />
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
                value="CreditCard"
                name="FormOfPayment"
                required
              />
            </PaymentsLabel>

            <PaymentsLabel htmlFor="DebitCard">
              <Bank size={16} color="#8047F8" />
              Cartão de débito
              <input
                type="radio"
                id="DebitCard"
                value="DebitCard"
                name="FormOfPayment"
                required
              />
            </PaymentsLabel>

            <PaymentsLabel htmlFor="Money">
              <Money size={16} color="#8047F8" />
              Dinheiro
              <input
                type="radio"
                id="Money"
                value="Money"
                name="FormOfPayment"
                required
              />
            </PaymentsLabel>
          </InputsContainer>
        </PaymentContainer>
      </CompleteOrderContainer>
    </form>
  )
}
