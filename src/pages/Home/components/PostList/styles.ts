import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  gap: 2rem;
`

export const PostCard = styled(NavLink)`
  background-color: ${(props) => props.theme.colors['base-post']};
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors['base-label']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-title']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  span {
    margin-top: 5px;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-span']};
    white-space: nowrap;
  }
`

export const PostCardBody = styled.div`
  margin-top: 1.25rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors['base-text']};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
