import styled from 'styled-components'

export const SuccessContainer = styled.main`
  & > h1 {
    margin-top: 7rem;

    color: ${(props) => props.theme['yellow-900']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  & > p {
    font-size: 1.25rem;
    line-height: 130%;

    margin-bottom: 2.5rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 6.375rem;
  }
`

export const BorderContainer = styled.div`
  border-radius: 6px 36px;
  border: double 1px transparent;
  background-image: linear-gradient(
      ${(props) => props.theme.white},
      ${(props) => props.theme.white}
    ),
    linear-gradient(
      45deg,
      ${(props) => props.theme['yellow-500']},
      ${(props) => props.theme['purple-500']}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 32.875rem;
  padding: 2.5rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

const BackgroundIcon = styled.span`
  width: 2rem;
  height: 2rem;
  padding: 8px;
  border-radius: 1000px;

  color: ${(props) => props.theme.white};
`

export const MapBackground = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['purple-500']};
`

export const TimerBackground = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['yellow-500']};
`

export const PaymentBackground = styled(BackgroundIcon)`
  background-color: ${(props) => props.theme['yellow-900']};
`
