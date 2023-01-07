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

export function Success() {
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
                Entrega em <strong> Rua João Daniel Martinelli, 102 </strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                Pagamento na entrega <br /> <strong> Cartão de Crédito </strong>
              </p>
            </div>
          </DetailsContainer>
        </BorderContainer>
        <img src={motoboyIllustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
