import {
  BorderContainer,
  DetailsContainer,
  MapBackground,
  PaymentBackground,
  SuccessContainer,
  TimerBackground,
} from './styles'

import motoboyIllustration from '../../assets/motoboy-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Success() {
  const { orders } = useContext(OrderContext)

  const currentOrder = orders[orders.length - 1]

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <BorderContainer>
          <DetailsContainer>
            <div>
              <MapBackground>
                <MapPin size={16} weight="fill" />
              </MapBackground>
              <p>
                Entrega em{' '}
                <strong>
                  {currentOrder.address.Street},{' '}
                  {currentOrder.address.BuildingNumber}{' '}
                  {currentOrder.address.Complement}
                </strong>
                <br />
                {currentOrder.address.Neighborhood} -{' '}
                {currentOrder.address.City},{' '}
                {currentOrder.address.State.toUpperCase()}
              </p>
            </div>

            <div>
              <TimerBackground>
                <Timer size={16} weight="fill" />
              </TimerBackground>
              <p>
                Previsão de entrega <br /> <strong> 20 min - 30 min </strong>
              </p>
            </div>

            <div>
              <PaymentBackground>
                <CurrencyDollar size={16} weight="fill" />
              </PaymentBackground>
              <p>
                Pagamento na entrega <br />
                <strong> {currentOrder.address.FormOfPayment} </strong>
              </p>
            </div>
          </DetailsContainer>
        </BorderContainer>
        <img src={motoboyIllustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
