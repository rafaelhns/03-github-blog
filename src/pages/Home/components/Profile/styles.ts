import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-profile']};
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;
`

export const ProfilePicute = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 10px;
`

export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  position: relative;

  .name {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 1.5rem;
  }

  .description {
    color: ${(props) => props.theme.colors['base-text']};
    flex: 1;
  }

  .data {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`

export const GithubProfile = styled.a`
  color: ${(props) => props.theme.colors.blue};
  font-size: 0.75rem;
  text-decoration: none;

  top: 8px;
  right: 0;
  position: absolute;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`

export const ProfileData = styled.span`
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
