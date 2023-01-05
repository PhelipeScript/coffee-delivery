import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

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
            <Minus cursor="pointer" size={14} weight="bold" />
            <input defaultValue={1} type="number" min={1} max={99} />
            <Plus cursor="pointer" size={14} weight="bold" />
          </div>

          <AddCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCartButton>
        </AmountContainer>
      </ItemPriceContainer>
    </CardContainer>
  )
}
