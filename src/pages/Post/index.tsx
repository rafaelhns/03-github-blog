import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import { Icon } from '../../components/Icon'
import {
  BodyContainer,
  NavLinks,
  PostContainer,
  PostData,
  PostDataContainer,
  Title,
  TitleContainer,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <TitleContainer>
        <NavLinks>
          <NavLink to="/">
            <Icon variant="chevron-left" size={12} /> VOLTAR
          </NavLink>
          <NavLink to="/">
            VER NO GITHUB <Icon variant="link" size={12} />
          </NavLink>
        </NavLinks>

        <Title>Blog post title</Title>

        <PostDataContainer>
          <PostData>
            <Icon variant="github" size={18} /> RafaelXau
          </PostData>
          <PostData>
            <Icon variant="calendar" size={18} />
            Postado em 10 de Junho de 2021
          </PostData>
          <PostData>
            <Icon variant="comment" size={18} />
            Postado em 10 de Junho de 2021
          </PostData>
        </PostDataContainer>
      </TitleContainer>

      <BodyContainer>
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </BodyContainer>
    </PostContainer>
  )
}
