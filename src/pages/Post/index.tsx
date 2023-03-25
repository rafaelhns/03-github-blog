import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink, useParams } from 'react-router-dom'
import { Icon } from '../../components/Icon'
import { api } from '../../lib/api'
import {
  BodyContainer,
  NavLinks,
  PostContainer,
  PostData,
  PostDataContainer,
  Title,
  TitleContainer,
} from './styles'

interface BlogPost {
  title: string
  body: string
  comments: number
  urlGithub: string
  userName: string
  createdAt: Date
}

export function Post() {
  const { postId } = useParams()
  const [blogPost, setBlogPost] = useState<BlogPost>({} as BlogPost)

  useEffect(() => {
    async function fetchBlogPost() {
      const response = await api.get(
        `/repos/rafaelxau/03-github-blog/issues/${postId}`,
      )

      const {
        title,
        body,
        comments,
        user,
        html_url: urlGithub,
        created_at: createdAt,
      } = response.data

      setBlogPost({
        title,
        body,
        comments,
        urlGithub,
        userName: user.login,
        createdAt: new Date(createdAt.replace('T', ' ')),
      })
    }

    fetchBlogPost()
  }, [postId])

  return (
    <PostContainer>
      <TitleContainer>
        <NavLinks>
          <NavLink to="/">
            <Icon variant="chevron-left" size={12} /> VOLTAR
          </NavLink>
          <a href={blogPost.urlGithub} target="_blank" rel="noreferrer">
            VER NO GITHUB <Icon variant="link" size={12} />
          </a>
        </NavLinks>

        <Title>{blogPost.title}</Title>

        <PostDataContainer>
          <PostData>
            <Icon variant="github" size={18} /> {blogPost.userName}
          </PostData>
          <PostData>
            <Icon variant="calendar" size={18} />
            Posta do em{' '}
            {blogPost.createdAt?.toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </PostData>
          <PostData>
            <Icon variant="comment" size={18} />
            {`${blogPost.comments} comentário${
              blogPost.comments === 1 ? '' : 's'
            }`}
          </PostData>
        </PostDataContainer>
      </TitleContainer>

      <BodyContainer>
        <ReactMarkdown>{blogPost.body}</ReactMarkdown>
      </BodyContainer>
    </PostContainer>
  )
}
