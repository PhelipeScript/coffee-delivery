import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeIllustration from '../../assets/coffee-illustration.svg'
import {
  BackgroundIconCart,
  BackgroundIconCoffee,
  BackgroundIconPackage,
  BackgroundIconTimer,
  Benefit,
  BenefitsListContainer,
  HomeContainer,
  SloganContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <SloganContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BenefitsListContainer>
            <li>
              <Benefit>
                <BackgroundIconCart>
                  <ShoppingCart size={16} weight="fill" />
                </BackgroundIconCart>
                <span>Compra simples e segura</span>
              </Benefit>
              <Benefit>
                <BackgroundIconTimer>
                  <Timer size={16} weight="fill" />
                </BackgroundIconTimer>
                <span>Entrega rápida e rastreada</span>
              </Benefit>
            </li>
            <li>
              <Benefit>
                <BackgroundIconPackage>
                  <Package size={16} weight="fill" />
                </BackgroundIconPackage>
                <span>Embalagem mantém o café intacto</span>
              </Benefit>
              <Benefit>
                <BackgroundIconCoffee>
                  <Coffee size={16} weight="fill" />
                </BackgroundIconCoffee>
                <span>O café chega fresquinho até você</span>
              </Benefit>
            </li>
          </BenefitsListContainer>
        </div>
        <img src={coffeeIllustration} alt="" />
      </SloganContainer>
    </HomeContainer>
  )
}
