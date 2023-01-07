import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'

import {
  AddCartButton,
  AmountContainer,
  CardContainer,
  ItemPriceContainer,
  ItemTag,
  TagsContainer,
} from './styles'

interface ItemCardProps {
  item: {
    id: string
    imageURL: string
    tags: string[]
    description: string
    price: string
  }
}

export function ItemCard({ item }: ItemCardProps) {
  const [amount, setAmount] = useState(1)

  function handleIncreaseAmount() {
    setAmount((state) => (state < 99 ? state + 1 : state))
  }

  function handleDecreaseAmount() {
    setAmount((state) => (state > 1 ? state - 1 : state))
  }

  return (
    <CardContainer>
      <img src={item.imageURL} alt="" />
      <TagsContainer>
        {item.tags.map((tag) => {
          return <ItemTag key={tag}>{tag}</ItemTag>
        })}
      </TagsContainer>
      <h3>{item.id}</h3>
      <p>{item.description}</p>
      <ItemPriceContainer>
        <span>
          R$ <strong>{item.price}</strong>
        </span>
        <AmountContainer>
          <div>
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
          </div>

          <AddCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCartButton>
        </AmountContainer>
      </ItemPriceContainer>
    </CardContainer>
  )
}
