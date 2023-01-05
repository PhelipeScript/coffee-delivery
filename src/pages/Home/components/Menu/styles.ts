import styled from 'styled-components'

export const MenuContainer = styled.div`
  margin: 6rem 0 3.375rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 3.375rem;
  }
`

export const ItensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
