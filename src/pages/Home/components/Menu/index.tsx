import { ItemCard } from '../ItemCard'
import { Coffees } from './Coffees'
import { ItensContainer, MenuContainer } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <h2>Nossos cafés</h2>
      <ItensContainer>
        {Coffees.map((coffee) => {
          return <ItemCard key={coffee.id} item={coffee} />
        })}
      </ItensContainer>
    </MenuContainer>
  )
}
