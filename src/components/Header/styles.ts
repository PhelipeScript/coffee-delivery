import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  img {
    width: 5.309rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`

export const LocaleAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    border: 0;
    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};

    position: relative;
    cursor: pointer;
  }
`

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 8px;

  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 6px;

  color: ${(props) => props.theme['purple-500']};
`

export const CartCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8.35px;

  width: 1.25rem;
  height: 1.25rem;

  box-sizing: initial;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['yellow-900']};
  color: ${(props) => props.theme.white};
`
