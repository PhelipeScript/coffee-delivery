import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  min-height: 63.313rem;
  padding: 2rem 10rem;

  margin: 0 auto;

  background-color: ${(props) => props.theme['gray-100']};

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`
