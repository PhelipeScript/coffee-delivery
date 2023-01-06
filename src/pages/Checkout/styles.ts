import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  h2 {
    margin-top: 4.5rem;

    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`

const ContainerBase = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  max-width: 37.5rem;
  min-height: 20.75rem;

  background-color: ${(props) => props.theme['gray-200']};

  border-radius: 6px;

  h3 {
    display: flex;
    gap: 8px;

    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};

    margin-left: 30px;
    margin-bottom: 2rem;
  }
`

export const AddressContainer = styled(ContainerBase)``

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InputBase = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  margin-right: 0.75rem;
  margin-bottom: 1rem;

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  background-color: ${(props) => props.theme['gray-300']};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-900']};
  }
`

export const ZIPCodeInput = styled(InputBase)`
  width: 12.5rem;
`

export const StreetInput = styled(InputBase)`
  width: 100%;
`

export const BuildingNumberInput = styled(InputBase)`
  width: 12.5rem;
`

export const ComplementInput = styled(InputBase)`
  width: 18.5rem;
`

export const NeighborhoodInput = styled(InputBase)`
  width: 12.5rem;
`

export const CityInput = styled(InputBase)`
  width: 14rem;
`

export const StateInput = styled(InputBase)`
  width: 3.75rem;
`

export const PaymentContainer = styled(ContainerBase)`
  min-height: 10.438rem;
`

export const PaymentsLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  width: 10rem;
  height: 3.188rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;

  border-radius: 4px;

  background-color: ${(props) => props.theme['gray-400']};
  position: relative;

  input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;

    width: 10rem;
    height: 3.188rem;
    border-radius: 4px;

    cursor: pointer;

    &:checked {
      border: 1px solid ${(props) => props.theme['purple-500']};
    }
  }
`
