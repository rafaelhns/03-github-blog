import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: ${(props) => props.theme['max-width']};
  margin: -5.5rem auto 0;
  padding: 0 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const TitleContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-profile']};
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.colors.blue};
    font-size: 0.75rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors['base-title']};
  margin: 1.25rem 0 0.5rem;
`

export const PostDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`

export const PostData = styled.span`
  color: ${(props) => props.theme.colors['base-subtitle']};
  text-decoration: none;
  transition: color 0.2s;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    opacity: 0.4;
  }
`

export const BodyContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: auto;
  }

  pre {
    background-color: ${(props) => props.theme.colors['base-profile']};
    padding: 1rem;
    border-radius: 6px;
  }

  a {
    color: ${(props) => props.theme.colors.blue};
  }
`
