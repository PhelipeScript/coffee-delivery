import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'

import {
  AmountAndDeleteContainer,
  AmountContainer,
  DeleteContainer,
  ItemContainer,
} from './styles'

interface CartsItemProps {
  name: string
  image: string
  price: number
  amount: number
}

export function CartsItem({ name, image, price, amount }: CartsItemProps) {
  const {
    removeItemFromCart,
    increaseItemInCartAmount,
    decreaseItemInCartAmount,
  } = useContext(OrderContext)

  function handleIncreaseAmount() {
    increaseItemInCartAmount(name)
  }

  function handleDecreaseAmount() {
    decreaseItemInCartAmount(name)
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(name)
  }

  return (
    <ItemContainer>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <AmountAndDeleteContainer>
          <AmountContainer>
            <Minus
              onClick={handleDecreaseAmount}
              cursor="pointer"
              size={14}
              weight="bold"
            />
            <input readOnly value={amount} type="number" min={1} max={99} />
            <Plus
              onClick={handleIncreaseAmount}
              cursor="pointer"
              size={14}
              weight="bold"
            />
          </AmountContainer>
          <DeleteContainer onClick={handleRemoveItemFromCart}>
            <Trash color="#8047F8" size={16} />
            Remover
          </DeleteContainer>
        </AmountAndDeleteContainer>
      </div>
      <strong>R$ {(price * amount).toFixed(2)}</strong>
    </ItemContainer>
  )
}
