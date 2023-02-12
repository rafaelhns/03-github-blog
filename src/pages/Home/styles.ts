import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: ${(props) => props.theme['max-width']};
  margin: -5.5rem auto 0;
  padding: 0 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`
