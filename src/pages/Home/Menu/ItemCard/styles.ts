import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  min-height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['gray-200']};

  padding: 0 1.5rem;
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-600']};

    text-align: center;

    font-size: 0.875rem;
    line-height: 130%;

    margin-bottom: 2.063rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  margin: 0.75rem 0 1rem;
`

export const ItemTag = styled.span`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};

  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 130%;

  padding: 4px 8px;
  border-radius: 100px;
`

export const ItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.438rem;

  margin-bottom: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 2px;

    font-size: 0.875rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;

      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    align-items: center;

    padding: 8px;
    border-radius: 6px;

    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-500']};

    input {
      border: 0;
      background-color: transparent;
      text-align: center;

      width: 1.35rem;
    }
  }
`

export const AddCartButton = styled.button`
  background-color: ${(props) => props.theme['purple-900']};
  color: ${(props) => props.theme['gray-200']};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 6px;
  border: 0;

  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
