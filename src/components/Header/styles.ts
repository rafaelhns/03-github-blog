import styled from 'styled-components'
import cover from '../../assets/cover.jpg'

export const HeaderContainer = styled.header`
  background-image: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  padding: 4rem 0 8.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
