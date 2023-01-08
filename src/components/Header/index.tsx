import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import { OrderContext } from '../../contexts/OrderContext'
import {
  CartCounter,
  HeaderContainer,
  LocaleAndCartContainer,
  LocaleContainer,
} from './styles'

export function Header() {
  const { itemsCart } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <LocaleAndCartContainer>
        <LocaleContainer>
          <MapPin size={19} weight="fill" />
          <span>Brazil</span>
        </LocaleContainer>
        <button>
          {itemsCart.length !== 0 ? (
            <CartCounter>{itemsCart.length}</CartCounter>
          ) : (
            <></>
          )}

          <NavLink to="/checkout">
            <ShoppingCart color="#C47F17" size={22} weight="fill" />
          </NavLink>
        </button>
      </LocaleAndCartContainer>
    </HeaderContainer>
  )
}
