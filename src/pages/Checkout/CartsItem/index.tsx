import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'

import arabe from '../../../assets/coffees/arabe.svg'
import {
  AmountAndDeleteContainer,
  AmountContainer,
  DeleteContainer,
  ItemContainer,
} from './styles'

export function CartsItem() {
  const [amount, setAmount] = useState(1)

  function handleIncreaseAmount() {
    setAmount((state) => (state < 99 ? state + 1 : state))
  }

  function handleDecreaseAmount() {
    setAmount((state) => (state > 1 ? state - 1 : state))
  }

  return (
    <ItemContainer>
      <img src={arabe} alt="imagem do cafe" />
      <div>
        <h3>Expresso Tradicional</h3>
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
          <DeleteContainer>
            <Trash color="#8047F8" size={16} />
            Remover
          </DeleteContainer>
        </AmountAndDeleteContainer>
      </div>
      <strong>R$ {(9.9 * amount).toFixed(2)}</strong>
    </ItemContainer>
  )
}
