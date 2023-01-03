import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import {
  CartCounter,
  HeaderContainer,
  LocaleAndCartContainer,
  LocaleContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <LocaleAndCartContainer>
        <LocaleContainer>
          <MapPin size={19} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocaleContainer>
        <button>
          <CartCounter>0</CartCounter>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </LocaleAndCartContainer>
    </HeaderContainer>
  )
}
