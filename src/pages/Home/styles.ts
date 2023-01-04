import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding-top: 5.875rem;
`

export const SloganContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  h1 {
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    margin: 1rem 0 4.125rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const BenefitsListContainer = styled.ul`
  list-style: none;

  display: flex;
  gap: 2.5rem;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-bottom: 1.25rem;

  color: ${(props) => props.theme['gray-700']};
  line-height: 130%;
`

const BackgroundIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  padding: 8px;

  border-radius: 9999px;

  color: ${(props) => props.theme.white};
`

export const BackgroundIconCart = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['yellow-900']}; ;
`
export const BackgroundIconTimer = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['yellow-500']}; ;
`
export const BackgroundIconPackage = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['gray-700']}; ;
`
export const BackgroundIconCoffee = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['purple-500']}; ;
`
